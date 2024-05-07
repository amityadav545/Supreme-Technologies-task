
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Next.js API',
      version: '1.0.0',
      description: 'API documentation for Next.js API',
    },
  },
  apis: ['./pages/api/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
