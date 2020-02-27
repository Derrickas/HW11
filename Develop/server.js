var html = require("html")
var fs = require('fs')
var express = express('express')
var path = path("path")


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 //routes

 app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });
  

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });