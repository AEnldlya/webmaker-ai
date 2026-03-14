const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const { createPaymentLink, handleWebhook } = require('../services/mock/payment');

// GET /api/payments
router.get('/', async (req, res) => {
  try {
    const { limit = 100, offset = 0 } = req.query;
    const payments = await Payment.findAll(parseInt(limit), parseInt(offset));
    res.json({ success: true, data: payments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/payments/create-link
router.post('/create-link', async (req, res) => {
  try {
    const { website_id, amount_cents } = req.body;
    
    const paymentLink = await createPaymentLink({ amount_cents });
    
    // Create payment record
    const payment = await Payment.create({
      website_id,
      amount_cents,
      stripe_session_id: paymentLink.session_id
    });
    
    res.json({ success: true, data: { payment, checkout_url: paymentLink.url } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/payments/webhook
router.post('/webhook', async (req, res) => {
  try {
    const result = await handleWebhook(req.body);
    
    // Update payment status if session completed
    if (req.body.data?.object?.id) {
      await Payment.updateStatus(
        req.body.data.object.id,
        'paid',
        new Date()
      );
    }
    
    res.json({ received: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
