require('dotenv').config();
const mongoose = require('mongoose');
const Island = require('./src/models/Island'); // Make sure this path is correct!

const IslandData = [

    // 1. HAVELOCK (SWARAJ DWEEP) - The Gold Standard
  {
    name: "Havelock Island",
    nativeName: "Swaraj Dweep",
    location: {
      group: "Andaman",
      coordinates: { lat: 12.0335, lng: 92.9876 },
      area: "113.93 sq km"
    },
    status: { isInhabited: true, permitRequired: "None" },
    description: {
      summary: "Most popular island in the Andamans, known for white sand beaches.",
      history: "Renamed Swaraj Dweep in 2018 to honor Subhash Chandra Bose.",
      floraAndFauna: ["Coral Reefs", "Sea Turtles", "Evergreen Forests"]
    },
    culinaryHighlights: [{ dishName: "Grilled Fish", description: "Freshly caught Snapper with local spices." }],
    vibeTags: ["Diving", "Honeymoon", "Luxury"],
    bestTimeToVisit: { startMonth: "November", endMonth: "May", peakSeason: "December" }
  },
  // 2. MAJULI - The River Giant
  {
    name: "Majuli Island",
    nativeName: "Majuli",
    location: {
      group: "Other",
      coordinates: { lat: 26.95, lng: 94.16 },
      area: "352 sq km"
    },
    status: { isInhabited: true, permitRequired: "None" },
    description: {
      summary: "The world's largest river island, located in the Brahmaputra.",
      history: "Center of Neo-Vaishnavite culture in Assam.",
      floraAndFauna: ["Siberian Crane", "Pelicans"]
    },
    culinaryHighlights: [{ dishName: "Pura Fish", description: "Roasted fish in banana leaves." }],
    vibeTags: ["Cultural", "Spiritual", "River"],
    bestTimeToVisit: { startMonth: "October", endMonth: "March", peakSeason: "January" }
  },
  // 3. BARREN ISLAND - The Volcano
  {
    name: "Barren Island",
    nativeName: "Barren Island",
    location: {
      group: "Andaman",
      coordinates: { lat: 12.278, lng: 93.858 },
      area: "8.34 sq km"
    },
    status: { isInhabited: false, isProtectedArea: true, permitRequired: "Special Permission" },
    description: {
      summary: "The only confirmed active volcano in South Asia.",
      history: "Significant eruption recorded in 2017.",
      floraAndFauna: ["Manta Rays", "Feral Goats"]
    },
    culinaryHighlights: [],
    vibeTags: ["Volcanic", "Extreme", "Diving"],
    bestTimeToVisit: { startMonth: "November", endMonth: "February", peakSeason: "Winter" }
  },
  // 4. ST. MARY'S - The Hexagon Rock
  {
    name: "St. Mary's Island",
    nativeName: "Coconut Island",
    location: {
      group: "Offshore Mainlined",
      coordinates: { lat: 13.37, lng: 74.67 },
      area: "1 sq km"
    },
    status: { isInhabited: false, isProtectedArea: true, permitRequired: "None" },
    description: {
      summary: "Unique hexagonal basaltic rock formations.",
      history: "Vasco da Gama landed here in 1498.",
      floraAndFauna: ["Basaltic Rocks", "Coconut Palms"]
    },
    culinaryHighlights: [{ dishName: "Neer Dosa", description: "Available on the nearby Udupi mainland." }],
    vibeTags: ["Geological", "Photography", "Quiet"],
    bestTimeToVisit: { startMonth: "October", endMonth: "January", peakSeason: "November" }
  },
  // 5. DIU ISLAND - Portuguese Heritage
  {
    name: "Diu Island",
    nativeName: "Diu",
    location: {
      group: "Offshore Mainlined",
      coordinates: { lat: 20.71, lng: 70.98 },
      area: "38.5 sq km"
    },
    status: { isInhabited: true, permitRequired: "None" },
    description: {
      summary: "A coastal enclave with Portuguese forts and cathedrals.",
      history: "Under Portuguese rule for over 400 years until 1961.",
      floraAndFauna: ["Hoka Palms", "Flamingos"]
    },
    culinaryHighlights: [{ dishName: "Seafood Platter", description: "Fusion of Gujarati and Portuguese styles." }],
    vibeTags: ["Historical", "Beach", "Alcohol-friendly"],
    bestTimeToVisit: { startMonth: "October", endMonth: "May", peakSeason: "December" }
  },
  // 6. ROSS ISLAND (NETAJI SUBHASH CHANDRA BOSE DWEEP)
  {
    name: "Ross Island",
    nativeName: "Netaji Subhash Chandra Bose Dweep",
    location: {
      group: "Andaman",
      coordinates: { lat: 11.67, lng: 92.76 },
      area: "0.3 sq km"
    },
    status: { isInhabited: false, isProtectedArea: true, permitRequired: "None" },
    description: {
      summary: "Historical ruins of the British administrative capital.",
      history: "Known as the 'Paris of the East' during colonial times.",
      floraAndFauna: ["Spotted Deer", "Peacocks"]
    },
    culinaryHighlights: [],
    vibeTags: ["History", "Ruins", "Light & Sound Show"],
    bestTimeToVisit: { startMonth: "October", endMonth: "March", peakSeason: "December" }
  },
  // 7. NEIL ISLAND (SHAHEED DWEEP)
  {
    name: "Neil Island",
    nativeName: "Shaheed Dweep",
    location: {
      group: "Andaman",
      coordinates: { lat: 11.83, lng: 93.05 },
      area: "18.9 sq km"
    },
    status: { isInhabited: true, permitRequired: "None" },
    description: {
      summary: "The 'Vegetable Bowl' of Andamans, known for its slow pace.",
      history: "Renamed in 2018; heavily agriculture-based.",
      floraAndFauna: ["Natural Bridge", "Dugongs"]
    },
    culinaryHighlights: [{ dishName: "Local Organic Salad", description: "Fresh produce from island farms." }],
    vibeTags: ["Peaceful", "Cycling", "Sunset"],
    bestTimeToVisit: { startMonth: "October", endMonth: "May", peakSeason: "January" }
  },
  // 8. ELEPHANTA ISLAND (GHARAPURI)
  {
    name: "Elephanta Island",
    nativeName: "Gharapuri",
    location: {
      group: "Offshore Mainlined",
      coordinates: { lat: 18.96, lng: 72.93 },
      area: "16 sq km"
    },
    status: { isInhabited: true, isProtectedArea: true, permitRequired: "None" },
    description: {
      summary: "Home to the UNESCO-listed 5th-century cave temples.",
      history: "Named 'Elephanta' by Portuguese explorers due to a giant elephant statue.",
      floraAndFauna: ["Monkeys", "Mangroves"]
    },
    culinaryHighlights: [{ dishName: "Local Berries", description: "Wild-grown berries sold by villagers." }],
    vibeTags: ["UNESCO", "Spiritual", "History"],
    bestTimeToVisit: { startMonth: "November", endMonth: "March", peakSeason: "Winter" }
  },
  // 9. PAMBAN ISLAND (RAMESWARAM)
  {
    name: "Pamban Island",
    nativeName: "Rameswaram Island",
    location: {
      group: "Offshore Mainlined",
      coordinates: { lat: 9.28, lng: 79.31 },
      area: "61 sq km"
    },
    status: { isInhabited: true, permitRequired: "None" },
    description: {
      summary: "A sacred island connected to the mainland by the famous Pamban Bridge.",
      history: "A key site in the Ramayana epic.",
      floraAndFauna: ["Dugongs", "Whale Sharks"]
    },
    culinaryHighlights: [{ dishName: "Puliyodarai", description: "Tamarind rice served as temple prasadam." }],
    vibeTags: ["Religious", "Pilgrimage", "Train Journey"],
    bestTimeToVisit: { startMonth: "October", endMonth: "April", peakSeason: "January" }
  },
  // 10. AGATTI ISLAND
  {
    name: "Agatti Island",
    nativeName: "Agatti",
    location: {
      group: "Lakshadweep",
      coordinates: { lat: 10.85, lng: 72.19 },
      area: "3.84 sq km"
    },
    status: { isInhabited: true, permitRequired: "ILP" },
    description: {
      summary: "The main gateway to Lakshadweep with a stunning airport lagoon.",
      floraAndFauna: ["Tuna", "Butterfly Fish", "Coconut Grove"]
    },
    culinaryHighlights: [{ dishName: "Mas Kahaa", description: "Smoked tuna dish." }],
    vibeTags: ["Lagoon", "Snorkeling", "Remote"],
    bestTimeToVisit: { startMonth: "October", endMonth: "March", peakSeason: "December" }
  },
  // 11. HOPE ISLAND
  {
    name: "Hope Island",
    nativeName: "Hope Island",
    location: {
      group: "Offshore Mainlined",
      coordinates: { lat: 16.97, lng: 82.35 },
      area: "2.5 sq km"
    },
    status: { isInhabited: false, isProtectedArea: true, permitRequired: "None" },
    description: {
      summary: "A tadpole-shaped sandbar protecting Kakinada from storm surges.",
      floraAndFauna: ["Olive Ridley Turtles", "Casuarina Trees"]
    },
    culinaryHighlights: [],
    vibeTags: ["Nature", "Turtles", "Eco-tourism"],
    bestTimeToVisit: { startMonth: "December", endMonth: "February", peakSeason: "Turtle Season" }
  },
  // 12. DIVAR ISLAND
  {
    name: "Divar Island",
    nativeName: "Divar",
    location: {
      group: "Offshore Mainlined",
      coordinates: { lat: 15.52, lng: 73.89 },
      area: "20 sq km"
    },
    status: { isInhabited: true, permitRequired: "None" },
    description: {
      summary: "A quiet Goan escape with Portuguese architecture and winding lanes.",
      history: "Known for the Bonderam festival of flags.",
      floraAndFauna: ["Otters", "Mangroves"]
    },
    culinaryHighlights: [{ dishName: "Goan Fish Thali", description: "Served in traditional island homes." }],
    vibeTags: ["Architecture", "Festival", "Tranquility"],
    bestTimeToVisit: { startMonth: "October", endMonth: "February", peakSeason: "August (Bonderam)" }
  }
];


const seedDB = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");
    
    // Connect to the URI from your .env
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Connected to Database: ${mongoose.connection.name}`);

    // 1. Clear existing data to avoid duplicates
    console.log("🧹 Clearing old data...");
    await Island.deleteMany({});

    // 2. Insert the new data
    console.log("🚀 Inserting island data...");
    const result = await Island.insertMany(IslandData);
    
    console.log(`🏝️ SUCCESS: ${result.length} islands have been added to your database!`);
    
    // Exit the script
    process.exit(0);
  } catch (err) {
    console.error("❌ ERROR SEEDING DATA:", err);
    process.exit(1);
  }
};

// Start the function
seedDB();