# Generated by Django 4.2.3 on 2023-07-20 17:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_alter_clubs_link_alter_projects_link'),
    ]

    operations = [
        migrations.RenameField(
            model_name='clubs',
            old_name='profile_id',
            new_name='user_id',
        ),
        migrations.RenameField(
            model_name='projects',
            old_name='profile_id',
            new_name='user_id',
        ),
        migrations.RenameField(
            model_name='vacancies',
            old_name='profile_id',
            new_name='user_id',
        ),
    ]
