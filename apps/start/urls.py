# -*- coding: utf-8 -*-
# @Time    : 2019-12-06 11:30
# @Author  : 彭涛
# @Site    : 
# @File    : urls.py
# @Software: PyCharm

from django.urls import path,re_path
from django.views.generic import TemplateView

from . import views
app_name = 'start'
urlpatterns = [
    path('', views.indexview.as_view(), name='start'),


    # path('login', views.LoginView.as_view(), name='login'),
    # path('reg', views.regview.as_view(), name='reg'),
    # path('fpw', views.fpwView.as_view(), name='fpw'),
]