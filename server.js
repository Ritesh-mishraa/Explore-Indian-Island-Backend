require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 5000;


// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('🏝️ Connected to Indian Island Database');
    app.listen(PORT, () => {
      console.log(`🚀 Server navigating on port ${PORT}`);
    });
  })
  .catch(err => console.error('Database connection error:', err));