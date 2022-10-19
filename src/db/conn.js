const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Meet:meet123@cluster0.7zmf7n2.mongodb.net/?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useCreateIndex: true
 })
    .then(() => console.log("connection sucessful"))
    .catch((err) => console.log("Erroe accurse"));
