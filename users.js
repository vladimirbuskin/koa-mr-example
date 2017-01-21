const Koa = require('koa-mr')
const app = new Koa()

app.get('/:id', function n1 (ctx, id) {
  this.body = {id: 1, name: 'user1'}
})

app.get('/', function () {
  var users = [
    {id: 1, name: 'user1'},
    {id: 2, name: 'user2'},
    {id: 3, name: 'user3'}
  ]
  this.body = users
})

module.exports = app