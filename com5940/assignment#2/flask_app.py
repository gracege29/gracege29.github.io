#!/usr/bin/env python
# coding: utf-8

# In[ ]:


from flask import Flask, render_template
import pymysql.cursors
import requests
from werkzeug.wsgi import SharedDataMiddleware
app = Flask(__name__)

@app.route("/")
def home():
    headers = {
    'Authorization': 'Bearer keyVPDmCemvZStnmu',
    }

    params = (
    ('view', 'Grid view'),
    )

    user = {"name":"Minmin"}
    r = requests.get('https://api.airtable.com/v0/appOGUo9hUZBXcZ8R/Table%202?api_key=keyVPDmCemvZStnmu', headers=headers, params=params)
    dict = r.json()
    dataset = []
    name = []
    shop = []
    describe = []
    ingredients = []
    drinktype= []
    tea = []
    offset=dict['offset']
    for i in dict['records']:
        dict = i['fields']
        dataset.append(dict)

    for i in range(4):
        r = requests.get(
            'https://api.airtable.com/v0/appOGUo9hUZBXcZ8R/Table%202?api_key=keyVPDmCemvZStnmu',
            headers=headers,
            params={'offset':offset}
        )
        dict = r.json()
        if dict.get('offset') != None:
            offset = dict['offset']
        for i in dict['records']:
            dict = i['fields']
            dataset.append(dict)
            
    for dicts in dataset:
        name.append(dicts.get('name'))
        describe.append(dicts.get('describe'))
        shop.append(dicts.get('shop'))
        ingredients.append(dicts.get('ingredients'))
        drinktype.append(dicts.get('type'))
        tea.append(dicts.get('tea'))
    #print(name,'\n',describe,'\n',shop,'\n',ingredients,'\n',drinktype,'\n',tea,'\n')
    #  {% for row in dataset  %}{{ row["name"] }}{% endfor %}
    return render_template('home.html',album_user=user, dataset=dataset)


@app.route("/aboutus")
def aboutus():
    return render_template('aboutus.html')

#if __name__ == '__main__':
    #from werkzeug.serving import run_simple
    #run_simple('localhost', 9010, app)
if __name__ == '__main__':
    app.run(debug = True)


# In[ ]:




