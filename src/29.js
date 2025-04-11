let express = require('express');
let app = express();
app.use(express.static('public'));

// Add your routes here

app.listen(3000, () => {
  console.log("Server is running on http://127.0.0.1:3000");
});
