This file is for my convenience while using mongo kindly ignore;

Microsoft Windows [Version 10.0.22621.2134]
(c) Microsoft Corporation. All rights reserved.

C:\Users\Dell>mongosh
Current Mongosh Log ID: 64eb4a8d0ad5c3184be13b87
Connecting to: mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.5
Using MongoDB: 7.0.0
Using Mongosh: 1.10.5

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

---

The server generated these startup warnings when booting
2023-08-27T13:40:13.764+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted

---

test> show dbs
Todo-app 108.00 KiB
admin 40.00 KiB
config 108.00 KiB
contact-app 72.00 KiB
demo-contact 40.00 KiB
local 72.00 KiB
mongose-common 8.00 KiB
test> use Todo-app
switched to db Todo-app
Todo-app> show collections
todolistexpresses
Todo-app> db.todolistexpresses.find({})
[
{
_id: ObjectId("64eb496ad54e5f7cb8537d00"),
task: 'i need to do internship as i can',
category: 'Personal',
date: '2023-08-05',
__v: 0
}
]

---

Code for connecting mongo to main server; in index router ;

mongoose
.connect("mongodb://127.0.0.1:27017/Todo-app")
.then(() => {
console.log("Mongo is connected");
})
.catch((error) => {
console.log("error while connecting to mongo", error);
});

const todoSchema = new mongoose.Schema({
task: {
type: String,
required: true,
unique: true,
},
category: {
type: String,
required: true,
},
date: {
type: String,
required: true,
},
});

const Todo = mongoose.model("todoListExpress", todoSchema);
