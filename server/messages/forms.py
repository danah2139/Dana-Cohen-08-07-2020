from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired,Email,EqualTo
from server.models import User
from wtforms import ValidationError


class MessageForm(FlaskForm):
    # no empty titles or text possible
    # we'll grab the date automatically from the Model later
    sender_id = StringField('Username', validators=[DataRequired()])
    subject = StringField('Title')
    body = TextAreaField('Text')
    submit = SubmitField('BlogPost')


    def is_username_exist(self, field):
        # Check if not None for that user email!
        if not User.query.filter_by(username=field.data).first():
            raise ValidationError('Your email has been registered already!')