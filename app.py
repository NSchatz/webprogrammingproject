import flask
import os
from dotenv import load_dotenv, find_dotenv
from flask import jsonify
from models import db, Users, Posts
from flask_sqlalchemy import SQLAlchemy
from flask_login import login_user, logout_user, LoginManager, current_user
from werkzeug.security import generate_password_hash, check_password_hash

app = flask.Flask(__name__)

login_manager = LoginManager()
login_manager.init_app(app)

bp = flask.Blueprint(
    "bp",
    __name__,
    template_folder="./static/react",
)




load_dotenv(find_dotenv())
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
SECRET_KEY = os.getenv("SECRET_KEY")
app.config["SECRET_KEY"] = SECRET_KEY


db.init_app(app)
with app.app_context():
    db.create_all()


@bp.route("/")
def index():
    return flask.render_template("index.html")

@bp.route("/login")
def login():
    """login page"""
    return flask.render_template(
        "login.html", url=flask.url_for("bp.signup")
    )

@bp.route("/signup")
def signup():
    """signup page"""
    return flask.render_template(
        "signup.html", url=flask.url_for("bp.login")
    )


@bp.route("/login", methods=["POST"])
def login_post():
    """logs in user if account exists"""
    username = flask.request.form.get("username")
    print(username)
    password = flask.request.form.get("password")
    print(password)
    user = Users.query.filter_by(username=username).first()
    if user and user.password == password:  # pylint:disable=no-else-return
        login_user(user)
        return flask.redirect("/forum")

    else:
        flask.flash("You don't have an account please sign up!")
        return flask.render_template("login.html")

@bp.route("/signup", methods=["POST"])
def signup_post():
    """signs up user if account doesn't exist with hashed password"""
    username = flask.request.form.get("username")
    password = flask.request.form.get("password")
    user = Users.query.filter_by(username=username).first()
    if user:
        pass
        print('wow')
    else:
        user = Users(
            username=username,
            password=password
        )
        print(user)
        db.session.add(user)  # pylint:disable=no-member
        db.session.commit()  # pylint:disable=no-member

    return flask.redirect(flask.url_for("bp.login"))

@bp.route("/forum", methods=["POST",'GET'])
def forum():
    if current_user.is_authenticated:
        user = current_user.username
    else:
        return flask.redirect(flask.url_for("bp.login"))
    titlelist = []
    contentlist = []
    userlist = []
    p = Posts.query.filter_by(user=user).all()
    for things in p:
        userlist.append(things.user)
        titlelist.append(things.title)
        contentlist.append(things.content)
    if flask.request.method == "POST":
        userlist.append(user)
        title = flask.request.form.get("title")
        titlelist.append(title)
        content = flask.request.form.get("content")
        contentlist.append(content)
        post = Posts(
            user=user, title=title, content=content
        )
        db.session.add(post)
        db.session.commit()
        return flask.render_template(
            "foruminput.html",
            length=len(userlist),
            userlist=userlist,
            titlelist=titlelist,
            contentlist=contentlist,
        )
    return flask.render_template(
            "foruminput.html",
            length=len(userlist),
            userlist=userlist,
            titlelist=titlelist,
            contentlist=contentlist,
        )
        
    


@app.route("/getinformation", methods=["GET", "POST"])
def getinformation():
    revs = []
    user = current_user.username
    post = Posts.query.all()
    
    for things in post:
        revs.append(
            {
                "id": things.id,
                "user": things.user,
                "title": things.title,
                "content": things.content,
            }
        )
        
    return jsonify(revs)

@login_manager.user_loader
def load_user(id):
    return Users.query.get(int(id))


app.register_blueprint(bp)

if __name__ == "__main__":
    app.run(
        host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", "8080")), debug=True
    )
