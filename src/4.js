// NodeJS code example
const express = require('express');
const app = express();
app.use(express.json());

// define a route
app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
