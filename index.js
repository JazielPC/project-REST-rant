require('dotenv').config()

const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/places', require('./controllers/places'));

app.get('/', function(req, res) {
    res.render('places/index')
});
  

app.get('*', function(req, res){
    res.render('error404')
});
  

app.listen(process.env.PORT, function(){
    console.log('Server is running!')
});