import requests, os
from requests_ntlm import HttpNtlmAuth
from .MDLZHive import ConnectHive
from .creds import pw
import pandas as pd
import impala.dbapi


class ConnectiDeploy(object):
    def __init__(self, user, password):
        self.url = "http://kftusoktulap356.krft.net/ReportServer?%2fiDeployReporting%2fSLC&rs:Command=Render&Area=%25&Region=%25&Team=%25&Territory=%25&rs:Format=CSV"
        self.user = user
        self.password = password
        self.payload = {}
        self.headers = {'accept': 'application/json;odata=verbose'}

    def get_slc(self):
        r = requests.post(self.url, auth=HttpNtlmAuth(self.user, self.password), headers=self.headers, verify=False, data=self.payload, stream=True)
        return (r.status, r.itercontent(1024))

    def write_data(self,fname):
        with open('{}'.format(fname), 'wb') as handle:
            for block in r.iter_content(1024):
                handle.write(block)

# if __name__ == '__main__':
#     user, pwd = "krft\\una0464", pw
#     #i = ConnectiDeploy(user,pwd)
#     #status, slc = i.get_slc()
#     #print (status)
#     hive = ConnectHive(database='hrm_ds')
#     slc = hive.execute("""SELECT * from sharp_master_data_historical_pub
#                           WHERE lower(last_name) like '%blanche%'
#                        """)
#     print (slc)
