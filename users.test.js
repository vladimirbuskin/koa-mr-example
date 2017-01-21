const app = require('./users')
const request = require('supertest').agent(app.listen())

describe('USERS', function () {

  it('GET /', function (done) {
    request
      .get('/')
      .expect('content-type', /json/)
      .expect(200, [ 
        { id: 1, name: 'user1' },
        { id: 2, name: 'user2' },
        { id: 3, name: 'user3' } ], done)
  })

  it('GET /1', function (done) {
    request
      .get('/1')
      .expect('content-type', /json/)
      .expect(200, { id: 1, name: 'user1' }, done)
  })

})