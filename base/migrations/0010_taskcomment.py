# Generated by Django 4.2.3 on 2023-08-02 08:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_tasks_answer'),
    ]

    operations = [
        migrations.CreateModel(
            name='TaskComment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('created', models.DateTimeField()),
                ('task_id', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='base.tasks')),
            ],
        ),
    ]
