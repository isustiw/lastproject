const Card = require('../models/Card');

/**
 * GET/
 * Dashboard
 */

exports.dashboardPage = async (req, res) => {
    const locals = {
        title: 'Dashboard'
    }
    try {
        const cards = await Card.find({});
        console.log(cards);   

        res.render('dashboard', {
            userName: req.users.firstName,
            locals,
            cards,
            layout: '../views/layouts/main'
        });
    } catch (error) {
        
    }
}


/**
 * GET /
 * View Specific Card
 */
// where({ user: req.user.id })
exports.dashboardPageViewCard = async(req, res) => {
    const card = await Card.findById({ _id: req.params.id }).lean();
    
    if (card) {
        res.render('view-card', {
            cardID: req.params.id,
            card,
            layout: '../views/layouts/view-card'
        })
    } else {
        res.send("Something went wrong.")
    }
}

/**
 * PUT /
 * Update Specific Card
 */
exports.dashboardUpdateViewCard = async(req, res) => {

    try {
        await Card.findOneAndUpdate(
            { _id: req.params.id },
            { 
              title: req.body.title,
              body: req.body.body,
              responsiblePerson: req.body.responsiblePerson,
              deadline: req.body.deadline,
              workstatus: req.body.workstatus,
              updateAt: Date.now()
             })

            res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
}


/**
 * DELETE /
 * Delete Specific Card
 */
exports.dashboardDeleteCard = async(req, res) => {

    try {
        await Card.deleteOne({ _id: req.params.id });
        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
}

/**
 * GET /
 * ADD Card
 */
exports.dashboardAddCard = async(req, res) => {
    res.render('add', {
        layout: '../views/layouts/add-card'
    })
}

/**
 * POST /
 * ADD Card
 */
exports.dashboardAddCardSubmit = async(req, res) => {
    try {
        await Card.create(req.body);
        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
} 


/**
 * GET /
 * Search
 */
exports.dashboardSearch = async(req, res) => {
    try {
        res.render('search', {
            searchResults: '',
            layout: '../views/layouts/search-card'
        })
    } catch (error) {
        console.log(error);
    }
}


/**
 * POST /
 * Search For Notes
 */
exports.dashboardSearchSubmit = async(req, res) => {
    try {
        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChars = searchTerm.replace(/[^a-zA-Z0-9ก-๙]/g, "");

        const searchResults = await Card.find({
            $or: [
                { title: {$regex: new RegExp(searchNoSpecialChars, 'i') }},
                { body: {$regex: new RegExp(searchNoSpecialChars, 'i') }},
              ]
        })
        // .where({ user: req.user.id });

        res.render('search', {
            searchResults,
            layout: '../views/layouts/search-card'
        })

    } catch (error) {
        console.log(error);
    }
}

/**
 * GET/
 * Timeline
 */
exports.timelinePage = async (req, res) => {
    const locals = {
        title: 'Timeline'
    }
    try {
        const cards = await Card.find({});
        console.log(cards);   

        res.render('timeline', {
            // userName: req.users.firstName,
            locals,
            cards,
            layout: '../views/layouts/timelinelo'
        });
    } catch (error) {
        
    }
}

