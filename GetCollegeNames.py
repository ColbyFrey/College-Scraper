collegeLink = open('CollegeLink.txt','r')
name = open('CollegeName.txt','w+')
colleges = []
lastLine = ''
for line in collegeLink:
	stripLine = line.rstrip()
	game = stripLine.rsplit('>')
	for x in game:
		if len(x) > 0:
			if game[2] != lastLine:
				colleges.append(game[2])
				lastLine = game[2]

for x in colleges:
	name.write('\n' + x)
