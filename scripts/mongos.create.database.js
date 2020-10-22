// Enable sharding for database `MyDatabase`
sh.enableSharding("MyDatabase");

// Setup shardingKey for collection `MyCollection`**
db.adminCommand({shardCollection: "MyDatabase.MyCollection", key: {supplierId: "hashed"}});

