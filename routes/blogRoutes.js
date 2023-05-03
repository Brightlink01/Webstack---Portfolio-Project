const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/create', blogController.plan_create_get);
router.get('/', blogController.plan_index);
router.post('/', blogController.plan_create_post);
router.get('/:id', blogController.plan_details);
router.delete('/:id', blogController.plan_delete);

module.exports = router;