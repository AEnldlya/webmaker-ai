const express = require('express');
const router = express.Router();
const Prospect = require('../models/Prospect');
const { discoverProspects } = require('../services/mock/prospect-discovery');

// GET /api/prospects
router.get('/', async (req, res) => {
  try {
    const { limit = 100, offset = 0 } = req.query;
    const prospects = await Prospect.findAll(parseInt(limit), parseInt(offset));
    res.json({ success: true, data: prospects });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/prospects/discover
router.post('/discover', async (req, res) => {
  try {
    const { category, city } = req.body;
    const discovered = await discoverProspects({ category, city });
    
    // Save discovered prospects
    const saved = [];
    for (const prospect of discovered) {
      const savedProspect = await Prospect.create(prospect);
      saved.push(savedProspect);
    }
    
    res.json({ success: true, data: saved, count: saved.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/prospects/:id
router.get('/:id', async (req, res) => {
  try {
    const prospect = await Prospect.findById(req.params.id);
    if (!prospect) {
      return res.status(404).json({ success: false, error: 'Prospect not found' });
    }
    res.json({ success: true, data: prospect });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT /api/prospects/:id
router.put('/:id', async (req, res) => {
  try {
    const prospect = await Prospect.update(req.params.id, req.body);
    if (!prospect) {
      return res.status(404).json({ success: false, error: 'Prospect not found' });
    }
    res.json({ success: true, data: prospect });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE /api/prospects/:id
router.delete('/:id', async (req, res) => {
  try {
    await Prospect.delete(req.params.id);
    res.json({ success: true, message: 'Prospect deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
