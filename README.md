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
                                                                          
                                                                          
   make init-config                  初始化config集群                      
   make init-shard                   初始化shard1，shard2                  
   make add-shard                    shard1，shard2加入集群                
   make create-database              创建database MyDatabase               
                                                                          
                                                                          
   make echo-status                  查看集群状态                           
   make echo-shard-status            查看分片状态                           
   make others                       其他命令                              
            
```

