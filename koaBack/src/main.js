const Koa = require('koa');
const Router = require('koa-router');
const logger = require('./module/logger');
const api = require('./restAPI');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router();
const serve = require("koa-static");
const path = require('path');
const send = require('koa-send');

const buildDirectory= path.resolve(__dirname,'../../reactFront/build');

app.use(serve(buildDirectory));



router.use('/api',api.routes());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());



app.use(async ctx=>{
    if(ctx.status === 404 && ctx.path.indexOf('/api')!==0){
       await send(ctx, 'index.html',{ root:buildDirectory });
    }
});
app.listen( process.env.PORT || 4000, ()=>{
    logger.info("listen server...");
})
