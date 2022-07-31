from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<item_id>/delete/', views.delete, name='delete'),
]