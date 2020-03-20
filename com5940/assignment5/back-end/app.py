#!/usr/bin/env python
# coding: utf-8

# In[ ]:


from flask import Flask,render_template,url_for,redirect
from flask_sqlalchemy import SQLAlchemy
from flask_user import login_required,UserManager,UserMixin,SQLAlchemyAdapter
from flask_mail import Mail

app = Flask(__name__)

app.config['SECRET_KEY'] = 'thisissecretkey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost/bta'
app.config['CSRF_ENABLED'] = True
app.config['USER_ENABLE_EMAIL'] = True
app.config['USER_APP_NAME'] = 'Bubble Tea Addict'
app.config['USER_AFTER_REGISTER_ENDPOINT'] = 'user.login'
app.config.from_pyfile('config.cfg')

db = SQLAlchemy(app)
mail = Mail(app)

class User(db.Model,UserMixin):
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(50),nullable=False,unique=True)
    password = db.Column(db.String(255),nullable=False,server_default='')
    active = db.Column(db.Boolean(),nullable=False,server_default='0')
    email = db.Column(db.String(255),nullable=False,unique=True)
    confirmed_at = db.Column(db.DateTime())

db_adapter = SQLAlchemyAdapter(db,User)
user_manager = UserManager(db_adapter,app)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 9029, app)


# In[ ]:




