# -*- coding: utf-8 -*-
from django.shortcuts import render
from .hive import QueryData, MDLZHive
from django.http import JsonResponse, HttpResponse
import pandas as pd
import json, csv, os

def home(request):
    return render(request, "d3/index.html", {})

# def p_index(request):
#     return render(request, "d3/pages/index.html", {})
