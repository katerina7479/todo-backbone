# -*- coding: utf-8 -*-
from flask import Flask, render_template, request
from flask.json import jsonify
from models import Todo
from database import db_session



app = Flask(__name__, template_folder='static/templates')


@app.route('/')
def index():
    # Index
    return render_template("index.html")

@app.route('/todos/', methods=['GET', 'POST'])
def todos():
    if request.method =='POST':
        todo = Todo(title=request.json["title"], description=request.json["description"], done=request.json["done"])
        db_session.add(todo)
        db_session.commit()
        return jsonify({"id": todo.id, "title": todo.title, "description": todo.description, "done": todo.done})
    else:
        todo_list = []
        query = Todo.query.all()
        for item in query:
            todo_list.append({"id": item.id, "title": item.title, "description": item.description, "done": item.done})
        response = jsonify(response=todo_list)
        return response

@app.route('/todos/<todo_id>', methods=['GET', 'PUT'])
def todo(todo_id):
    # Detail Page
    if request.method == "PUT":
        todo = db_session.query(Todo).get(todo_id)
        todo.title = request.json["title"]
        todo.description = request.json["description"]
        todo.done = request.json["done"]
        db_session.commit()
    else: # GET
        todo = db_session.query(Todo).get(todo_id)
    return jsonify({"id": todo.id, "title": todo.title, "description": todo.description, "done": todo.done})


if __name__ == '__main__':
    # Initialize Database
    from database import init_db
    init_db()

    # Start App
    app.debug = True
    app.run(host='0.0.0.0')
