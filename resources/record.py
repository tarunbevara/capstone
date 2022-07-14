from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.record import RecordModel 
import pandas as pd 


class Record(Resource):

    parser=reqparse.RequestParser()

    parser.add_argument('id',
                        type=int,
                        required=True,
                        help="This field cannot be left blank!"
                        )

    parser.add_argument('age',
                        type=int,
                        required=True,
                        help="This field cannot be left blank!"
                        )
    parser.add_argument('sex',
                        type=str,
                        required=True,
                        help="This field cannot be left blank!"
                        )
    parser.add_argument('bmi',
                        type=float,
                        required=True,
                        help="This field cannot be left blank!"
                        )
    parser.add_argument('children',
                        type=int,
                        required=True,
                        help="This field cannot be left blank!"
                        )
    parser.add_argument('smoker',
                        type=str,
                        required=True,
                        help="This field cannot be left blank!"
                        )
    parser.add_argument('region',
                        type=str,
                        required=True,
                        help="This field cannot be left blank!"
                        )
    parser.add_argument('charges',
                        type=float,
                        required=True,
                        help="This field cannot be left blank!"
                        )


    # @jwt_required
    def get(self):
        return {'records': list(map(lambda x: x.json(), RecordModel.query.all()))}

class Age_Pie(Resource):
    @jwt_required()
    def get(self):
        data=RecordModel.query.with_entities(RecordModel.age,RecordModel.smoker).all()
        df1=pd.DataFrame(columns=['age','smoker'],data=data)
        df1 = df1.replace({'smoker': {'yes': 1, 'no': 0}})
        bins=[15,25,35,45,55,65]
        labels=['15-25','25-35','35-45','45-55','55-65']
        df1['Age_group']=pd.cut(df1['age'],bins=bins,labels=labels,right=True)
        result=df1.groupby(['Age_group']).sum()
        values=result['smoker'].to_list()
        l=[]
        for i in range(len(labels)):
            l.append({"name":labels[i],"value":values[i]})
        return l

class Sex_Pie(Resource):
    @jwt_required()
    def get(self):
        data=RecordModel.query.with_entities(RecordModel.sex,RecordModel.smoker).all()
        df2=pd.DataFrame(columns=['sex','smoker'],data=data)
        df2 = df2.replace({'smoker': {'yes': 1, 'no': 0}}) 
        labels=['female','male']
        result=df2.groupby(['sex']).sum()
        values=result['smoker'].to_list()
        l=[]
        for i in range(len(labels)):
            l.append({"name":labels[i],"value":values[i]})
        return l

class Region_Pie(Resource):
    @jwt_required()
    def get(self):
        data=RecordModel.query.with_entities(RecordModel.region,RecordModel.smoker).all()
        df3=pd.DataFrame(columns=['region','smoker'],data=data)
        df3 = df3.replace({'smoker': {'yes': 1, 'no': 0}}) 
        labels=['northwest','southwest','northeast','southeast']
        result=df3.groupby(['region']).sum()
        values=result['smoker'].to_list()
        l=[]
        for i in range(len(labels)):
            l.append({"name":labels[i],"value":values[i]})
        return l

class Age_Bar(Resource):
    @jwt_required()
    def get(self):
        data=RecordModel.query.with_entities(RecordModel.age,RecordModel.smoker).all()
        df1=pd.DataFrame(columns=['age','smoker'],data=data)
        df1 = df1.replace({'smoker': {'yes': 1, 'no': 0}})
        bins=[15,25,35,45,55,65]
        labels=['15-25','25-35','35-45','45-55','55-65']
        df1['Age_group']=pd.cut(df1['age'],bins=bins,labels=labels,right=True)
        result=df1.groupby(['Age_group']).sum()
        values=result['smoker'].to_list()
        l=[]
        for i in range(len(labels)):
            l.append({"name":labels[i],"value":values[i]})
        return l

class Sex_Bar(Resource):
    @jwt_required()
    def get(self):
        data=RecordModel.query.with_entities(RecordModel.sex,RecordModel.smoker).all()
        df2=pd.DataFrame(columns=['sex','smoker'],data=data)
        df2 = df2.replace({'smoker': {'yes': 1, 'no': 0}}) 
        labels=['female','male']
        result=df2.groupby(['sex']).sum()
        values=result['smoker'].to_list()
        l=[]
        for i in range(len(labels)):
            l.append({"name":labels[i],"value":values[i]})
        return l

class Region_Bar(Resource):
    @jwt_required()
    def get(self):
        data=RecordModel.query.with_entities(RecordModel.region,RecordModel.smoker).all()
        df3=pd.DataFrame(columns=['region','smoker'],data=data)
        df3 = df3.replace({'smoker': {'yes': 1, 'no': 0}}) 
        labels=['northwest','southwest','northeast','southeast']
        result=df3.groupby(['region']).sum()
        values=result['smoker'].to_list()
        l=[]
        for i in range(len(labels)):
            l.append({"name":labels[i],"value":values[i]})
        return l
