const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

router.get('/', cursosController.getCursos);
router.post('/', cursosController.createCurso);

module.exports = router;
