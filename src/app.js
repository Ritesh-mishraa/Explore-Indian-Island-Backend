const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');
const islandRoutes = require('./routes/islandRoutes');
const errorHandler = require('./middleware/error');

const app = express();

// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Explore Indian Island API',
      version: '1.0.0',
      description: 'API documentation for the Island discovery platform',
    },
    servers: [{ url: 'http://localhost:5000' }],
  },
  apis: [path.join(__dirname, 'routes/*.js')], // Ensure correct path resolution
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Global Middlewares
app.use(helmet());        // Security headers
app.use(cors());          // Allow frontend access
app.use(morgan('tiny'));  // Concise request logging
app.use(express.json());  // Parse JSON bodies

// Documentation Route
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API is running smoothly' });
});

// API Routes
app.use('/api/islands', islandRoutes);

// 404 Handler (for undefined routes)
app.use((req, res, next) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Error Handler (Must be last middleware)
app.use(errorHandler);

module.exports = app;