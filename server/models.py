from config import db, bcrypt
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

class Tag(db.Model, SerializerMixin):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)

    questions = db.relationship('Question', secondary = 'question_tags', back_populates = 'tags')

class Question(db.Model, SerializerMixin):
    __tablename__ = 'questions'

    serialize_rules= ('-saves','-tags.questions', '-user.questions', '-responses.question', '-responses.user.questions', '-responses.user.saves', '-user.saves', '-user.responses',)

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.String)
    code = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    tags = db.relationship('Tag', secondary = 'question_tags', back_populates = 'questions')
    responses = db.relationship('Response', backref = 'question', cascade="all, delete")
    saves = db.relationship('Save', backref= 'question', cascade="all, delete")
    


class QuestionTag(db.Model, SerializerMixin):
    __tablename__ = 'question_tags'

    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable = False)
    tag_id = db.Column(db.Integer, db.ForeignKey('tags.id'), nullable = False)


class Response(db.Model, SerializerMixin):
    __tablename__ = 'responses'

    serialize_rules= ('-question.responses', '-user.responses', '-user.saves', '-user.questions', '-question.tags', '-question.user',)

    id = db.Column(db.Integer, primary_key=True)
    suggestion = db.Column(db.String)
    code = db.Column(db.String)
    votes = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable = False)   

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules= ('-saves.user', '-questions.user', '-responses.user', '-questions.responses', '-questions.saves',)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique = True, nullable = False)
    _password_hash = db.Column(db.String, nullable = False)

    saves = db.relationship('Save', backref = 'user')
    questions = db.relationship('Question', backref = 'user')
    responses = db.relationship('Response', backref = 'user')

    @hybrid_property
    def password_hash(self):
        return {"message":"You can't view password hashes"}
    
    @password_hash.setter
    def password_hash(self,password):
        our_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = our_hash.decode('utf-8')

    def authenticate(self, password):
        is_valid = bcrypt.check_password_hash(self._password_hash,password.encode('utf-8'))
        return is_valid

    
class Save(db.Model, SerializerMixin):
    __tablename__ = 'saves'

    serialize_rules= ('-user.saves', '-user.questions', '-user.responses', '-question.saves', '-question.responses', '-question.user', '-question.tags')

    id = db.Column(db.Integer, primary_key=True)

    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
