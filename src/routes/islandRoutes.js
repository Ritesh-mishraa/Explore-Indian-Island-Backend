const express = require('express');
const router = express.Router();
const { getAllIslands, getIslandById } = require('../controllers/islandController');

router.get('/', getAllIslands);
router.get('/:id', getIslandById);

module.exports = router;