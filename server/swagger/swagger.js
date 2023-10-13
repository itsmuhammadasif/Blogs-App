const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'BLOGS API Documentation',
      version: '1.0.0',
      description: 'API documentation for Blogs App Backend',
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Local Development Server',
      },
    ],
  },
  apis: ['../routes/authRoutes', '../routes/tokenRoutes.js', '../routes/blogRoutes.js', '../routes/commentRoutes.js', './swagger/swaggerDoc.yaml',],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
