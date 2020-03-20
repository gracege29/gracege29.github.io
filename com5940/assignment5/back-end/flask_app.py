#!/usr/bin/env python
# coding: utf-8

# In[ ]:


from flask import Flask,render_template,url_for,redirect,request, make_response, Response, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_user import login_required,UserManager,UserMixin,SQLAlchemyAdapter,LoginManager
from flask_mail import Mail
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'thisissecretkey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://s1155129597:Geminmin929@s1155129597.mysql.pythonanywhere-services.com/s1155129597$default'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['CSRF_ENABLED'] = True
app.config['USER_ENABLE_EMAIL'] = True
app.config['USER_APP_NAME'] = 'Bubble Tea Addict'
app.config['USER_AFTER_REGISTER_ENDPOINT'] = 'user.login'
###邮箱设置###
app.config.from_pyfile('config.cfg')

db = SQLAlchemy(app)
mail = Mail(app)

###用户注册###
class User(db.Model,UserMixin):
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(50),nullable=False,unique=True)
    password = db.Column(db.String(255),nullable=False,server_default='')
    active = db.Column(db.Boolean(),nullable=False,server_default='0')
    email = db.Column(db.String(255),nullable=False,unique=True)
    confirmed_at = db.Column(db.DateTime())
    
###奶茶种类###
class Drinks(db.Model):
    __tablename__ = 'drinks'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    shop = db.Column(db.String(50))
    teatype = db.Column(db.String(50))
    tea = db.Column(db.String(50))
    ingredients = db.Column(db.String(255))
    describe = db.Column(db.Text)

db_adapter = SQLAlchemyAdapter(db,User)
user_manager = UserManager(db_adapter,app)

############## Login Manager Setup ###############

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
##app.config['SECRET_KEY'] = "lkkajdghdadkglajkgah"

@login_manager.user_loader
def load_user(user_id):
    return User(user_id)

class User(UserMixin):
  def __init__(self,id):
    self.id = id
    
############ Web Page Routes Setup ###############
@app.route('/')
@login_required
def home():
    return render_template('index.html')

@app.route('/album')
@login_required
def album():
    page_num = 1
    drinks = Drinks.query.paginate(per_page=9, page=page_num, error_out=True) 
    return render_template('album.html', drinks=drinks)

@app.route('/album/<int:page_num>')
def album_paging(page_num):
    drinks = Drinks.query.paginate(per_page=6, page=page_num, error_out=True) 
    return render_template('album.html', drinks=drinks)

@app.route("/list_album")
@login_required
def list_album():
    dataset = []
    drink_list = Drinks.query.all()
    for drink in drink_list:
        dataset.append({'id': drink.id,'名称': drink.name, '店铺': drink.shop, 
                       '茶类型': drink.teatype, '茶底':drink.tea,'配料': drink.ingredients,'介绍': drink.describe})
    return render_template('list_album2.html', entries=dataset)

@app.route("/add_product",methods=['POST'])
@login_required
def add_product():
    id = request.form['id']
    name = request.form['name']
    shop = request.form['shop']
    teatype = request.form['teatype']
    tea = request.form['tea']
    ingredients = request.form['ingredients']
    describe = request.form['describe']
    drink = Drinks(id=id,name=name,shop=shop,teatype=teatype,tea=tea,ingredients=ingredients,describe=describe)
    db.session.add(drink)
    db.session.commit()
    dataset = []
    drink_list = Drinks.query.all()
    for drink in drink_list:
        dataset.append({'id': drink.id,'名称': drink.name, '店铺': drink.shop, 
                       '茶类型': drink.teatype, '茶底':drink.tea,'配料': drink.ingredients,'介绍': drink.describe})
    return render_template('list_album2.html', entries=dataset)    

@app.route("/update_product",methods=['POST','PUT'])
@login_required
def update_product():
    record_id = request.form['record_id']
    drink = Drinks.query.filter_by(id=record_id).first()
    drink.name = request.form['name']
    drink.shop = request.form['shop']
    drink.teatype = request.form['teatype']
    drink.tea = request.form['tea']
    drink.ingredients = request.form['ingredients']
    drink.describe = request.form['describe']
    db.session.commit()
    dataset = []
    drink_list = Drinks.query.all()
    for drink in drink_list:
        dataset.append({'id': drink.id,'名称': drink.name, '店铺': drink.shop, 
                       '茶类型': drink.teatype, '茶底':drink.tea,'配料': drink.ingredients,'介绍': drink.describe})
    return render_template('list_album2.html', entries=dataset)  

@app.route("/delete_product",methods=['POST','DELETE'])
@login_required
def delete_product():
    record_id = request.form['record_id']
    drink = Drinks.query.filter_by(id=record_id).first()
    db.session.delete(drink)
    db.session.commit()
    dataset = []
    drink_list = Drinks.query.all()
    for drink in drink_list:
        dataset.append({'id': drink.id,'名称': drink.name, '店铺': drink.shop, 
                       '茶类型': drink.teatype, '茶底':drink.tea,'配料': drink.ingredients,'介绍': drink.describe})
    return render_template('list_album2.html', entries=dataset)

@app.route('/api')
def api():
    result = db.engine.execute('select * from drinks')
    final_result = [list(i) for i in result]
    dataset=[]
    dict={}
    for i in final_result:
        dict['id'] = i[0]
        dict['name'] = i[1]
        dict['shop'] = i[2]
        dict['teatype'] = i[3]
        dict['tea'] = i[4]
        dict['ingredients'] = i[5]
        dict['describe'] = i[6]
        # print(i)
        # print(dict)
        dataset.append(dict.copy()) #markers.append(fld.copy())
    return jsonify({'Album': dataset}) 

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 9029, app)


# In[ ]:




