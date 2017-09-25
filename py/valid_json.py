from __future__ import print_function  # Only needed for Python 2
import json
import glob
import os

readfile = '../src/data/new_files/170917.json'
directoryName = "compiled_files"
writefile = './%s/test_rdy.json' % directoryName



def compileFile(readfilename,writefilename,directoryName):

	fileArray = readFile(readfilename)
	print(fileArray)
	writeFile(writefilename,fileArray)
	createNewFolder(directoryName)
	test()


def readFile(readfilename):
	with open(readfilename, "r") as fd:
	    new_array = []
	    for line in fd:
	        line = line.strip()
	        new_array.append(line)
            print(line)
            print(line.strip())
	return new_array

def writeFile(writefilename,data):
	with open(writefilename, 'w') as outfile:
		print("[",file=outfile)
		i=0
		for log in data:
			i=i+1
			print(log,file=outfile)
			if i != len(data):
				print(",",file=outfile)
		print("]",file=outfile)

def createNewFolder(folderpath):
	if not os.path.exists(folderpath):
		os.makedirs(folderpath)

def test():
	array = [{"entry":"moin"},{"entry":"moin1"}]
	print(glob.glob("./*.json"))

compileFile(readfile,writefile,directoryName)
