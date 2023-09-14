from django.urls import path
from . import views
from .views import *
from django.conf.urls.static import static
from django.conf import settings
 
app_name = 'base'

urlpatterns = [
    path('profile/edit_project/<int:pk>', views.edit_project, name='edit_project'),
    path('profile/delete_project/<int:pk>', views.delete_project, name='delete_project'),
    path('profile/edit_club/<int:pk>', views.edit_club, name='edit_club'),
    path('profile/delete_club/<int:pk>', views.delete_club, name='delete_club'),
    path('profile/edit_vacancy/<int:pk>', views.edit_vacancy, name='edit_vacancy'),
    path('profile/delete_vacancy/<int:pk>', views.delete_vacancy, name='delete_vacancy'),
    path('profile/add_project/', views.add_project, name='add_project'),
    path('profile/add_vacancy/', views.add_vacancy, name='add_vacancy'),
    path('profile/add_club/', views.add_club, name='add_club'),
    path('tasks/add_task', views.add_task, name='add_task'),
    path('profile/', views.profile, name='profile'),
    path('profile2/', views.profile2, name='profile2'),
    path('ege_dop/', views.ege_dop, name='ege_dop'),
    path('tasks/', views.tasks, name='tasks'),
    path('projects/', views.projects, name='projects'),
    path('vacancies/', views.vacancies, name='vacancies'),
    path('clubs/', views.clubs, name='clubs'),
    path('login/', views.Login, name='login'),
    path('logout/', views.Logout, name='logout'),
    path('registration/', views.registration, name='registration'),
    path('mental_health/', views.mental_health, name='mental_health'),
    path('', views.main, name='home'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)