const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

const tables = require('./api/table');

router.use('/api', tables.routes());
app.proxy = true;
app.use(router.routes()).use(router.allowedMethods()).use(cors());
app.listen((process.env.PORT || 5000), () => {
    console.log((process.env.PORT || 5000));
});



// const express = require('express')
// const app = express()
//
// app.set('port', (process.env.PORT || 5000))
// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));
//
// const users = [
//     { id: 1, name: "유저1" },
//     { id: 2, name: "유저2" },
//     { id: 3, name: "유저3" }
// ];
//
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });
//
// app.get("/api/users", (req, res) => {
//     res.json({users: users});
// });
//
//
// app.listen(app.get('port'), () => {
//     console.log(`Example app listening at http://localhost:${app.get('port')}`)
// });