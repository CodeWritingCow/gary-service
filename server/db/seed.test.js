const { db } = require('./');
const app = require('../app');
const request = require('supertest');

describe('GET route /api/events/:id', () => {
    test(`should return an event based on its ID`, () => {
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

describe('GET route /api/categories/:id', () => {
    test(`should return all events based on their category`, () => {
        return request(app)
            .get('/api/categories/1')
            .then((res) => {
                expect(Array.isArray(res.body)).toBe(true);
                res.body.forEach(event => {
                    expect(event.category).toBe(1);
                });
            });
    });
});
