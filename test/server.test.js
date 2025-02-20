const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('should return "This app is running properly!"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('This app is running properly!');
    });
});

describe('GET /dewacloud', () => {
    it('should return "Hello, Dewacloud Indonesia"', async () => {
        const res = await request(app).get('/dewacloud');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, Dewacloud Indonesia');
    });
});