var express                 = require('express'); 
var app                     = express();
var bodyParser              = require('body-parser'),
    mongoose                = require('mongoose'),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local")
    methodOverride          = require('method-override'),
    path                    = require('path'),
    State                   = require("./models/state"),
    Comment                 = require("./models/comment"),
    User                    = require("./models/user"),
    seedDB                  = require("./seeds");
var commentRoutes           = require("./routes/comments"),
    statesRoutes            = require("./routes/states"),
    indexRoutes             = require("./routes/index");        

    const url = process.env.MONGO_URL || "mongodb://localhost:27017/States"

    mongoose.connect('mongodb+srv://kapil123:kapil123@cluster0.wjkqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then((result) => {
        console.log("MongoDb Atlas Connected Successfuly")
    }).catch((err) => {
        console.log(" This is Error "+ err  )
    });       

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');  
app.use(express.static(__dirname + "/public"));
seedDB();

// PASSPORT CONFIG
app.use(require("express-session")( { 
    secret: "Ones again Kapil is winner",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Requring Routes 
app.use("/states/:id/comments",commentRoutes);
app.use("/states",statesRoutes);
app.use("/", indexRoutes);

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

























let port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Express server started at port  : ${port}`);
});