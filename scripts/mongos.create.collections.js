var dbname = "MyDatabase";


var admin = db.getSiblingDB("admin");

admin.auth('clusterAdmin', 'clusterAdmin');


sh.shardCollection(dbname + ".MyCollections1", {"_id": "hashed"});

sh.shardCollection(dbname + ".MyCollections2", {"_id": "hashed"});

sh.shardCollection(dbname + ".MyCollections3", {"_id": "hashed"});
