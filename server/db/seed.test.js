const { db } = require('./');
const app = require('../app');
const request = require('supertest');

// console.log('app loaded', app);

// test('Mooooooo', () => {
//   expect(1 + 1).toBe(2)
// });

describe('Test the API server', () => {
    // test('should pass integration test', () => {
    //   request(app)
    //     .get('/')
    //     .expect(200, 'moo')
    //     .end((err) => {
    //       if (err) throw done(err);
    //       done();
    //     });
    // })

    test('should pass integration tests', () => {
        // sample data:
        // [{"reviews_count":24502,"price":980,"rating":2.1,"name":"Papua New Guinea","image_url":"./public/images/01.jpg","category":2}]
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
            })
    });
});
