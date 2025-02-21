const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('should return "This app is running properly!"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('This app is running properly!');
    });
});

describe('GET /dewaweb', () => {
    it('should return "Hello, Dewaweb Indonesia"', async () => {
        const res = await request(app).get('/dewaweb');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, Dewaweb Indonesia');
    });
});