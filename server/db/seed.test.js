const { db } = require('./');
const app = require('../app');
const request = require('supertest');

// console.log('app loaded', app);

describe('GET endpoint /api/events/:id', () => {
    test(`should return data based on an event's ID`, () => {
        return request(app)
            .get('/api/events/1')
            .then((res) => {
                expect(Array.isArray(res.body)).toBe(true);
                expect(typeof res.body[0].reviews_count).toBe('number');
                expect(typeof res.body[0].price).toBe('number');
                expect(typeof res.body[0].rating).toBe('number');
                expect(typeof res.body[0].name).toBe('string');
                expect(typeof res.body[0].image_url).toBe('string');
                expect(typeof res.body[0].category).toBe('number');
            });
    });
});
