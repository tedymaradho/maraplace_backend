const express = require('express');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');
const cors = require('cors');

const app = express();

const path = __dirname + '/dist/';
app.use(express.static(path));

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

module.exports = app;
