const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `
    SELECT * FROM genres ORDER BY "name" ASC
  `;
  pool.query(query)
    .then((dbRes) => {
      res.send(dbRes.rows);
    }).catch((error) => {
      console.log('ERROR: Get all genres', error);
      res.sendStatus(500);
    });
});

module.exports = router;