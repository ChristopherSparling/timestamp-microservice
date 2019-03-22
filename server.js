const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));


app.get('/api/timestamp/:dateTime?', (req, res) => {
  console.log(req.params.dateTime)
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});