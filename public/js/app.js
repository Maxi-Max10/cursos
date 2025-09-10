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
    // Imagen de ejemplo si no hay imagen
    const imgSrc = curso.imagen || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80';
    card.innerHTML = `
      <img src="${imgSrc}" alt="${curso.nombre}">
      <div class="curso-card-content">
        <h3>${curso.nombre}</h3>
        <p>${curso.descripcion || ''}</p>
      </div>
    `;
    contenedor.appendChild(card);
  });
}
