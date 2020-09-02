from flask import jsonify, url_for, flash, redirect, request, Blueprint
from flask_login import login_user, current_user, logout_user, login_required
from server import db
from werkzeug.security import generate_password_hash,check_password_hash
from server.models import User, Message
from server.users.forms import RegistrationForm, LoginForm, UpdateUserForm
from server.users.picture_handler import add_profile_pic


users = Blueprint('users', __name__)

@users.route('/register', methods=['GET', 'POST'])
def register():
    user = User(username=request.args.get('username'), password=request.args.get('password'))
    if db.session.query(User).filter_by(username=request.args.get('username')).count() < 1:
        db.session.add(user)
        db.session.commit()
        flash('Thanks for registering! Now you can login!')
  

@users.route('/login', methods=['GET', 'POST'])
def login():
    # Grab the user from our User Models table
    user = User.query.filter_by(user_name=request.args.get('username').first())

    # Check that the user was supplied and the password is right
    if user.check_password(password=request.args.get('password')):

        flash('Logged in successfully.')
        return jsonify(auth=True)
    return jsonify(auth=False)




@users.route("/logout")
def logout():
    return 'a string'


#list of messages
@users.route("/<username>")
@login_required
def user_messages(username):
    page = request.args.get('page', 1, type=int)
    user = User.query.filter_by(username=username).first_or_404()
    messages_sender = Message.query.filter_by(author=user).order_by(Message.date.desc()).paginate(page=page, per_page=5)
    messages_recieve = Message.query.filter_by(recieve=user).order_by(Message.date.desc()).paginate(page=page, per_page=5)

    return jsonify(messages_sender=messages_sender,messages_recieve=messages_recieve, user=user)
