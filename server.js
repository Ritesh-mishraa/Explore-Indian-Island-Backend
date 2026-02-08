const express = require('express');
const errorHandler = require('./src/middleware/error'); 
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const islandRoutes = require('./src/routes/islandRoutes');
const connectDB = require('./src/config/db');
require('dotenv').config();

// Connect to database
connectDB();

const app = express();

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
  apis: ['./src/routes/*.js'], // This tells Swagger where to look for documentation
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Body parser (To read JSON from POST requests)
app.use(express.json());

// Mount routes
app.use('/api/islands', islandRoutes);

// MUST be after routes!
app.use(errorHandler); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));