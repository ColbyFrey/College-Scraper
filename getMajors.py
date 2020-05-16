"""htmlMajors = open('HTMLMajors','r')
majors = open('Majors.txt','w+')

for line in htmlMajors:
	stripLine = line.rstrip()
	game = stripLine.rsplit('>')
	majors.write('\n' + game[1])
"""

import pyodbc 
server = 'SEVERNAME HERE' 
database = 'DB NAME HERE' 
username = 'USERNAME HERE' 
password = 'PASSWORD HERE' 
cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
majors = open('Majors.txt','r')
for line in majors:
	cursor = cnxn.cursor()
	if '\'' in line:
		pos= int(line.find('\''))
		line = line[:pos] + '\'' + line[pos:]
	cursor.execute("INSERT INTO Major(MajorName) VALUES('" + line.rstrip() + "')")
	cnxn.commit()

