const request = require('supertest');
const app = require('../src/index');

describe('TaskFlow API Tests', () => {
  it('GET /api/health should return 200 healthy status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});

