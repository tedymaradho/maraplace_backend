const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.SERVER_PORT || 3000;

mongoose.set('strictQuery', true);

const DB = `${process.env.DB_HOST}/${process.env.DB_NAME}`;

mongoose
  .connect(DB, {
    authSource: 'admin',
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  })
  .then(() => console.log('Marashop connected to database'))
  .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`Marashop backend running on port ${port}`);
});
