# -*- coding: utf-8 -*-
from django.shortcuts import render
from .hive import QueryData, MDLZHive
import pandas as pd
import json

def home(request):
    hive = MDLZHive.ConnectHive(database='sales_reporting')
    q = hive.execute("""SELECT fiscal_day, sum(total_gross_revenue) as revenue from daily_store_sku_transactional_dsc where fiscal_day > '2017-07-07' group by fiscal_day limit 10
                       """)

    q = [tuple(x) for x in q.values]
    fields = ['date', 'close']
    dicts = [dict(zip(fields, d)) for d in q]
    data = {'data':dicts}
    return render(request, "d3/index.html", data)
