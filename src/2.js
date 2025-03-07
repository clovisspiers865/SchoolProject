const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const data = { name: 'John Doe', age: 30 };
  res.json(data);
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
