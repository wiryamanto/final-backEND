const mainRoutes = require('express').Router();
const filmRoutes = require ('./filmRoutes');
const authRoutes = require('./authRoutes');

mainRoutes.use('/auth',authRoutes);
mainRoutes.use('/api/film',filmRoutes);

module.exports=mainRoutes;