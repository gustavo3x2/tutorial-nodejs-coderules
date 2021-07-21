const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
var publicDir = require('path').join(__dirname,'/public')
app.use(express.static(publicDir));
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));//redirect bootstrap
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));// redirect JS Jquery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));//redirect CSS bootstrap
app.use('/style', express.static(__dirname + '/style/'));//redirect CSS bootstrap


app.set('view engine','ejs')
app.get('/', (req, res) =>{res.render('index')})

app.listen(3000)