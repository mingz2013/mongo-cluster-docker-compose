# mongo-cluster-docker-compose
mongo-cluster-docker-compose


## refs 

https://docs.mongodb.com/manual/tutorial/deploy-shard-cluster/

https://github.com/minhhungit/mongodb-cluster-docker-compose



## setup
[setup](./doc/setups.md)


## help


```
$make
                                                                          
Makefile for docker compose mongo cluster                                                  
                                                                          
Usage:                                                                    
   make help                           show help                          
                                                                          
   make up                             启动服务                            
   make down                           停止服务                            
   make rm                             移除集群                            
   make logs                           查看日志                            
                                                                          
                                                                          
   make init-config                    初始化config集群                    
   make init-shard                     初始化shard1，shard2                
   make add-shard                      shard1，shard2加入集群              
   make create-database                创建database MyDatabase             
                                                                          
                                                                          
   make echo-status                    查看集群状态                         
   make echo-shard-status              查看分片状态                         
   make others                         其他命令                            
                                                                          
                                         
```


## 搭建集群

- 启动进程

```bash
make up
```


- 初始化config复制集


```bash
make init-config
```
- 初始化shard1，shard2


```bash
make init-shard
```
- 将shard1，shard2加入到集群


```bash
make add-shard
```

- 创建MyDatabase数据库，MyCollection 集合

```bash
make create-database
```

- 连接
```bash
mongo --port 27017

```
```
show dbs
use Mydatabase
db.MyCollection.getShardDistribution()
db.MyCollection.find()
```







