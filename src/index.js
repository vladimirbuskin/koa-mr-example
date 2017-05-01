const Koa = require('koa-mr')

const users = require('./users')
const home = require('./home')

const app = new Koa()

app.mount('/', home)
app.mount('/users', users)

app.listen(3000)
console.log('listen port 3000')