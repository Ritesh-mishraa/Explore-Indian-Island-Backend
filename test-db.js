require('dotenv').config();
const mongoose = require('mongoose');
const Island = require('./src/models/Island');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const count = await Island.countDocuments();
  console.log(`✅ Success! There are ${count} islands in your database.`);
  process.exit();
});