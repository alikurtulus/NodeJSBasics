const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorsController = require('./controllers/errors')

app.set('view engine','pug');
app.set('views','views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(errorsController.get404)

// const server = http.createServer(app)
// server.listen(3000);
app.listen(3000)