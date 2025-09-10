const express = require('express');
const cursosRouter = require('./routes/cursos');

const app = express();
app.use(express.json());

app.use('/api/cursos', cursosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
