const filmRoutes = require('express').Router();
const filmController = require('../controllers/filmController');
const filmControllers= require('../controllers/filmController');

filmRoutes.get('/',filmControllers.getAllFilm);
filmRoutes.post('/',filmControllers.createNewFilm);
filmRoutes.get('/:id',filmControllers.getFilmbyId);
filmRoutes.delete('/:id',filmControllers.deleteFilmbyId);
filmRoutes.put('/:id',filmController.updatefilm)

module.exports= filmRoutes;