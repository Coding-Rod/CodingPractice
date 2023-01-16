const express = require('express');
const router = express.Router();
const categories_gen = require('../db/categories');

router.get('/', (req, res) => {
  const { size } = req.query;
  res.json(categories_gen(size));
});

module.exports = router;
