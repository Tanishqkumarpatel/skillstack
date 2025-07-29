const express = require('express');
const testRoutes = require('./routes/test');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/test' ,testRoutes);
app.use('/auth', authRoutes);

module.exports = app;
