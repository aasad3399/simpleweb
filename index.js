const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('You are attending Cognizant Docker training');
});
app.listen(8080, () => {
  console.log('Listening on port 8080');
});
