from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


# Create your models here.

class UserProfile(AbstractUser):
    nick_name = models.CharField(max_length=50, verbose_name="昵称", default="")
    birthday = models.DateField(verbose_name="生日", null=True, blank=True)
    gender = models.CharField(verbose_name="性别",max_length=6, choices=(("male","男"),("female","女")), default="female")
    address = models.CharField(max_length=100, verbose_name="地址",default="")
    mobile = models.CharField(max_length=11,  verbose_name="电话",unique=True)
    image = models.ImageField(verbose_name="上传图片",upload_to="media/%Y/%m",default="media/default.png", max_length=100)

    class Meta:
        verbose_name = "用户信息"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.nick_name
