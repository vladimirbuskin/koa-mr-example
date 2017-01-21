const app = require('./home')
const request = require('supertest').agent(app.listen())

describe('HOME', function () {

  it('GET /', function (done) {
    request
      .get('/')
      .expect('content-type', /text/)
      .expect(200, 'home', done)
  })

  it('GET /slow', function (done) {
    request
      .get('/slow')
      .expect('content-type', /text/)
      .expect(200, 'slow', done)
  })

})
