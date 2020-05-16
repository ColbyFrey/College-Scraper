wikiLink = open('WikiLink','r')
collegeLink = open('CollegeLink.txt','w+')

for line in wikiLink:
	if "University" in line or "College" in line or "School" in line:
		collegeLink.write("\n" + line)
