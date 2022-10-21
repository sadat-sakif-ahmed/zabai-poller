from django.db import models


class Member(models.Model):
	display_name = models.TextField()
	user_name = models.CharField(max_length=31, primary_key=True)


class Room(models.Model):
	display_name = models.TextField()
	url_slug = models.SlugField(max_length=63, unique=True)
	owner = models.ForeignKey(Member, on_delete=models.CASCADE)


class Question(models.Model):
	question = models.TextField()


class AnswerChoices(models.Model):
	question = models.ForeignKey(Question, on_delete=models.CASCADE)
	answer_choice = models.TextField()


class Response(models.Model):
	member = models.ForeignKey(Member, on_delete=models.CASCADE)
	answer = models.ForeignKey(AnswerChoices, on_delete=models.CASCADE)