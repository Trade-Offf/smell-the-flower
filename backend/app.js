//导入express
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// 导入路由模块
const stuRouter = require(path.join(__dirname, 'routes', 'student.js'))
// const stuRouter2 = require(path.join(__dirname, 'routes', 'student2.js'))
app.use('/student', stuRouter)
// app.use('/student2', stuRouter2)


app.use(express.static('resource'))
app.listen(3000, () => {
    console.log('Express app at: http://localhost:3000')
})