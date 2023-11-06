from config import app,db
import os
from flask_restful import Resource, Api
from models import Tag, Question, QuestionTag, Response, User, Save
from flask import jsonify, make_response, session, request, render_template


api = Api(app)

@app.route('/')
def home():
    return('Welcome to my api')

class Questions(Resource):
    
    def get(self):
        question_dict = [question.to_dict() for question in Question.query.all()]
        return make_response(jsonify(question_dict), 200)
    
    def post(self):
        data = request.get_json()
        title = data['title']
        description = data['description']
        code = data['code']
        user_id = data['userId']


        new_question = Question(title = title, description = description, code = code, user_id = user_id)

        db.session.add(new_question)
        db.session.commit()

        return {"message":"New Question created successfully"}, 201
    
api.add_resource(Questions, '/questions')

class QuestionsById(Resource):
    
    def get(self, id):
        question_id = [question.id for question in Question.query.all()]
        if(id in question_id):
            question_dict = Question.query.filter_by(id = id).first().to_dict()
            return make_response(jsonify(question_dict), 200)
        else:
            return {"error": "Question not found"}
        
    def patch(self, id):
        question_id = [question.id for question in Question.query.all()]
        if(id in question_id):
            data = request.get_json()
            question = Question.query.filter_by(id = id).first()

            for attr in data:
                setattr(question, attr, data[attr])

            db.session.add(question)
            db.session.commit()

            response_dict = question.to_dict()

            return make_response(response_dict,200)
        else:
            return {"error": "Question not found"}
        
    def delete(self, id):
        question_id = [question.id for question in Question.query.all()]
        if(id in question_id):
            question = Question.query.filter_by(id=id).first()

            db.session.delete(question)
            db.session.commit()

            response_dict = {"message": "Question successfully deleted"}

            response = make_response(
                jsonify(response_dict),
                200
            )

            return response
        else:
            return {"error": "Question not found"}
    
api.add_resource(QuestionsById, '/questions/<int:id>')

class Tags(Resource):
    
    def get(self):
        tags_dict = [tag.to_dict() for tag in Tag.query.all()]
        return make_response(jsonify(tags_dict), 200)
    
api.add_resource(Tags, '/tags')

class TagsById(Resource):
    
    def get(self, id):
        tags_id = [tag.id for tag in Tag.query.all()]
        if(id in tags_id):
            tag_dict = Tag.query.filter_by(id = id).first().to_dict()
            return make_response(jsonify(tag_dict), 200)
        else:
            return {"error": "Tag not found"}
        
    def patch(self, id):
        tags_id = [tag.id for tag in Tag.query.all()]
        if(id in tags_id):
            tag = Tag.query.filter_by(id = id).first()
            for attr in request.form:
                setattr(tag, attr, request.form[attr])

            db.session.add(tag)
            db.session.commit()

            response_dict = tag.to_dict()

            return make_response(response_dict,200)
        else:
            return {"error": "Tag not found"}
           
api.add_resource(TagsById, '/tags/<int:id>')

class QuestionTags(Resource):

    def get(self):
        tags_dict = [tag.to_dict() for tag in QuestionTag.query.all()]
        return make_response(jsonify(tags_dict), 200)
        
    def post(self):
        data = request.get_json()
        new_record = QuestionTag(
            question_id=data['questionId'],
            tag_id=data['tagId'],
        )

        db.session.add(new_record)
        db.session.commit()

        response_dict = new_record.to_dict()

        return make_response(response_dict ,200)
    
    
api.add_resource(QuestionTags, '/questiontags')

class QuestionTagById(Resource):

    def get(self, id):
        tags_id = [tag.id for tag in QuestionTag.query.all()]
        if(id in tags_id):
            tag_dict = QuestionTag.query.filter_by(id = id).first().to_dict()
            return make_response(jsonify(tag_dict), 200)
        else:
            return {"error": "Tag not found"}

    def delete(self, id):
        questiontag_id = [questiontag.id for questiontag in QuestionTag.query.all()]
        if(id in questiontag_id):
            questiontag = QuestionTag.query.filter_by(id=id).first()

            db.session.delete(questiontag)
            db.session.commit()

            response_dict = {"message": "QuestionTag successfully deleted"}

            response = make_response(
                jsonify(response_dict),
                200
            )

            return response
        else:
            return {"error": "Question not found"}
        
api.add_resource(QuestionTagById, '/questiontags/<int:id>')


class Responses(Resource):
    
    def get(self):
        response_dict = [response.to_dict() for response in Response.query.all()]
        return make_response(jsonify(response_dict), 200)
    
    def post(self):
        data = request.get_json()
        suggestion = data['suggestion']
        code = data['code']
        user_id = data['userId']
        question_id = data['questionId']

        new_response = Response(suggestion = suggestion, code = code, votes=0, user_id = user_id, question_id = question_id)

        db.session.add(new_response)
        db.session.commit()

        return {"message":"New Response created successfully"}, 201

api.add_resource(Responses, '/responses')

class ResponsesById(Resource):
    
    def get(self, id):
        response_id = [response.id for response in Response.query.all()]
        if(id in response_id):
            response_dict = Response.query.filter_by(id = id).first().to_dict()
            return make_response(jsonify(response_dict), 200)
        else:
            return {"error": "Response not found"}
        
    def patch(self, id):
        response_id = [response.id for response in Response.query.all()]
        if(id in response_id):
            data = request.get_json()
            response = Response.query.filter_by(id = id).first()

            for attr in data:
                setattr(response, attr, data[attr])

            db.session.add(response)
            db.session.commit()

            response_dict = response.to_dict()

            return make_response(response_dict,200)
        else:
            return {"error": "Response not found"}
        
    def delete(self, id):
        response_id = [response.id for response in Response.query.all()]
        if(id in response_id):
            response = Response.query.filter_by(id=id).first()

            db.session.delete(response)
            db.session.commit()

            response_dict = {"message": "Response successfully deleted"}

            response = make_response(
                jsonify(response_dict),
                200
            )

            return response
        else:
            return {"error": "Response not found"}
    
api.add_resource(ResponsesById, '/responses/<int:id>')

class Users(Resource):

    def get(self):
        user_dict = [user.to_dict() for user in User.query.all()]
        return make_response(jsonify(user_dict), 200)
    
    
    def post(self):
        data = request.get_json()
        username = data['username']
        password = data['password']

        new_user = User(username = username, password_hash = password)

        db.session.add(new_user)
        db.session.commit()
        session['random_user'] = new_user.id

        return {"message":"New User created successfully"}, 201
    
api.add_resource(Users, '/users')

class UsersById(Resource):
    
    def get(self, username):
        users = [user.username for user in User.query.all()]
        if(username in users):
            user_dict = User.query.filter_by(username = username).first().to_dict()
            return make_response(jsonify(user_dict), 200)
        else:
            return {"error": "User not found"}
    
api.add_resource(UsersById, '/users/<username>')

class Login(Resource):

    def post(self):
        user = User.query.filter(
            User.username == request.get_json()['username'] and
            User._password_hash == request.get_json()['password']
        ).first()

        session['user_id'] = user.id
        return jsonify(user.to_dict())

api.add_resource(Login, '/login')

class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return jsonify(user.to_dict())
        else:
            return jsonify({'message': '401: Not Authorized'}), 401

api.add_resource(CheckSession, '/check_session')

class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        return {'message': '204: No Content'}, 204

api.add_resource(Logout, '/logout')

class Saves(Resource):
    
    def get(self):
        saves_dict = [save.to_dict() for save in Save.query.all()]
        return make_response(jsonify(saves_dict), 200)
    
    def post(self):
        data = request.get_json()
        question_id = data['question_id']
        user_id = data['user_id']
        
        new_save = Save(question_id = question_id , user_id = user_id)

        db.session.add(new_save)
        db.session.commit()

        return {"message":"Added to Saves"}, 201
    
api.add_resource(Saves, '/saves')
    
class SavesID(Resource):

    def delete(self, id):
        save = Save.query.filter_by(id=id).first()

        db.session.delete(save)
        db.session.commit()

        response = make_response(
            {"msg": "Deleted Save"}
        )

        return response
    
api.add_resource(SavesID, '/saves/<int:id>')

if __name__ == '__main__':
    app.run()
