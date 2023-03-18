const express = require('express');
const actions = require('../methodes/actions');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/dashboard', (req, res) => {
  res.send('Dashboard');
});

router.post('/addproduct', actions.addNew);

module.exports = router;
