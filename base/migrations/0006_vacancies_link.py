# Generated by Django 4.2.3 on 2023-07-27 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_clubs_user_id_alter_projects_user_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='vacancies',
            name='link',
            field=models.URLField(default=1),
            preserve_default=False,
        ),
    ]