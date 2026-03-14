const express = require('express');
const router = express.Router();
const Domain = require('../models/Domain');
const { searchDomains, purchaseDomain, configureDNS } = require('../services/mock/domain');

// POST /api/domains/search
router.post('/search', async (req, res) => {
  try {
    const { keyword } = req.body;
    const results = await searchDomains(keyword);
    res.json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/domains/purchase
router.post('/purchase', async (req, res) => {
  try {
    const { website_id, domain_name, price_cents } = req.body;
    
    const purchase = await purchaseDomain({ domain: domain_name });
    
    if (purchase.success) {
      const domain = await Domain.create({
        website_id,
        domain_name,
        price_cents,
        status: 'purchased'
      });
      
      await Domain.updateStatus(domain.id, 'active', new Date());
      
      res.json({ success: true, data: { domain, purchase } });
    } else {
      res.status(400).json({ success: false, error: 'Purchase failed' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/domains/configure-dns
router.post('/configure-dns', async (req, res) => {
  try {
    const { domain, target_url } = req.body;
    const config = await configureDNS(domain, target_url);
    res.json({ success: true, data: config });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
