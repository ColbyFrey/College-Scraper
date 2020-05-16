import googlemaps
import pyodbc 
server = 'SEVERNAME HERE' 
database = 'DB NAME HERE' 
username = 'USERNAME HERE' 
password = 'PASSWORD HERE' 
cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)


college = open(r'CollegeName.txt','r')

gmaps = googlemaps.Client(key='API-KEY_GOES_HERE')

for line in college:
	result = gmaps.places(line.rstrip())
	if result['status'] == 'ZERO_RESULTS':
		print(line.rstrip() + ' is not added to db')
	else:
		game = result['results']
		work = game[0]
		lat = work['geometry']['location']['lat']
		lng = work['geometry']['location']['lng']
		name = work['name']
		stateSplit = work['plus_code']['compound_code'].split(',')
		state = stateSplit[len(stateSplit)-1].replace(' ','')
		if '\'' in name:
			pos= int(name.find('\''))
			name = name[:pos] + '\'' + name[pos:]
		cursor = cnxn.cursor()
		cursor.execute("UPDATE College SET State = \'" + state + '\' WHERE CollegeName = \'' + name +'\'') 
		cnxn.commit()
