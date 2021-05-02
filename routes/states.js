
var express = require("express");
var router = express.Router();
var State = require("../models/state");
var Comment = require("../models/comment");
var stateController = require("../controller/states")

// INDEX ROUTE

router.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

router.get("/", stateController.getallstate);
router.get("/search", stateController.searchstate);
router.get("/:page", stateController.pagestate);
// Create or Add Route
router.post('/', stateController.addstate);
router.get('/new', stateController.nestate);
// Show more info About one state
router.get('/:id', stateController.singlestate);
// Edit Route
router.get('/:id/edit', isLoggerIn, stateController.editstate);
// Update Route
router.put("/:id", isLoggerIn, stateController.updatestate)
// Delete Route
router.delete("/:id", isLoggerIn, stateController.deletestate);
// Middleware function
function isLoggerIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;