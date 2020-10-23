var admin = db.getSiblingDB("admin");


admin.auth('admin', 'admin');

admin.createUser(
    {
        "user": "clusterAdmin",
        "pwd": "clusterAdmin",     // or cleartext password
        roles: [{"role": "clusterAdmin", "db": "admin"}]
    }
);

