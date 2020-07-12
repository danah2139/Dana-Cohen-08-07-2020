from flask import request,Blueprint,jsonify
from server.models import Message

core = Blueprint('core',__name__)

@core.route('/')
def index():
    # page = request.args.get('page',1,type=int)
    # blog_posts = Message.query.order_by(Message.date.desc()).paginate(page=page,per_page=5)
    # return jsonify(blog_posts=blog_posts)
    return 'a string'

