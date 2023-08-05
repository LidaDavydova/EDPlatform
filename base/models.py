from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
tz = timezone.get_default_timezone()

class Profile(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    grade = models.CharField(max_length=100)
    alias = models.URLField(max_length=200)
    user_id = models.ForeignKey(User, default=None, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.alias

class Projects(models.Model):
    user_id = models.ForeignKey(User, default=None, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField()
    link = models.URLField(max_length=200)

    def __str__(self) -> str:
        return self.name
    
class Vacancies(models.Model):
    user_id = models.ForeignKey(User, default=None, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField()
    link = models.URLField(max_length=200)

    def __str__(self) -> str:
        return self.name

def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT / media / user_<id>/<filename>
    return 'club/user_{0}/{1}'.format(instance.user_id, filename)

class Clubs(models.Model):
    user_id = models.ForeignKey(User, default=None, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField()
    link = models.URLField(max_length=200)
    tags = models.CharField(max_length=200)
    img = models.ImageField(upload_to = user_directory_path)

    def __str__(self) -> str:
        return self.name
    
def task(instance, filename):
    return 'task/{0}/{1}'.format(instance.task_id.user_id, filename)
    
class Tasks(models.Model):
    user_id = models.ForeignKey(User, default=None, on_delete=models.CASCADE)
    category = models.CharField(max_length=50)
    text = models.TextField()
    answer = models.CharField(max_length=100)

class TasksFiles(models.Model):
    file = models.FileField(upload_to = task)
    task_id = models.ForeignKey(Tasks, default=None, on_delete=models.CASCADE, related_name='files')

class TaskComment(models.Model):
    task_id = models.ForeignKey(Tasks, default=None, on_delete=models.CASCADE, related_name='comments')
    text = models.TextField()
    created = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return 'Заявка от {}'.format(self.created.astimezone(tz).strftime('%d.%m.%Y %H:%M'))

