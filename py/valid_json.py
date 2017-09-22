import json

readfile = 'test.json'
writefile = 'test_rdy.json'

data = {"moin":"hi"}


def compileFile(readfilename,writefilename):

	fileArray = readFile(readfilename)
	writeFile(writefilename,fileArray)


def readFile(readfilename):
	with open(readfilename, "r") as fd:
	    new_array = []
	    for line in fd:
	        line = line.strip()
	        new_array.append(line.strip()	)
	return new_array

def writeFile(writefilename,data):
	with open(writefilename, 'w') as outfile:
	    json.dump(data, outfile)

compileFile("test.json","test_rdy.json")
