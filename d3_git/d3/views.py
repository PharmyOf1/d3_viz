# -*- coding: utf-8 -*-
from django.shortcuts import render
from .hive import QueryData, MDLZHive
from django.http import JsonResponse, HttpResponse
import pandas as pd
import json

def home(request):
    return render(request, "d3/index.html", {})


def dashboard(request):
    return render(request, "d3/dashboard.html", {})

def load_data(request):
    hive = MDLZHive.ConnectHive(database='sales_reporting')
    q = hive.execute("""SELECT fiscal_day, sum(total_gross_revenue) as revenue
                        FROM daily_store_sku_transactional_dsc
                        WHERE fiscal_day > '2017-01-01'
                        AND   fiscal_day < '2017-07-01'
                        AND distribution_channel_id = 45
                        AND store_id > 0
                        GROUP BY fiscal_day
                       """)

    # q.columns=['date','close']
    # q = q.to_json()
    # data = {'data':dicts}
    q = [tuple(x) for x in q.values]
    fields = ['date', 'close']
    dicts = [dict(zip(fields, d)) for d in q]
    data = json.dumps(dicts)
    return HttpResponse(data, content_type='application/json')
