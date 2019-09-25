module.exports = {
  async init(ctx, next) {
    const model = ctx.app.$model[ctx.params.coll];
    if (model) {
      ctx.coll = model;
      await next();
    } else {
      ctx.body = 'no this model';
    }
  },
  async get(ctx) {
    ctx.body = await ctx.coll.find({});
  },
  async create(ctx) {
    const res = await ctx.coll.create(ctx.request.body);
    ctx.body = res;
    ctx.status = 201;
  },
  async update(ctx) {
    const res = await ctx.coll.updateOne(
      { _id: ctx.params.id },
      ctx.request.body
    );
    ctx.body = res;
  },
  async del(ctx) {
    const res = await ctx.coll.deleteOne({ _id: ctx.params.id });
    ctx.status = 204;
  }
};
