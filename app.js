const express = require('express');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const path = __dirname + '/dist';
app.use(express.static(path));

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

module.exports = app;
