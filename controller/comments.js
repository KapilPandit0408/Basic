var commentmodel = require("../models/comment");
exports.commentform = (req, res) => {
    // Find state by id
    State.findById(req.params.id, (err, state) => {
        if(err) {
            console.log(err);
        }
        else {
            res.render("comments/new.ejs", {state:state});
        }
    });
}

exports.newcomment = async (req, res, next) => {
    // Lookup state using ID
    State.findById(req.params.id, (err, state) => {
        if(err) {
            console.log(err);
            res.redirect("/states")
        }
            const users =  commentmodel.aggregate([
                {
                  $lookup: {
                    from: "user",
                    let: {user: "$_id"},
                    as: "usercomment"
                  }
                },
                {$limit: 5}
              ])
          
              res.json(users);
        
    });
    next()
}