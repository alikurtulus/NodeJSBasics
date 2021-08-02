// const http = require('http');
// const {handler} = require('./routes/routes')
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'./','views','404.html'));
})

// const server = http.createServer(app)
// server.listen(3000);
app.listen(3000)