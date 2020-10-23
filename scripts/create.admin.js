var admin = db.getSiblingDB("admin");
admin.createUser(
    {
        user: "admin",
        pwd: "admin", // or cleartext password
        roles: [{role: "userAdminAnyDatabase", db: "admin"}]
    }
);



