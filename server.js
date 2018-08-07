//import config from './config';
//import apiRouter from './api';

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


let app = express();

//Load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use('/static', express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use('/api',apiRouter);

app.use(cors());

app.get('/',(req,res)=>{

  res.render('index',{
    content:'Hello World! <emp> EJS </emp>'
  });
  
});

app.listen(8080,()=>{
  console.info('Express listening on port',8080);
});
