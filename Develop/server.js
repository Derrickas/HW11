
var fs = require('fs')
var express = require('express')
var path = require("path")
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 3000;


app.use(bodyParser.json()); 
app.use(express.urlencoded( {
  extended: true
}));
app.use(express.static("public"));


//  //routes

 app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
  
  app.get("/notes", (req, res) =>  {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
  });
  // app.get("/", (req, res) =>  {
  //   res.sendFile(path.join(__dirname, "public", "assets", "js", "util.js"));
  // });

  app.post("/api/notes", (req, res) => {
console.log(req.body)
  })

  app.get("/api/notes", (req, res) =>  {
    res.json([{
      id: '1',
    title: 'test 2', 
    text: 'test confirmed'
    }])
  });
  app.listen(PORT, () => console.log(`server listening on = ${PORT}`));

  //api routes

  // //should recieve a new note to save on request body
  // app.post('/api/notes', (req, res) => {
  //   req.writeFile(__dirname, 'db', 'db.json');
  // res.end(req.body) 

  // });

  // //should read the db.json

  // app.get('/api/notes', (req, res) => {
  //   res.readFile(__dirname, 'db', 'db.json' );
  // });

  // //should make params for notes json
  // app.get('/api/notes/title/text', (req, res) => {
  //   res.writeFile(__dirname, 'db', 'db.json' );
  // });

  // app.delete()

