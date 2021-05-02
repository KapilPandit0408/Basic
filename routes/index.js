var express         = require("express");
var router          = express.Router();
var passport        = require("passport");
var User            = require("../models/user");
var Comment         = require("../models/comment");
var indexController = require("../controller/index")

// AUTH ROUTE
router.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});
// Home  Route
router.get('/', (req, res) => {
    res.render('landing');
});

// show register form
router.get("/register", indexController.Userregister);
// handle sign up logic
router.post("/register", indexController.signuplogic);
// show login form
router.get("/login", indexController.loginform);
// handling login logic
router.post("/login", indexController.passport);
//logout route
router.get("/logout", indexController.logout);

// Middleware function
function isLoggerIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;