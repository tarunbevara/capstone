from db import db

class RecordModel(db.Model):
    __tablename__='users'

    id=db.Column(db.Integer,primary_key=True)
    age=db.Column(db.Integer)
    sex=db.Column(db.String(10))
    bmi=db.Column(db.Float(precision = 1))
    children=db.Column(db.Integer)
    smoker=db.Column(db.String(10))
    region=db.Column(db.String(10))
    charges=db.Column(db.Float(precision=1))

    def __init__(self,id,age,sex,bmi,children,smoker,region,charges):
        self.id=id
        self.age=age 
        self.sex=sex 
        self.bmi=bmi 
        self.children=children
        self.smoker=smoker
        self.region=region
        self.charges=charges

    # @classmethod
    def json(self):
        return {
            'id':self.id,'age':self.age,'sex':self.sex,'bmi':self.bmi,'children':self.children,'smoker':self.smoker,'region':self.region,'charges':self.charges}     
            

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()