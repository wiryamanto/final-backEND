const mainRoutes = require('express').Router();
const filmRoutes = require ('./filmRoutes');

mainRoutes.use('/api/film',filmRoutes);

module.exports=mainRoutes;