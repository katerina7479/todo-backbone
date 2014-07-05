# -*- coding: utf-8 -*-
from flask import Flask, render_template, request
from models import Todo
from database import db_session



app = Flask(__name__, template_folder='static/templates')


@app.route('/')
def index():
    # Index
    return render_template("index.html")


@app.route('/todos/', methods=['GET'])
def todos():
    todo_list = Todo.query.all()
    return todo_list

@app.route('/todo/', defaults={'todo_id': None}, methods=['GET', 'POST'])
@app.route('/todo/<todo_id>', methods=['GET', 'POST'])
def todo(todo_id):
    # Detail Page
    if request.method == "POST":
        title = request.form["todo"]
        notes = request.form["notes"]
        done = False if str(request.form["done"]) == 'false' else True  # JS to python false
        if todo_id is not None: # Existing, get it
            todo = db_session.query(Todo).get(todo_id)
            todo.title = title
            todo.description = notes
            todo.done = done
        else: # It's new
            todo = Todo(title=title, description=notes, done=done)
            db_session.add(todo)
        db_session.commit()
        return "OK"
    else: # GET
        if todo_id is not None:
            todo = db_session.query(Todo).get(todo_id)
        else:
            todo = {"id": "", "title": "", "description": "", "done": 0}
        return todo


if __name__ == '__main__':
    # Initialize Database
    from database import init_db
    init_db()

    # Start App
    app.debug = True
    app.run(host='0.0.0.0')
