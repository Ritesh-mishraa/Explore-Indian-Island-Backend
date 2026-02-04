const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const islandRoutes = require('./routes/islandRoutes');

const app = express();

// Global Middlewares
app.use(helmet());        // Security headers
app.use(cors());          // Allow frontend access
app.use(morgan('tiny'));  // Concise request logging
app.use(express.json());  // Parse JSON bodies

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API is running smoothly' });
});

app.use('/api/islands', islandRoutes);

module.exports = app;