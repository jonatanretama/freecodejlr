
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here
var bodyParser = require('body-parser');

/** 1) Meet the node console. */
console.log("Hello World")

/** 2) A first working Express Server */
//app.get("/", (req,res) => (res.send("Hello Express")));

/** 3) Serve an HTML file */
console.log(__dirname);
app.get("/", (req, res) => (res.sendFile(__dirname + "/views/index.html")));

/** 4) Serve static assets  */
app.use("/",express.static(__dirname + "/public"));

/** 5) serve JSON on a specific route */
app.get("/json", (req, res) => (res.json({ "message": "Hello json" })));

/** 6) Use the .env file to configure the app */

app.get("/json", (req, res) => {
  let myEnv = process.env.MESSAGE_STYLE;
  let message = process.env.MESSAGE_STYLE == "uppercase" ?
    "HELLO JSON" : "Hello json";
  res.json({"message": message});  
});



/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});



/** 8) Chaining middleware. A Time server */
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({time: req.time});
}
);

/** 9)  Get input from client - Route parameters */
app.get("/:word/echo", (req, res, next) => {
  res.send({echo: req.params.word});
  next();
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.get("/name", (req, res) => {
  let firstName = req.query.first;
  let lastName = req.query.last;  
  res.json({
    name: `${firstName} ${lastName}`
  });
});
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/** 12) Get data form POST  */
app.post("/name", (req,res) => {
  let firstName = req.body.first;
  let lastName = req.body.last;  
  res.json({
    name: `${firstName} ${lastName}`
  });
});


// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
