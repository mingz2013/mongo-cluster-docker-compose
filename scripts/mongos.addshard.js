// var admin = db.getSiblingDB("admin");

// admin.auth('clusterAdmin', 'clusterAdmin');

sh.addShard("rs-shard-server-01/shardsvr-01-01:27017,shardsvr-01-02:27017,shardsvr-01-03:27017");
sh.addShard("rs-shard-server-02/shardsvr-02-01:27017,shardsvr-02-02:27017,shardsvr-02-03:27017");
