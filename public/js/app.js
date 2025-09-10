// app.js

document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/cursos')
    .then(res => res.json())
    .then(cursos => renderCursos(cursos));
});

function renderCursos(cursos) {
  const contenedor = document.getElementById('cursos-list');
  contenedor.innerHTML = '';
  if (!cursos.length) {
    contenedor.innerHTML = '<p>No hay cursos disponibles.</p>';
    return;
  }
  cursos.forEach(curso => {
    const card = document.createElement('div');
    card.className = 'curso-card';
    card.innerHTML = `
      <h3>${curso.nombre}</h3>
      <p>${curso.descripcion || ''}</p>
    `;
    contenedor.appendChild(card);
  });
}
