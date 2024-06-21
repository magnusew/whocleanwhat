const express = require('express');
const router = express.Router();

// Controllers
const frontpage_controller = require('../controllers/frontpageController');

/* GET users listing. */
router.get('/', frontpage_controller.chore_display);

router.get('/create', frontpage_controller.add_user);

router.get('/user/:id', frontpage_controller.display_user );


module.exports = router;
