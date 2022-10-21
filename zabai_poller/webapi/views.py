from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST, require_GET

from .models import User, Poll, Option, Response, Room


@require_POST
@csrf_exempt
def create_user(request):
	params = request.POST.dict()
	user = User(**{
		'username': params.get('username', '')
	})
	user.save()
	room = Room(**{
		'roomname': params.get('roomname', '')
	})
	room.save()
	room.members.add(user)
	return JsonResponse({'username': user.username, 'roomname': room.roomname})


@require_POST
@csrf_exempt
def get_user(request):
	params = request.POST.dict()
	user = User.objects.get(**{
		'username': params.get('username', '')
	})
	room = Room.objects.get(roomname=params.get('roomname', ''))
	room.members.add(user)
	return JsonResponse({'username': user.username, 'roomname': room.roomname})


@require_POST
@csrf_exempt
def join_room(request):
	params = request.POST.dict()
	user = User.objects.get(**{
		'username': params.get('username', '')
	})
	return JsonResponse(user.serialize())


@require_POST
@csrf_exempt
def create_poll(request):
	params = request.POST.dict()
	options = request.POST.getlist('option')
	poll = Poll(**{
		'question': params.get('question', ''),
		'owner': User.objects.get(pk=params.get('username', '')),
		'room': Room.objects.get(roomname=params.get('roomname', ''))
	})
	poll.save()
	for option in options:
		opt = Option(**{
			'value': option,
			'poll': poll
		});
		opt.save()
	return JsonResponse(poll.serialize())


@require_POST
@csrf_exempt
def get_polls(request):
	params = request.POST.dict()
	polls = Poll.objects.filter(**{
		'room': Room.objects.get(roomname=params.get('roomname', ''))
	})
	out = []
	for poll in polls:
		out.append(poll.serialize())
	return JsonResponse(out, safe=False)


@require_POST
@csrf_exempt
def send_response(request):
	params = request.POST.dict()
	response = Response(**{
		'option': Option.objects.get(pk=params.get('option', -1)),
		'respondee': User.objects.get(pk=params.get('respondee', ''))
	})
	response.save()
	count = Response.objects.filter(option=response.option).count()
	return JsonResponse({'poll': response.option.poll.id, 'option': response.option.id, 'count': count})


@require_POST
@csrf_exempt
def get_result(request):
	params = request.POST.dict()
	poll = Poll.objects.get(pk=params['poll'])
	options = poll.option_set.all()
	result = []
	for option in options:
		result.append({'option': option.pk, 'responses': option.response_set.all().count()})

	return JsonResponse(result, safe=False)

