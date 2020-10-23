var admin = db.getSiblingDB("admin");

admin.auth('clusterAdmin', 'clusterAdmin');


// Enable sharding for database `MyDatabase`
sh.enableSharding("MyDatabase");

// // Setup shardingKey for collection `MyCollection`**
// db.adminCommand({shardCollection: "MyDatabase.MyCollection", key: {"_id": "hashed"}});

admin.auth('admin', 'admin');

var MyDatabase = db.getSiblingDB("MyDatabase");

MyDatabase.createUser({user: "MyDatabase", pwd: "MyDatabase", roles: [{"role": "readWrite", "db": "MyDatabase"}]});
// db.getSiblingDB('MyDatabase').createUser({user:"MyDatabase", pwd: "MyDatabase", roles:[{"role": "readWrite", "db": "MyDatabase"}]})

