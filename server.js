const Express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");
const morgan = require("morgan");
// mongodb+srv://nodejsuser:<password>@cluster0-d3het.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://nodejsuser:nodejsuser@cluster0-d3het.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
          console.log('mongodb connected')
      });

require("./model/user")
require("./model/notes");
require("express-async-errors");
var app = Express();
app.use(BodyParser.json()).use(morgan())

app.use(BodyParser.urlencoded({ extended: true }));
app.use("/posts", require("./routes/posts.js"));
// const user = mongoose.model("user");

app.listen(3005, () => {
    console.log("port 3005 running");
})