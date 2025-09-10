// Controlador de cursos
const cursos = [];

exports.getCursos = (req, res) => {
  res.json(cursos);
};

exports.createCurso = (req, res) => {
  const curso = req.body;
  cursos.push(curso);
  res.status(201).json(curso);
};
