# Generated by Django 4.1.2 on 2022-10-21 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='roomname',
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('roomname', models.SlugField(max_length=255, unique=True)),
                ('members', models.ManyToManyField(to='webapi.user')),
            ],
        ),
    ]
