const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const testRoutes = require('./routes/test');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/test', testRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
