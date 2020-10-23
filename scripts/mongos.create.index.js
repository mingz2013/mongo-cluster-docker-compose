var dbname = "MyDatabase";


var mydb = db.getSiblingDB(dbname);


mydb.auth('MyDatabase', 'MyDatabase');


mydb.MyCollections1.createIndex({"key1": 1}, {background: 1});




