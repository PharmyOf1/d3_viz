from django.conf.urls import url
from django.contrib import admin
from .views import home, data, load_data, p_index

urlpatterns = [
    url(r'^data$', data, name='data'),
    url(r'^$', home, name='home'),
    url(r'^api/load_data', load_data, name='load_data'),


    url(r'^d3/pages/index.html$', p_index, name='p_index'),

]
