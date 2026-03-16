const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');
const islandRoutes = require('./routes/islandRoutes');
const authRoutes = require('./routes/authRoutes');
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
    servers: [{ url: 'http://localhost:5001' }],
  },
  apis: [path.join(__dirname, 'routes/*.js')],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Rate Limiter — max 20 requests per 10 minutes for auth routes
const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
  message: { success: false, error: 'Too many requests, please try again after 10 minutes' }
});

// Global Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(morgan('tiny'));
app.use(express.json());
app.use((req, res, next) => {
  ['body', 'params', 'headers', 'query'].forEach((key) => {
    if (req[key]) {
      const sanitized = mongoSanitize.sanitize(req[key]);
      if (key === 'query') {
        Object.defineProperty(req, 'query', {
          value: sanitized,
          writable: true,
          enumerable: true,
          configurable: true,
        });
      } else {
        req[key] = sanitized;
      }
    }
  });
  next();
});

// Documentation Route
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API is running smoothly' });
});

// API Routes
app.use('/api/islands', islandRoutes);
app.use('/api/auth', authLimiter, authRoutes);

// 404 Handler (for undefined routes)
app.use((req, res, next) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Error Handler (Must be last middleware)
app.use(errorHandler);

module.exports = app;
