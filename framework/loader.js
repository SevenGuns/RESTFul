const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const config = require('../config');

function load(dir, cb) {
  const url = path.resolve(__dirname, dir);
  const files = fs.readdirSync(url);
  files.forEach(filename => {
    // 取出schema名称
    filename = filename.replace('.js', '');
    // 读取schema
    const file = require(`${url}/${filename}`);
    // 处理后续逻辑
    cb(filename, file);
  });
}

function loadModel(app) {
  mongoose.connect(config.db.url, config.db.options);
  const conn = mongoose.connection;
  conn.on('error', () => {
    console.error('数据库连接失败');
  });
  app.$model = {};
  load('../models', (filename, { schema }) => {
    console.log(`load model: ${filename}`, schema);
    app.$model[filename] = mongoose.model(
      filename,
      new mongoose.Schema(schema)
    );
  });
}

module.exports = {
  loadModel
};
