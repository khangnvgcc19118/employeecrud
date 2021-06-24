const mongoose = require('mongoose');
const url = "mongodb+srv://khangnv:xZXVmNQZ6q3wsyr@cluster0.e9ofe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./employee.model');