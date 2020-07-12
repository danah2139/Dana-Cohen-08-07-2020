from flask import jsonify,url_for,flash, redirect,request,Blueprint, abort
from flask_login import current_user,login_required
from server import db
from server.models import Message
from server.messages.forms import MessageForm

messages = Blueprint('messages',__name__)

@messages.route('/create',methods=['GET','POST'])
@login_required
def create_post():
    form = MessageForm()

    if form.validate_on_submit():

        message = Message(sender_id=form.sender_id,subject=form.subject.data,
                             body=form.body.data,
                             user_id=current_user.id
                             )
        db.session.add(message)
        db.session.commit()
        flash("Email Created")

    return jsonify(sender_id=form.sender_id,subject=form.subject.data,
                             body=form.body.data,
                             user_id=current_user.id)


# int: makes sure that the blog_post_id gets passed as in integer
# instead of a string so we can look it up later.
@messages.route('/<int:blog_post_id>')
def message(blog_post_id):
    # grab the requested Email by id number or return 404
    message = Message.query.get_or_404(blog_post_id)
    return jsonify(subject=message.subject,
                            date=message.date,post=message
    )

@messages.route("/<int:blog_post_id>/update", methods=['GET', 'POST'])
@login_required
def update(blog_post_id):
    message = Message.query.get_or_404(blog_post_id)
    if message.author != current_user:
        # Forbidden, No Access
        abort(403)

    form = MessageForm()
    if form.validate_on_submit():
        message.title = form.title.data
        message.text = form.text.data
        db.session.commit()
        flash('Message Updated')
        return 'a string'
 #       return redirect(url_for('messages.message', blog_post_id=message.id))
    # Pass back the old Email information so they can start again with
    # the old text and title.
    elif request.method == 'GET':
        form.subject.data = message.subject
        form.body.data = message.body
    return jsonify( title='Update',
                           form=form)


@messages.route("/<int:blog_post_id>/delete", methods=['POST'])
@login_required
def delete_post(blog_post_id):
    message = Message.query.get_or_404(blog_post_id)
#------ add abort???
    db.session.delete(message)
    db.session.commit()
    flash('Message has been deleted')
    return 'a string'
