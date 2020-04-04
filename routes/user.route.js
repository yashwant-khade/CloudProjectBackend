const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.post('/', user_controller.user_create);
router.get('/:id', user_controller.user_details);
router.put('/:id', user_controller.user_update);
router.delete('/:id', user_controller.user_delete);

module.exports = router;