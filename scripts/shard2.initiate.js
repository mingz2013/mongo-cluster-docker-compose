// init shard
rs.initiate(
    {
        _id: "rs-shard-server-02",
        members: [
            {_id: 0, host: "shardsvr-02-01:27017"},
            {_id: 1, host: "shardsvr-02-02:27017"},
            {_id: 2, host: "shardsvr-02-03:27017"}
        ]
    }
);
