const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const limiter = require('./middleware/rateLimiter');
const errorHandler = require('./middleware/errorHandler');

const prospectsRouter = require('./routes/prospects');
const websitesRouter = require('./routes/websites');
const paymentsRouter = require('./routes/payments');
const domainsRouter = require('./routes/domains');
const financialsRouter = require('./routes/financials');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(morgan('combined'));
app.use(limiter);

// Routes
app.use('/api/prospects', prospectsRouter);
app.use('/api/websites', websitesRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/domains', domainsRouter);
app.use('/api/financials', financialsRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
