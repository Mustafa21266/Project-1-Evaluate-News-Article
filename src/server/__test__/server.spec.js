// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'
const request = require('supertest');
const app = require('../index.js')
describe('Server Test', () => {
    // TODO: add your test cases to test server
    it('should get the homepage', async () => {
      const res = await request(app)
        .get('/')
      expect(res.statusCode).toEqual(200)
    })

    it('should create a new post', async () => {
        const res = await request(app)
          .post('/add-post')
          .send({
            url: 'https://en.wikipedia.org/wiki/Article_(grammar)',
          })
        expect(res.statusCode).toEqual(200)
      })
    
    it('should get mockAPI data', async () => {
        const res = await request(app)
          .get('/test')
        expect(res.statusCode).toEqual(200)
      })
})
