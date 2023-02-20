const express = require('express');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-Width, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

// const path = __dirname + '/dist';
// app.use(express.static(path));

// app.get('/', function (req, res) {
//   res.sendFile(path + 'index.html');
// });

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

module.exports = app;
