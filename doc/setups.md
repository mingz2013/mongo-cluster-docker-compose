## Setup
### start all of the containers

```makefile
up:
	docker-compose up -d

```

### initialize the replica sets (config servers and shards) and routers




```makefile
# init config
init-config:
	docker-compose exec configsvr-01 sh -c "mongo < /scripts/config.initiate.js"

# init shard1, shard2
init-shard:
	docker-compose exec shardsvr-01-01 sh -c "mongo < /scripts/shard1.initiate.js"
	docker-compose exec shardsvr-02-01 sh -c "mongo < /scripts/shard2.initiate.js"

# add shard1, shard2 to cluster
add-shard:
	docker-compose exec mongossvr-01 sh -c "mongo < /scripts/mongos.addshard.js"

```


### enable sharding and setup sharding-key

```makefile
# create database MyDatabase
create-database:
	docker-compose exec mongossvr-01 sh -c "mongo < /scripts/mongos.create.database.js"

```


### verify the status of the sharded cluster

```makefile
# echo status
echo-status:
	docker-compose exec mongossvr-01 sh -c "echo 'sh.status()' | mongo --port 27017"

# echo shard status
echo-shard-status:
	docker exec -it shardsvr-01-01 bash -c "echo 'rs.status()' | mongo --port 27017"
	docker exec -it shardsvr-02-01 bash -c "echo 'rs.status()' | mongo --port 27017"
```

### check database status

```
docker-compose exec router01 mongo --port 27017
use MyDatabase
db.stats()
db.MyCollection.getShardDistribution()
```

### other commands

```makefile
# other commands
others:
	docker exec -it configsvr-01 bash -c "echo 'rs.status()' | mongo --port 27017"

	docker exec -it shardsvr-01-01 bash -c "echo 'rs.help()' | mongo --port 27017"
	docker exec -it shardsvr-01-01 bash -c "echo 'rs.status()' | mongo --port 27017"
	docker exec -it shardsvr-01-01 bash -c "echo 'rs.printReplicationInfo()' | mongo --port 27017"
	docker exec -it shardsvr-01-01 bash -c "echo 'rs.printSlaveReplicationInfo()' | mongo --port 27017"

```

### resetting the cluster

```makefile
# To remove all data and re-initialize the cluster, make sure the containers are stopped and then:
rm:
	docker-compose rm

```

### clean up docker-compose

```makefile
# clean up docker-compose
down:
	docker-compose down -v --rmi all --remove-orphans

```


