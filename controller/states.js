var statesModel = require("../models/state");
exports.getallstate= (req, res) => {
    
    // Get all states from DB
    State.find({}, (err, allStates) => {
        if(err) {
            console.log(err);
        }
        else {
         res.redirect("/states/1");
        }
    });
 }

 exports.searchstate = (req, res, next) => {
    var perPage = 4
    var page = req.params.page || 1
    if(req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
       State.find({ name:regex })
        .sort({name:1})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function(err,  allStates) {
                State.count().exec(function(err, count) {
                    if (err) return next(err)
                    res.render('states/index', {
                        states:allStates,
                        currentUser: req.user,
                        current: page,
                        pages: Math.ceil(count / perPage)
                    })
                })
            })
            next();
            }
    else {
        console.log(req.user)
        // Get all states from DB
        State.find({}, (err, allStates) => {
            if(err) {
                console.log(err);
            }
            else {
             res.render('states/index', {states:allStates, currentUser: req.user});
            }
        });
    }
}

 exports.pagestate = (req, res, next) => {
    var perPage = 4
    var page = req.params.page || 1
   // Get all states from DB
   State.find({ })
        .sort({name:1})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function(err,  founddata) {
                State.count().exec(function(err, count) {
                    if (err) return next(err)
                    res.render('states/index', {
                        states:founddata,
                        current: page,
                        pages: Math.ceil(count / perPage)
                    })
                })
            })
            next();
}

exports.addstate = (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var history = req.body.history;
    var newState = {name:name, image:image, history:history}
// Create new state
State.create(newState, (err, newlyCreated) => {
    if(err) {
        console.log(err);
    }
    else {
        res.redirect('/states');
    }
})
}

exports.nestate = (req, res) => {
    res.render("states/new.ejs");
}
exports.singlestate = (req, res) => {
    State.findById(req.params.id).populate("comments").exec((err, foundState) => {
        if(err) {
            console.log(err);
        }
        else {
            res.render("states/show", {state:foundState});
            
        }
    });
    
}

exports.editstate = (req, res) => {
    State.findById(req.params.id, (err, foundState) => {
        if(err) {
            res.redirect("/states");
        }
        else {
            res.render("states/edit", {state:foundState});
        }
    })
    
}

exports.updatestate = (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var history = req.body.history;
    var updateState = {name:name, image:image, history:history}
    State.findByIdAndUpdate(req.params.id, updateState, (err, updatedstate) => {
        if(err) {
            res.redirect("/states");
        }
        else {
            res.redirect("/states/" + req.params.id);
            console.log(req.params.id);
        }
    })
}

exports.deletestate = (req, res) => {
    State.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            res.redirect("/states");
        }
        else {
            res.redirect("/states");
        }
    });
}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};