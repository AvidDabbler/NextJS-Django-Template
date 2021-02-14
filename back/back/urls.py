from django.contrib import admin
from django.urls import include, path
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
# )


urlpatterns = [
    path('admin/', admin.site.urls),
    path('fields/', include('fields.urls')),
    path('api/users/', include('users.urls')),
]
