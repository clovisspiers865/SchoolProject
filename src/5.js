const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const name = req.query.name
  if (name) {
    res.send(`Hello, ${name}!`)
  } else {
    res.status(400).send('Please provide a name')
  }
})

module.exports = router
