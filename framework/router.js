const router = require('koa-router')({ prefix: '/api' });
const { init, get, create, del, update } = require('./api');

router.get('/:coll', init, get);
router.post('/:coll', init, create);
router.put('/:coll/:id', init, update);
router.delete('/:coll/:id', init, del);

module.exports = router.routes();
