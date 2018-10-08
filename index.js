const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/',express.static('public/main'));
app.get('/contacts',express.static('public/contacts'));
app.get('/about',(req,res) => res.send('hElLO wOrLD!'));

app.listen(port,() => console.log('server works!'));