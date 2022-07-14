import numpy as np
import pandas as pd
import sqlite3

users = pd.read_csv('insurance.csv')

conn = sqlite3.connect('data.db')
c = conn.cursor()
c.execute('''CREATE TABLE login(id INTEGER PRIMARY KEY, username text, password text)''')
c.execute('''CREATE TABLE users (id int PRIMARY KEY,age int, sex text, bmi float, children int, smoker text, region text, charges float)''')

users.to_sql('users', conn, if_exists='append', index = False)

c.execute('''SELECT * FROM users''').fetchall()