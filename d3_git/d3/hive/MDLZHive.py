import pandas as pd
import impala.dbapi

class ConnectHive(object):
    def __init__(self,host='mdzusvpclhdp001.mdz.local',port=10000,database='default',auth_mechanism='GSSAPI',
               kerberos_service_name='hive'):
        self.host = host
        self.port = port
        self.database = database
        self.database = database
        self.auth_mechanism=auth_mechanism
        self.kerberos_service_name = kerberos_service_name
        self.conn = self.connect()
        print ('Connected to Hive//{}'.format(self.database))

    def connect(self):
        return impala.dbapi.connect(host=self.host,port=self.port,database=self.database,auth_mechanism=self.auth_mechanism,
                   kerberos_service_name=self.kerberos_service_name)

    def set_database(self,db):
        cursor = self.conn.cursor()
        try:
            cursor.execute('use {}'.format(db))
            print ('Chaned DB to {}'.format(db))
        except Exception as e:
            print ('Failed to change database')

    def execute(self,sql):
        cursor = self.conn.cursor()
        cursor.execute('{}'.format(sql))
        results = cursor.fetchall()
        return pd.DataFrame(results)
