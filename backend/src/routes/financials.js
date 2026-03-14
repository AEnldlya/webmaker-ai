const express = require('express');
const router = express.Router();
const FinancialRecord = require('../models/FinancialRecord');
const Payment = require('../models/Payment');

// GET /api/financials/summary
router.get('/summary', async (req, res) => {
  try {
    const summary = await FinancialRecord.getSummary();
    const totalRevenue = await Payment.getTotalRevenue();
    
    res.json({
      success: true,
      data: {
        summary,
        total_revenue_cents: totalRevenue
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/financials/daily
router.get('/daily', async (req, res) => {
  try {
    const daily = await FinancialRecord.getDailySummary();
    res.json({ success: true, data: daily });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/financials/monthly
router.get('/monthly', async (req, res) => {
  try {
    const monthly = await FinancialRecord.getMonthlySummary();
    res.json({ success: true, data: monthly });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
