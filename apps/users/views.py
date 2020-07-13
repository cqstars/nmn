from django.shortcuts import render
from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from .models import UserProfile
# Create your views here.



class CustomBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None):
        try:
            user = UserProfile.objects.get(Q(username=username) | Q(mobile=username))
            if user.check_password(password):
                return user
        except Exception as e:
            return None