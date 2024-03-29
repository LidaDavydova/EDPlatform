# Generated by Django 4.2.3 on 2023-07-19 17:59

import base.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('surname', models.CharField(max_length=100)),
                ('grade', models.CharField(max_length=100)),
                ('alias', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Vacancies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('profile_id', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='base.profile')),
            ],
        ),
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('link', models.CharField(max_length=200)),
                ('profile_id', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='base.profile')),
            ],
        ),
        migrations.CreateModel(
            name='Clubs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('link', models.CharField(max_length=200)),
                ('img', models.ImageField(upload_to=base.models.user_directory_path)),
                ('profile_id', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='base.profile')),
            ],
        ),
    ]
