from django.shortcuts import redirect, render
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.views import LoginView, LogoutView
from django.views.generic.base import *
from django.views.generic import *
from django.db import IntegrityError
import os
from django.conf import settings

from .forms import *
from .models import *

def registration(request):
    context = {
        'error_password': 0,
        'error_unique': 0,
        }
    try:
        if request.method == 'POST':
            name = request.POST['name']
            surname = request.POST['surname']
            grade = request.POST['grade']
            alias = request.POST['alias']
            password1 = request.POST['password1']
            password2 = request.POST['password2']
            if password1 != password2:
                context['error_password'] = 1
                return render(request, "registration.html", context)
            try:
                user = User.objects.create_user(username=alias, password=password1)
            except IntegrityError:
                context['error_unique'] = 1
                return render(request, "registration.html", context)
            login(request, user)
            Profile.objects.create(name=name, surname=surname, grade=grade, alias=alias, user_id=request.user)
            
            return redirect('base:profile')
    except:
        pass
    return render(request, "registration.html", context)

def Login(request):
    context = {
        'error_password': 0,
        }
    
    if request.method == 'POST':
        alias = request.POST.get('alias', False)
        password = request.POST.get('password', False)
        user = User.objects.get(username=alias)
        if user.check_password(password):
            login(request, user)
            return redirect('base:profile')
    return render(request, "login.html", context)

def Logout(request):
    logout(request)
    return redirect('base:profile')

def main(request):
    return render(request, "main2.html")

def mental_health(request):
    return render(request, "mental.html")








def tasks(request):
    context = {
        'tasks': Tasks.objects.all()[::-1],
    }
    if request.method == 'POST':
        comment = request.POST['comment']
        task_id = request.POST['task_id']
        TaskComment.objects.create(task_id=Tasks.objects.get(pk=task_id), text=comment)
    return render(request, "tasks5.html",context)

def ege_dop(request):
    return render(request, "ege-dop.html")








def projects(request):
    context = {
        'projects': Projects.objects.all()[::-1],
    }
    return render(request, "projects.html", context)

def vacancies(request):
    context = {
        'vacancies': Vacancies.objects.all()[::-1],
    }
    return render(request, "vacancies.html", context)

def clubs(request):
    context = {
        'clubs': Clubs.objects.all()[::-1],
        'path': settings.MEDIA_ROOT,
    }
    return render(request, "clubs2.html", context)








def profile(request):
    context = {
        'vacancies': Vacancies.objects.filter(user_id=request.user)[::-1],
        'projects': Projects.objects.filter(user_id=request.user)[::-1],
        'clubs': Clubs.objects.filter(user_id=request.user)[::-1],
        'profile': Profile.objects.get(user_id=request.user),
    }
    if request.method == 'POST':
        name = request.POST['name']
        surname = request.POST['surname']
        grade = request.POST['grade']
        alias = request.POST['alias']
        user = Profile.objects.get(user_id=request.user)
        user.name = name
        user.surname = surname
        user.grade = grade
        user.alias = alias
        user.save()
        user = User.objects.get(pk=request.user.id)
        user.username = alias
        user.save()
        context['profile'] = Profile.objects.get(user_id=request.user)
        return render(request, "profile.html", context)
    return render(request, "profile.html", context)

def add_project(request):
    if request.method == 'POST':
        name = request.POST['name']
        description = request.POST['description']
        link = request.POST['link']
        Projects.objects.create(name=name,description=description,
                                link=link,user_id=request.user)

        return redirect('base:profile')
    return render(request, "form-work.html", context={'get_project': 0})


def edit_project(request, pk):
    get_project = Projects.objects.get(pk=pk)

    if request.method == 'POST':
        name = request.POST['name']
        description = request.POST['description']
        link = request.POST['link']
        get_project.name = name
        get_project.description = description
        get_project.link = link
        get_project.save()
        return redirect('base:profile')
        
    context = {
        'get_project': get_project,
    }
    return render(request, "form-work.html", context)

def delete_project(request, pk):
    Projects.objects.get(pk=pk).delete()
    return redirect('base:profile')

def add_vacancy(request):
    if request.method == 'POST':
        name = request.POST['name']
        description = request.POST['description']
        link = request.POST['link']
        Vacancies.objects.create(name=name,description=description,
                                link=link,user_id=request.user)

        return redirect('base:profile')
    return render(request, "form-work.html", context={'get_project_link': 1})


def edit_vacancy(request, pk):
    get_vacancy = Vacancies.objects.get(pk=pk)

    if request.method == 'POST':
        name = request.POST['name']
        description = request.POST['description']
        link = request.POST['link']
        get_vacancy.name = name
        get_vacancy.description = description
        get_vacancy.link = link
        get_vacancy.save()
        return redirect('base:profile')
        
    context = {
        'get_project': get_vacancy,
    }
    return render(request, "form-work.html", context)

def delete_vacancy(request, pk):
    Vacancies.objects.get(pk=pk).delete()
    return redirect('base:profile')

def add_club(request):
    context = {
        'get_club': 1,
        'get_project': 0,
    }
    if request.method == 'POST' or request.method == 'FILES':
        name = request.POST['name']
        description = request.POST['description']
        link = request.POST['link']
        tags = request.POST['tags']
        img = request.FILES['img']
        Clubs.objects.create(name=name,description=description,
                                link=link,user_id=request.user,img=img,tags=tags)

        return redirect('base:profile')
    return render(request, "form-work.html", context)


def edit_club(request, pk):
    get_club = Clubs.objects.get(pk=pk)
    context = {
        'get_project': get_club,
        'get_club': 1,
    }

    if request.method == 'POST' or request.method == 'FILES':
        name = request.POST['name']
        description = request.POST['description']
        link = request.POST['link']
        tags = request.POST['tags']
        try:
            img = request.FILES['img']
        
            if img != get_club.img:
                path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'media', get_club.img.name)
                if os.path.exists(path):
                    os.remove(path)
        except:
            pass
        get_club.name = name
        get_club.description = description
        get_club.link = link
        try:
            get_club.img = img
        except:
            pass
        get_club.tags = tags
        get_club.save()
        
        return redirect('base:profile')
        
    return render(request, "form-work.html", context)

def delete_club(request, pk):
    Clubs.objects.get(pk=pk).delete()
    return redirect('base:profile')

def add_task(request):
    if request.method == 'POST' or request.method == 'FILES':
        category = request.POST['category']
        text = request.POST['text']
        answer = request.POST['answer']
        task = Tasks.objects.create(user_id=request.user, category=category, text=text, answer=answer)
        for f in request.FILES.getlist('file'):
            TasksFiles.objects.create(task_id=task, file=f)
        return redirect('base:tasks')
    return render(request, "form-task.html")