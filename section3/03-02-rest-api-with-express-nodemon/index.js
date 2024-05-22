// const express = require('express') // 옛날방식 => commonjs
import express from 'express'  // 요즘 방식 => module

const app = express()

app.get('/qqq', function (req, res){
    res.send('Hello world')             // 미들웨어 함수
})

app.listen(3000)