from models import Tag, Question, QuestionTag, Response, User, Save
from app import app
from config import db
import random

with app.app_context():

    db.session.query(Tag).delete()
    # db.session.query(Question).delete()
    # db.session.query(QuestionTag).delete()
    # db.session.query(Response).delete()
    # db.session.query(Save).delete()
    # db.session.query(User).delete()
    db.session.commit()
    print('Cleared database... \n ')

    tag1 = Tag(name = 'Phase0', description = "Moringa School's first learning phase in the bootcamp")
    tag2 = Tag(name = 'Phase1', description = "Moringa School's second learning phase in the bootcamp")
    tag3 = Tag(name = 'Phase2', description = "Moringa School's third learning phase in the bootcamp")
    tag4 = Tag(name = 'Phase3', description = "Moringa School's fourth learning phase in the bootcamp")
    tag5 = Tag(name = 'Phase4', description = "Moringa School's fifth learning phase in the bootcamp")
    tag6 = Tag(name = 'Phase5', description = "Moringa School's last learning phase in the bootcamp")
    tag7 = Tag(name = 'HTML', description = "HyperText Markup Language is the most basic building block of the Web. It defines the meaning and structure of web content.")
    tag8 = Tag(name = 'Javascript', description = "A lightweight interpreted (or just-in-time compiled) programming language with first-class functions.")
    tag9 = Tag(name = 'ReactJS', description = "React. js, more commonly known as React, is a free, open-source JavaScript library.")
    tag10 = Tag(name = 'Python', description = "a computer programming language often used to build websites and software, automate tasks, and conduct data analysis.")
    tag11 = Tag(name = 'Flask', description = "Flask is a micro web framework written in Python.")

    db.session.add_all([tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, tag10, tag11])
    db.session.commit()
    print("Seeded Tags. \n ")
