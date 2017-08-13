# -*- coding: utf-8 -*-
from django.shortcuts import render
from .hive import QueryData, MDLZHive
from django.http import JsonResponse
import pandas as pd
import json

def home(request):
    return render(request, "d3/index.html", {})

def load_data(request):
    hive = MDLZHive.ConnectHive(database='sales_reporting')
    q = hive.execute("""SELECT fiscal_day, sum(total_gross_revenue) as revenue
                        FROM daily_store_sku_transactional_dsc
                        WHERE fiscal_day > '2017-01-01'
                        GROUP BY fiscal_day
                       """)

    # q.columns=['date','close']
    # q = q.to_json()

    q = [tuple(x) for x in q.values]
    fields = ['date', 'close']
    dicts = [dict(zip(fields, d)) for d in q]
    data = {'data':dicts}
    return JsonResponse(dicts,safe=False)
