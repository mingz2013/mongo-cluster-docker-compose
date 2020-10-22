help:
	@echo '                                                                          '
	@echo 'Makefile for docker compose mongo cluster                                                  '
	@echo '                                                                          '
	@echo 'Usage:                                                                    '
	@echo '   make help                           show help                          '
	@echo '                                                                          '
	@echo '   make up                             启动服务                            '
	@echo '   make down                           停止服务                            '
	@echo '   make rm                             移除集群                            '
	@echo '   make logs                           查看日志                            '
	@echo '                                                                          '
	@echo '                                                                          '
	@echo '   make init-config                    初始化config集群                    '
	@echo '   make init-shard                     初始化shard1，shard2                '
	@echo '   make add-shard                      shard1，shard2加入集群              '
	@echo '   make create-database                创建database MyDatabase             '
	@echo '                                                                          '
	@echo '                                                                          '
	@echo '   make echo-status                    查看集群状态                         '
	@echo '   make echo-shard-status              查看分片状态                         '
	@echo '   make others                         其他命令                            '
	@echo '                                                                          '
	@echo '                                                                          '

# up docker-compose
up:
	docker-compose up -d

# init config
init-config:
	docker-compose exec configsvr-01 sh -c "mongo < /scripts/config.initiate.js"

# init shard1, shard2
init-shard:
	docker-compose exec shardsvr-01-01 sh -c "mongo < /scripts/shard1.initate.js"
	docker-compose exec shardsvr-02-01 sh -c "mongo < /scripts/shard2.initate.js"

# add shard1, shard2 to cluster
add-shard:
	docker-compose exec mongossvr-01 sh -c "mongo < /scripts/mongos.addshard.js"


# create database MyDatabase
create-database:
	docker-compose exec mongossvr-01 sh -c "mongo < /scripts/mongos.create.database.js"



# echo status
echo-status:
	docker-compose exec -it mongossvr-01 sh -c "echo 'sh.status()' | mongo --port 27017"

# echo shard status
echo-shard-status:
	docker exec -it shardsvr-01-01 bash -c "echo 'rs.status()' | mongo --port 27017"
	docker exec -it shardsvr-02-01 bash -c "echo 'rs.status()' | mongo --port 27017"


# other commands
others:
	docker exec -it configsvr-01 bash -c "echo 'rs.status()' | mongo --port 27017"

	docker exec -it shardsvr-01-01 bash -c "echo 'rs.help()' | mongo --port 27017"
	docker exec -it shardsvr-01-01 bash -c "echo 'rs.status()' | mongo --port 27017"
	docker exec -it shardsvr-01-01 bash -c "echo 'rs.printReplicationInfo()' | mongo --port 27017"
	docker exec -it shardsvr-01-01 bash -c "echo 'rs.printSlaveReplicationInfo()' | mongo --port 27017"


# To remove all data and re-initialize the cluster, make sure the containers are stopped and then:
rm:
	@echo 'are you makr sure bask up the datas??'
	docker-compose rm

# clean up docker-compose
down:
	docker-compose down -v --remove-orphans


logs:
	docker-compose logs -f
