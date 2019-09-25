const Koa = require('koa');
const path = require('path');
const static = require('koa-static')(path.resolve(__dirname, 'public'));
const bodyparser = require('koa-bodyparser');
const restful = require('./framework/router');
const { loadModel } = require('./framework/loader');

const app = new Koa();

// 初始化数据库
loadModel(app);

app.use(bodyparser());
app.use(static);
app.use(restful);

app.listen(3000);
