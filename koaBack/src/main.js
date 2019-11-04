const Koa = require('koa');
const Router = require('koa-router');
const logger = require('./module/logger');
const api = require('./restAPI');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router();

router.use('/api',api.routes());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, ()=>{
    logger.info("listen server...");
})
