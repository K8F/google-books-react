const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

//Define middleware
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//Serve up static assets
if (process.env.NODE_ENV ==="production"){
    app.use(express.static("client/build"));
}

//Define API Routes
app.use(routes);

//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewURLParser: true});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });