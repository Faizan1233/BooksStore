const mongoose = require("mongoose");
mongoose
.connect(
    "mongodb+srv://faizan:Faizan@cluster0.erdi0tv.mongodb.net/crudop?retryWrites=true&w=majority"
)
.then(() => console.log("Connected"));