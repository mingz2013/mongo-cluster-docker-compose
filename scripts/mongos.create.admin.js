use
admin;

db.createUser(
    {
        user: "admin",
        pwd: "admin", // passwordPrompt(), // or cleartext password
        roles: [{role: "userAdminAnyDatabase", db: "admin"}, "readWriteAnyDatabase"]
    }
);


db.adminCommand({shutdown: 1});