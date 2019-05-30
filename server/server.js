const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();


const port = 3000;

app.use(express.static(path.join(__dirname + '/../public')));
app.use(cors());

app.get('/photos/:id', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://localhost:3001/photos/${id}`);
})

app.get('/listings/:id', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://localhost:3002/listings/${id}`);
})

app.get('/booking/:id', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://localhost:3003/booking/${id}`);
})

app.get('/room/:id', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://localhost:3003/room/${id}`);
})

app.get('/reviews/:id/', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://localhost:3004/reviews/${id}`);
})

app.get('/MoreHomes/:id', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://localhost:3005/MoreHomes/${id}`);
})

app.listen(port, () => {
    console.log('Server is listening on port 3000')
});