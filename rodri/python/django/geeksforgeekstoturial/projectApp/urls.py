from django.urls import path
#now import the views.py file into this code
from . import views
urlpatterns=[
  path('',views.index),
  path('home/',views.home_view),
  path('input/',views.input_view),
]