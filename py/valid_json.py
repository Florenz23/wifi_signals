import json

readfile = 'test.json'
writefile = 'test_rdy.json'

data = {"moin":"hi"}


def compileFile(readfilename,writefilename):

	fileArray = readFile(readfilename)
	print(fileArray)
	writeFile(writefilename,fileArray)
	test()


def readFile(readfilename):
	with open(readfilename, "r") as fd:
	    new_array = []
	    for line in fd:
	        line = line.strip()
	        new_array.append(line)
            print(line)
            print(line.strip())
	print(new_array)
	return new_array

def writeFile(writefilename,data):
	with open(writefilename, 'w') as outfile:
	    json.dumps(data[0])

def test():
	print("moin")
	array = [{"entry":"moin"},{"entry":"moin1"}]
	print (array)
	print json.dumps(array)

compileFile("test.json","test_rdy.json")
