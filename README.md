Todo - Backbone.js
======================

With Flask, SqlAlchemy, Semantic-UI, and Backbone.js
----------------------------------------------------

This is a demo site showing another way to use Flask to make a website.
This time, Flask is a RESTful API, accepting and returning json.
I used a SqlAlchemy non-declarative model, and simple sqlite test db.
Semantic-UI for the front-end CSS.
HTML rendered client-side with Backbone.js, underscore.js for templates,
and require.js for async js loading.

Vagrant upload, you can start the website starts with:

```
 > vagrant up
 ? (enter password at prompt)
 > vagrant ssh
 > cd projects/todoapp
 > python application.py
```

** Requires Virtualbox, Vagrant, & Git **


References at:
 
 * [Flask](http://flask.pocoo.org/docs/)
 * [Sqlalchemy in Flask](http://flask.pocoo.org/docs/patterns/sqlalchemy/#manual-object-relational-mapping)
 * [Backbone.js](http://backbonejs.org/)
 * [Underscore.js](http://underscorejs.org/)
 * [Require.js](http://requirejs.org)
 * [Semantic-ui](http://semantic-ui.com/element.html)
 * [Vagrant](https://docs.vagrantup.com/v2/)