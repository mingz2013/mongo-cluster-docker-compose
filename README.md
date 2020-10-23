# mongo-cluster-docker-compose
mongo-cluster-docker-compose


## refs 

https://docs.mongodb.com/manual/tutorial/deploy-shard-cluster/

https://github.com/minhhungit/mongodb-cluster-docker-compose


https://docs.mongodb.com/manual/tutorial/deploy-sharded-cluster-with-keyfile-access-control/


## setup
[setup](./doc/setups.md)


## help


```
> make
                                                                          
Makefile for docker compose mongo cluster                                                  
                                                                          
Usage:                                                                    
   make help                           show help                          
                                                                          
   make create-key                     创建key                            
                                                                          
   make up                             启动服务                            
   make restart                        重启服务                            
   make down                           停止服务                            
   make rm                             移除集群                            
   make logs                           查看日志                            
                                                                          
                                                                          
   make rm-data                        删除数据目录，谨慎操作，避免数据丢失    
   make backup-data                    数据备份                            
                                                                          
                                                                          
   make init-config                    初始化config集群                    
   make init-shard                     初始化shard1，shard2                
   make create-shard-local-user-admin                                     
   make create-shard-local-cluster-admin                                  
   make add-shard                      shard1，shard2加入集群               
   make create-database                创建database MyDatabase             
                                                                          
                                                                          
   make echo-status                    查看集群状态                         
   make echo-shard-status              查看分片状态                         
   make others                         其他命令                            
                                              
```


## 搭建集群

- create-key

```bash
make create-key
```

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



- create-shard-local-user-admin
```bash
make create-shard-local-user-admin
```


- create-shard-local-cluster-admin
```bash
make create-shard-local-cluster-admin
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







