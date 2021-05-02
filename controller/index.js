var UserModel       = require("../models/user");
var passport        = require("passport");
var commentmodel    = require("../models/comment");
var statesModel     = require("../models/state");
 
exports.Userregister = (req, res) => {
    res.render("register");
}

exports.signuplogic = (req, res) => {
    var newUser = new User({username:req.body.username});
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, ()=> {
            res.redirect("/states");
        });
    });
}

exports.loginform = (req, res) => {
    res.render("login");
}

exports.passport = passport.authenticate("local",
{
    successRedirect:"/states",
    failureRedirect:"/login"
}), (req, res) => {}

exports.logout = (req, res) => {
    req.logout();
    res.redirect("/states");
}