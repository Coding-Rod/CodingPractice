from django.urls import path
#now import the views.py file into this code
from . import views
urlpatterns=[
  path('',views.index.as_view(),name='index'),
  path('home/',views.home_view, name='home'),
  path('input/',views.input_view, name='input'),
]