const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const dashboardController = require('../controllers/dashboardController');


/**
 * Dashboard Route
 */ 
// router.get('/dashboard', isLoggedIn, dashboardController.dashboardPage);
// router.get('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardPageViewCard);
// router.put('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardUpdateViewCard);
// router.delete('/dashboard/item-delete/:id', isLoggedIn, dashboardController.dashboardDeleteCard);
// router.get('/dashboard/add', isLoggedIn, dashboardController.dashboardAddCard);
// router.post('/dashboard/add', isLoggedIn, dashboardController.dashboardAddCardSubmit);
// router.get('/dashboard/search', isLoggedIn, dashboardController.dashboardSearch);
// router.post('/dashboard/search', isLoggedIn, dashboardController.dashboardSearchSubmit);

router.get('/dashboard', dashboardController.dashboardPage);
router.get('/dashboard/item/:id', dashboardController.dashboardPageViewCard);
router.put('/dashboard/item/:id', dashboardController.dashboardUpdateViewCard);
router.delete('/dashboard/item-delete/:id', dashboardController.dashboardDeleteCard);
router.get('/dashboard/add', dashboardController.dashboardAddCard);
router.post('/dashboard/add', dashboardController.dashboardAddCardSubmit);
router.get('/dashboard/search', dashboardController.dashboardSearch);
router.post('/dashboard/search', dashboardController.dashboardSearchSubmit);

/**
 * Timeline Route
 */
router.get('/timeline', dashboardController.timelinePage);

module.exports = router;

