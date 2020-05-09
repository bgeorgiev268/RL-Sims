const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./server/database/index");
const MongoStore = require("connect-mongo")(session);
const passport = require("./server/passport/index");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose")
// Route requires
const routes = require("./server/routes");

app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }
  
  

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI ||
	'mongodb://admin:Password1@ds237308.mlab.com:37308/heroku_kt4xf5mz',
	// 'mongodb://localhost:27017/simple-mern-passport',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use(routes)

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
