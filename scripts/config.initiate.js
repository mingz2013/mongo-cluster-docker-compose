// init config
rs.initiate(
    {
        _id: "rs-config-server",
        configsvr: true,
        members: [
            {_id: 0, host: "configsvr-01:27017"},
            {_id: 1, host: "configsvr-02:27017"},
            {_id: 2, host: "configsvr-03:27017"}
        ]
    }
);

