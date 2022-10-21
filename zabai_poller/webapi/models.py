from django.db import models


class User(models.Model):
	username = models.CharField(primary_key=True, max_length=127)
	password = models.CharField(max_length=255)

	def serialize(self):
		return dict(username=self.username)


class Room(models.Model):
	roomname = models.SlugField(unique=True, max_length=255)
	members = models.ManyToManyField(User)


class Poll(models.Model):
	owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
	room = models.ForeignKey(Room, on_delete=models.CASCADE)
	question = models.CharField(max_length=255)

	def serialize(self):
		return {
			'id': self.pk,
			'owner': self.owner.pk,
			'question': self.question,
			'options': [option.serialize() for option in self.option_set.all()]
		}


class Option(models.Model):
	poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
	value = models.CharField(max_length=255)

	def serialize(self):
		return {
			'id': self.pk,
			'value': self.value,
			'count': self.response_set.all().count()
		}


class Response(models.Model):
	option = models.ForeignKey(Option, on_delete=models.CASCADE)
	respondee = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

	def serialize(self):
		return {
			'option': self.option.serialize(),
			'respondee': self.respondee.pk
		}