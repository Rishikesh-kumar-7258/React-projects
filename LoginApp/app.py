from os import error
from flask import Flask , render_template, request
from werkzeug.utils import redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = "Users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), unique=False, nullable=False)

@app.route("/")
def index():

    return render_template("index.html")

@app.route("/signup", methods=["GET", "POST"])
def signup():
    # print(request.data)
    if request.method == "POST":

        data = request.form
        email = data['email']
        password = data['password']

        new_user = User()
        new_user.email = email
        new_user.password = password

        db.session.add(new_user)
        db.session.commit()

        return redirect("/login")

    return render_template("signup.html")

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":
        data = request.form
        email = data['email']
        password = data['password']

        user = User.query.filter_by(email=email).first()
        if user and user.password == password:
            return redirect("/")
        else :
            return render_template("login.html", error="Invalid credentials")

    return render_template("login.html")

@app.route("/view")
def view():
    users = User.query.all()

    return render_template("users.html", users=users)

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)