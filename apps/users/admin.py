from django.contrib import admin
from .models import *

# Register your models here.
# Register your models here.
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'username','nick_name','mobile')
    ordering = ('id',)
