import csv  
import json  

csvFilePath = "../ffxiv-datamining/csv/ClassJob.csv"
jsonFilePath = "../ffxiv-datamining/csv/ClassJob.json"

data = {}

with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    next(csvReader, None)
    next(csvReader, None)
    next(csvReader, None)
    for rows in csvReader:
        classid = int(rows["\ufeffkey"].replace(" ", ""))
        classname = rows["0"].replace(" ", "")
        classnameshort = rows["1"].replace(" ", "")
        classrole = int(rows["43"].replace(" ", ""))
        data[classid]= [classid, classrole, classname, classnameshort]
    print (data)
    
with open(jsonFilePath, 'w') as jsonFile:
    jsonFile.write(json.dumps(data, indent=4))