const express = require('express');
const router = express.Router();

// Controllers
const frontpage_controller = require('../controllers/frontpageController');

/* GET users listing. */
router.get('/', frontpage_controller.chore_display);

// Create user test
router.get('/create', frontpage_controller.add_user);

// User details
router.get('/user/:id', frontpage_controller.user_details_get);

// Chore details
router.get('/chore/:id', frontpage_controller.chore_details_get);

// Create chores
router.get('/create/chore', frontpage_controller.create_chore_get);

router.post('/create/chore', frontpage_controller.create_chore_post);

// Create user
router.get('/create/user', frontpage_controller.create_user_get);

router.post('/create/user', frontpage_controller.create_user_post);


module.exports = router;
