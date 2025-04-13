const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const auth = require('../middleware/auth');

router.get('/', storeController.getAllStores);
router.post('/', auth(['admin']), storeController.createStore);
router.get('/:id/ratings', auth(['owner']), storeController.getStoreRatings);

module.exports = router;
