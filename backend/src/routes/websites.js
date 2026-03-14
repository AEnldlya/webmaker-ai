const express = require('express');
const router = express.Router();
const Website = require('../models/Website');
const { generateWebsite } = require('../services/mock/website-generator');
const { deployToVercel } = require('../services/mock/deployment');
const Deployment = require('../models/Deployment');

// GET /api/websites
router.get('/', async (req, res) => {
  try {
    const { limit = 100, offset = 0 } = req.query;
    const websites = await Website.findAll(parseInt(limit), parseInt(offset));
    res.json({ success: true, data: websites });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/websites
router.post('/', async (req, res) => {
  try {
    const website = await Website.create(req.body);
    res.status(201).json({ success: true, data: website });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/websites/:id
router.get('/:id', async (req, res) => {
  try {
    const website = await Website.findById(req.params.id);
    if (!website) {
      return res.status(404).json({ success: false, error: 'Website not found' });
    }
    res.json({ success: true, data: website });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/websites/:id/generate
router.post('/:id/generate', async (req, res) => {
  try {
    const website = await Website.findById(req.params.id);
    if (!website) {
      return res.status(404).json({ success: false, error: 'Website not found' });
    }
    
    const generated = await generateWebsite({
      business_name: website.business_name,
      business_type: website.business_type
    });
    
    // Update website with generated data
    const updated = await Website.update(req.params.id, {
      ...website,
      status: 'generated',
      lighthouse_score: generated.lighthouse_score
    });
    
    res.json({ success: true, data: { website: updated, generated } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/websites/:id/deploy
router.post('/:id/deploy', async (req, res) => {
  try {
    const website = await Website.findById(req.params.id);
    if (!website) {
      return res.status(404).json({ success: false, error: 'Website not found' });
    }
    
    const deployment = await deployToVercel(website);
    
    // Save deployment record
    await Deployment.create({
      website_id: req.params.id,
      vercel_deployment_id: deployment.deployment_id,
      preview_url: deployment.preview_url
    });
    
    // Update website
    const updated = await Website.update(req.params.id, {
      ...website,
      status: 'deployed',
      vercel_url: deployment.preview_url
    });
    
    res.json({ success: true, data: { website: updated, deployment } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
