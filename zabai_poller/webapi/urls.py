from django.urls import path

from . import views

urlpatterns = [
	path('user/create', views.create_user, name='create-user'),
	path('user/get', views.get_user, name='get-user'),
	path('room/join', views.join_room, name='join-room'),
	path('poll/create', views.create_poll, name='create-poll'),
	path('poll/get', views.get_polls, name='get-poll'),
	path('poll/respond', views.send_response, name='send-response'),
	path('poll/result', views.get_result, name='poll-result'),
]
