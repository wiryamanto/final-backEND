require('dotenv').config({});
const express = require ('express');
const cors= require('cors')
const app = express();

app.use(cors())
const port = process.env.PORT || 3000;
const mainRoutes = require('./src/routes');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',mainRoutes);

app.listen(port, ()=> {
    console.log("server running");
})