const app = require('./server');
const mongoose = require("mongoose");

mongoose.connect
    ("mongodb+srv://devops:devops@todoappdb.hkuit.mongodb.net/todoapp")
    .then(resp => console.log("Connected"))
    .catch(error => console.error("Error while connecting DB"))


app.listen(5000,()=>console.log("Server started successfully"))
