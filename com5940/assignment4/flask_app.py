#!/usr/bin/env python
# coding: utf-8

# In[ ]:


############# Flask Modules Setup ##############
from flask import Flask, render_template, url_for, redirect, request, make_response, Response, jsonify
from flask_login import LoginManager, login_user, logout_user, login_required, UserMixin
from flask_cors import CORS

import MySQLdb

######### Initialize Flask App ##########
app = Flask(__name__)
CORS(app)


######### MySQL Database Setup ##########
# connection = pymysql.connect(host="localhost", 
connection = MySQLdb.connect(host="localhost",
                     user="root",   
                     passwd="root", 
                     db="teaculture",   
                     charset='utf8mb4')      
                     # cursorclass=pymysql.cursors.DictCursor)

######### Login Manager Setup ##########
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
app.config['SECRET_KEY'] = "lkkajdghdadkglajkgah"

@login_manager.user_loader
def load_user(user_id):
    return User(user_id)

class User(UserMixin):
  def __init__(self,id):
    self.id = id
    
############ Web Page Routes Setup ###############
@app.route("/")
@login_required
def home():
    return render_template('index.html')

@app.route("/login")
def login():
    message = '请先登录。'
    return render_template('login.html', message=message)

@app.route('/query_auth')
def query_auth():
    username = request.args.get("username")
    password = request.args.get("password")
    if username == "bernard@cuhk.edu.hk" and password == "1234":
        login_user(User(1))
        message = username + "，您已成功登陆！ "
        return make_response(message, 200, )
    else:
        message = '密码错误。'
        return make_response( messagte,401,{'WWW-Authenticate':'Basic realm="Login Required"'})

@app.route("/form_auth",methods=['POST'])
def form_auth():
    username = request.form['email']
    password = request.form['pwd']
    if username == "bernard@cuhk.edu.hk" and password == "1234":
        login_user(User(1))
        message = username + "，您已成功登陆！ "
        return render_template('index.html', message=message)
    else:
        message = '密码错误。'
        return render_template('login.html',message=message)    

@app.route("/teaculture")
@login_required
def teaculture():
    with connection.cursor() as cursor:
        sql = "SELECT * FROM tea_cul"
        cursor.execute(sql)
        result = cursor.fetchall()
    #connection.close()
    final_result = [list(i) for i in result]
    dataset=[]
    dict={}
    for i in final_result:
        dict['tea_id'] = i[0]
        dict['name'] = i[1]
        dict['image'] = i[2]
        dict['drinknumber'] = i[3]
        dict['describe'] = i[4]
        dict['nutrition'] = i[5]
        dict['note'] = i[6]
        dataset.append(dict.copy())
    
    return render_template('teaculture.html',dataset=dataset)

@app.route('/logout/')
@login_required
def logout():
    logout_user()
    message = '您已成功注销。'
    return render_template('login.html',message=message)

@app.errorhandler(500)
def internal_error(error):
    message = '密码错误。'
    return render_template('login.html',message=message),500

######### API Endpoints ##########    

@app.route('/api_auth', methods=['POST'])
def api_auth():
    username = request.json['username']
    password = request.json['password']
    if username == "bernard@cuhk.edu.hk" and password == "1234":
        login_user(User(1))
        message = username + "，您已成功登陆！ "
        return jsonify({'response':'ok!','message':message})
    else:
        message = '密码错误。'
        return jsonify({'response':'Invalid!','message':'Cannot authenticate.'})
    
@app.route('/api_album', methods=['POST'])
@login_required
def api_album():
    user = {"name":"Minmin"}
    with connection.cursor() as cursor:
        sql = "SELECT * FROM tea_cul"
        cursor.execute(sql)
        # Display results
        result = cursor.fetchall()
    connection.close()
    # print(result)
    # print('\n')
    final_result = [list(i) for i in result]
    dataset=[]
    dict={}
    for i in final_result:
        dict['tea_id'] = i[0]
        dict['name'] = i[1]
        dict['image'] = i[2]
        dict['drinknumber'] = i[3]
        dict['describe'] = i[4]
        dict['nutrition'] = i[5]
        dict['note'] = i[6]
        # print(i)
        # print(dict)
        dataset.append(dict.copy())
    return jsonify({'Teaculture': dataset})

######### Run Flask Web App at Port 9030 ##########    

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 9029, app)


# In[ ]:




