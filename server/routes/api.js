const express = require('express');
const { reset } = require('nodemon');
const apiController = require('../controllers/apiController');

const router = express.Router();

// router.get('/', apiController.getRecipes, (req, res) => {
//   return res.status(200).json({ recipes: res.locals.recipes });
// })

module.exports = router;