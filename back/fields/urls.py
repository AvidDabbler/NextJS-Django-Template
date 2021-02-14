from django.urls import include, path
from . import views

urlpatterns = [
    path('all/',  views.getAll),
    path('search/<str:pk>/',  views.getFields),
]