
import googlemaps
gmaps = googlemaps.Client(key='API_KEY_HERE')
result = gmaps.places("California Baptist University")
game = result['results']
work = game[0]
lat = work['geometry']['location']['lat']
lng = work['geometry']['location']['lng']
name = work['name']
#pos= int(name.find('\''))
#name = name[:pos] + '\'' + name[pos:]
print(name)
stateSplit = work['plus_code']['compound_code'].split(',')
state = stateSplit[len(stateSplit)-1].replace(' ','')
print(state)

print("INSERT INTO BackupCollegeTEST(CollegeName,Longitude,Latitude,State) VALUES(\n'" + name + ',' + str(lng) + ',' + str(lat) + ',' + '\'' + state + "\')")

"""
linkUp= open('CollegeLink.txt','r')
collegeName= open('CollegeName.txt','w+')

for line in linkUp:
	if line == '\n':
		x = 1
	else:
		collegeName.write('\n' + line.rstrip())
"""