require('dotenv').config();
const mongoose = require('mongoose');
const Island = require('./src/models/Island');
const seedData = require('./seedData');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('🏝️ Connected to Database');

    try {
      // Clear existing islands
      await Island.deleteMany({});
      console.log('🗑️ Cleared existing islands');

      // Insert seed data
      await Island.insertMany(seedData);
      console.log(`✅ Successfully seeded ${seedData.length} islands!`);

      // List the islands
      console.log('\n📝 Seeded Islands:');
      seedData.forEach((island, index) => {
        console.log(`  ${index + 1}. ${island.name} (${island.location.group})`);
      });

      process.exit(0);
    } catch (error) {
      console.error('❌ Error seeding data:', error);
      process.exit(1);
    }
  })
  .catch(err => {
    console.error('❌ Database connection error:', err);
    process.exit(1);
  });
