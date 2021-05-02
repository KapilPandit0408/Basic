var express          = require("express");
var router           = express.Router({mergeParams:true});
var State            = require("../models/state");
var Comment          = require("../models/comment");
var commentControler = require("../controller/comments");

// =======================
// COMMENTS ROUTE
// =======================

router.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

// Comments New
router.get("/new", isLoggerIn, commentControler.commentform);
// Comments Create
router.post("/", isLoggerIn, commentControler.newcomment);

// Middleware function
function isLoggerIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;