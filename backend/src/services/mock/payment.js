const { v4: uuidv4 } = require('uuid');

const createPaymentLink = async (paymentData) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const sessionId = `cs_${uuidv4().replace(/-/g, '')}`;
  
  return {
    session_id: sessionId,
    url: `https://checkout.stripe.com/pay/${sessionId}`,
    amount_cents: paymentData.amount_cents,
    currency: 'usd'
  };
};

const handleWebhook = async (payload) => {
  // Simulate webhook processing
  return {
    received: true,
    type: payload.type || 'checkout.session.completed',
    processed_at: new Date().toISOString()
  };
};

module.exports = { createPaymentLink, handleWebhook };
