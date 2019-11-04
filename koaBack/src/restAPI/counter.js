const Router = require('koa-router');

const couterRouter= new Router();
let count = 0;

couterRouter.get('/:add',ctx=>{
     const {add} = ctx.params;
     const iAdd= parseInt(add);
     if(iAdd)count+=iAdd;
    ctx.body={
       count
    }
})

module.exports = couterRouter;