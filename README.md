# 零编码实现RESTFul

通过mongoose.Schema贯通RESTFul和mongoDB，零编码实现增删改查

### 快速开始

1. 

```shell
yarn
yarn start
```

2. 自行通过postman测试

### 方法

POST: 新增

PUT: 修改

DELETE: 删除

GET: 查询

### 例子

```json
查询
GET /api/user

删除
DELETE /api/user/5d8b789279eabc2bdb6eb8df

新增
POST /api/user
Header
Content-Type application/json
Body
{
  "name": "huafeng",
  "nickname": "leien"
}

修改
PUT /api/user/5d8b789279eabc2bdb6eb8df
Header
Content-Type application/json
Body
{
  "name": "huafeng1",
  "nickname": "leien"
}

```



