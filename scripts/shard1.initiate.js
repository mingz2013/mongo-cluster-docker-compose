// init shard
rs.initiate(
    {
        _id: "rs-shard-server-01",
        members: [
            {_id: 0, host: "shardsvr-01-01:27017"},
            {_id: 1, host: "shardsvr-01-02:27017"},
            {_id: 2, host: "shardsvr-01-03:27017"}
        ]
    }
);
