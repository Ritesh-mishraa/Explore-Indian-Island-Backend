const mongoose = require('mongoose');

const IslandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Island name is required'],
    unique: true,
    trim: true
  },
  nativeName: {
    type: String,
    trim: true
  },
  // Geographical Data
  location: {
    group: { 
      type: String, 
      enum: ['Andaman', 'Nicobar', 'Lakshadweep', 'Offshore Mainlined', 'Other'],
      required: true 
    },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    },
    area: String, // e.g., "113 sq km"
  },
  // Informative Status (Crucial for your goal)
  status: {
    isInhabited: { type: Boolean, default: false },
    isProtectedArea: { type: Boolean, default: false },
    permitRequired: { 
      type: String, 
      enum: ['None', 'RAP', 'ILP', 'Special Permission'],
      default: 'None' 
    }
  },
  // Content Sections
  description: {
    summary: { type: String, required: true },
    history: String,
    floraAndFauna: [String]
  },
  culinaryHighlights: [{
    dishName: String,
    description: String
  }],
  bestTimeToVisit: {
    startMonth: String,
    endMonth: String,
    peakSeason: String
  },
  // Discovery Tags (For Chatbot and Search)
  vibeTags: [String], // e.g., ["Scuba", "Quiet", "Historical", "Bird Watching"]
  images: [{
    url: String,
    caption: String
  }],
  // External Data References (For API aggregation)
  externalLinks: {
    wikiUrl: String,
    govtPortal: String
  }
}, {
  timestamps: true // Automatically creates createdAt and updatedAt
});

// Adding an index for high-performance search
IslandSchema.index({ name: 'text', vibeTags: 'text' });

module.exports = mongoose.model('Island', IslandSchema);