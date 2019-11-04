const Router= require('koa-router');
const counter = require('./counter');
const getPrivacyDATA = require('./getPrivacyDATA');
const getToyes = require('./getToyes');
const getTecStack = require ('./getTecStack');
const api = new Router();

api.use('/counter',counter.routes());
api.use('/toyes', getToyes.routes());
api.use('/privacy',getPrivacyDATA.routes());
api.use('/tecStack',getTecStack.routes());

module.exports= api;