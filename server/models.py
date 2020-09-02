from server import db , login_manager
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

# The user_loader decorator allows flask-login to load the current user
# and grab their id.

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

class User(db.Model , UserMixin):
     # Create a table in the db
    __tablename__ = 'users'
    
    id = db.Column(db.Integer,primary_key = True)
    profile_image = db.Column(db.String(64),nullable = False , default = 'default_profile1.png') 
    username = db.Column(db.String(64),unique= True,index = True)
    password_hash = db.Column(db.String(128))
    # This connects Messages to a User Author
    # lazy set to true emits a SELECT statement when loading
    messages = db.relationship('Message',backref = 'author',lazy = True)


    def __init__(self,username,password):
        self.username = username
        self.password_hash = generate_password_hash(password)

    def check_password(self,password):
        return check_password_hash(self.password_hash,password)

    def __repr__(self): #for debuging
        return f"Username {self.username}"

class Message(db.Model, UserMixin):    
    id = db.Column(db.Integer,primary_key=True)
    # Notice how we connect the Message to a particular sender and recipent
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'),nullable = False)
    sender_id=db.Column(db.Integer,db.ForeignKey('users.id'),nullable = False)
    date = db.Column(db.DateTime , nullable = False,default = datetime.utcnow)
    subject = db.Column(db.String(140),nullable=True)
    body = db.Column(db.Text,nullable=True)
    Emails_send = db.relationship('User',foreign_keys=[user_id])
    Emails_recieve=db.relationship('User',foreign_keys=[sender_id])

    def __init__(self,subject,body,user_id,sender_id):
        self.user_id = user_id
        self.sender_id = sender_id
        self.subject = subject
        self.body = body
    
    def __repr__(self): #for debuging
        return f"Email ID:  {self.id} --- Date: {self.date} --- {self.subject}--{self.sender_id}"
