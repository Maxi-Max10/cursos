// cursos.js

let cursosData = [];

document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/cursos')
    .then(res => res.json())
    .then(cursos => {
      cursosData = cursos;
      renderCursos(cursosData);
    });

  document.getElementById('busqueda').addEventListener('input', filtrarYCargar);
  document.getElementById('filtroCategoria').addEventListener('change', filtrarYCargar);
});

function filtrarYCargar() {
  const texto = document.getElementById('busqueda').value.toLowerCase();
  const categoria = document.getElementById('filtroCategoria').value;
  let filtrados = cursosData.filter(curso => {
    const coincideTexto = curso.nombre.toLowerCase().includes(texto) || (curso.descripcion && curso.descripcion.toLowerCase().includes(texto));
    const coincideCategoria = !categoria || (curso.categoria && curso.categoria === categoria);
    return coincideTexto && coincideCategoria;
  });
  renderCursos(filtrados);
}

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
