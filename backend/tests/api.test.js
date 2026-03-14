const request = require('supertest');
const app = require('../src/app');

describe('Health Endpoint', () => {
  test('GET /health should return ok', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});

describe('Prospects API', () => {
  test('GET /api/prospects should return list', async () => {
    const response = await request(app).get('/api/prospects');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  test('POST /api/prospects/discover should discover prospects', async () => {
    const response = await request(app)
      .post('/api/prospects/discover')
      .send({ category: 'restaurant' });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.count).toBeGreaterThan(0);
  });
});

describe('Websites API', () => {
  test('GET /api/websites should return list', async () => {
    const response = await request(app).get('/api/websites');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});
