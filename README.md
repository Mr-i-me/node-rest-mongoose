<!--
title: Contract_API
description: AWS serverless Rest api using Mongoose ODM and Bluebird for Promises.c
layout: Doc
framework: v1
platform: AWS
language: nodeJS
authorName: 'Lucas Reis Souza'
-->

## Setup

```
npm install
serverless deploy
```

## Usage

*Create*

```bash
curl -XPOST -H "Content-type: application/json" -d '{
"name" : "alfredo",
"email"  : "alfredo@alfredo.com",
"cpf" : "709.256.231-50",
"emprestimo" : "5000",
"renda" : "5",
"birth" : "10/08/1994"
}' 'http://ecyv81stok.execute-api.us-east-1.amazonaws.com/dev/user'
```
```json
{"id": "590b52ff086041000142cedd"}
```

*READ*

```bash
curl -XGET -H "Content-type: application/json" 'https://2c8cx5whk0.execute-api.us-east-1.amazonaws.com/dev/user/590b52ff086041000142cedd'
```
```json
[
  {
    "_id": "5905e2fbdb55f20001334b3e",
    "name": "John",
  }
]
```

endpoints:
-  POST - https://ecyv81stok.execute-api.us-east-1.amazonaws.com/dev/user
- PUT - https://ecyv81stok.execute-api.us-east-1.amazonaws.com/dev/user/{id}
-  DELETE - https://ecyv81stok.execute-api.us-east-1.amazonaws.com/dev/user/{id}
-  GET - https://ecyv81stok.execute-api.us-east-1.amazonaws.com/dev/user/{id}
-  POST - https://ecyv81stok.execute-api.us-east-1.amazonaws.com/dev/user/{id}/photo
-  PUT - https://ecyv81stok.execute-api.us-east-1.amazonaws.com/dev/user/{id}/photo/{_id}
-  GET - https://ecyv81stok.execute-api.us-east-1.amazonaws.com/dev/user/{id}/photo/{_id}
-  POST - https://ecyv81stok.execute-api.us-east-1.amazonaws.com/dev/user/{id}/approval
-  PUT - https://ecyv81stok.execute-api.us-east-1.amazonaws.com/dev/user/{id}/approval/{_id}
-  GET - https://ecyv81stok.execute-api.us-east-1.amazonaws.com/dev/user/{id}/approval/{_id}
