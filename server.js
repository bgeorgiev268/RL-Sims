const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./server/database/index");
const MongoStore = require("connect-mongo")(session);
const passport = require("./server/passport/index");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose")
const path = require("path");
// Route requires
const routes = require("./server/routes");

app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://dude:user123@ds145694.mlab.com:45694/heroku_1wq7p7nc', {
useNewUrlParser: true,
useUnifiedTopology: true
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// const publicPath = path.join(__dirname, '..', 'public');
// app.use(express.static(publicPath));

app.use(express.static(path.join(__dirname, 'build')));
-app.get('/', function (req, res) {
+app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 })
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('*', (req, res) => {
// 	res.sendFile(path.join(publicPath, 'index.html'));
//  });

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use(routes)

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
