from django.conf.urls import url
from django.contrib import admin
from .views import home, load_data

urlpatterns = [
    url(r'^$', home, name='home'),
    url(r'^api/load_data', load_data, name='load_data'),
]
