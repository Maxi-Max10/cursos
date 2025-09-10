// Controlador de cursos
const cursos = [
  {
    nombre: 'JavaScript Moderno',
    descripcion: 'Aprende JavaScript desde cero hasta avanzado, incluyendo ES6+ y proyectos reales.',
    categoria: 'programacion',
    precio: 'Gratis',
    imagen: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80'
  },
  {
    nombre: 'Redes y Seguridad',
    descripcion: 'Domina los fundamentos de redes, protocolos y ciberseguridad para proteger sistemas.',
    categoria: 'redes',
    precio: 'Gratis',
    imagen: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80'
  },
  {
    nombre: 'Introducción a la Inteligencia Artificial',
    descripcion: 'Descubre los conceptos clave de la IA y crea tus primeros modelos inteligentes.',
    categoria: 'ia',
    precio: 'Gratis',
    imagen: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    nombre: 'Python para Principiantes',
    descripcion: 'Curso práctico para aprender Python desde cero con ejercicios y mini-proyectos.',
    categoria: 'programacion',
    precio: 'Gratis',
    imagen: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80'
  },
  {
    nombre: 'Ciberseguridad Básica',
    descripcion: 'Aprende a proteger tus datos y dispositivos de amenazas comunes en internet.',
    categoria: 'seguridad',
    precio: 'Gratis',
    imagen: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
  },
  {
    nombre: 'Desarrollo Web Full Stack',
    descripcion: 'Construye aplicaciones web completas con HTML, CSS, JavaScript, Node y bases de datos.',
    categoria: 'programacion',
    precio: 'Gratis',
    imagen: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'
  },
  {
    nombre: 'Redes Inalámbricas',
    descripcion: 'Configura y optimiza redes WiFi para hogares y empresas.',
    categoria: 'redes',
    precio: 'Gratis',
    imagen: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
  },
  {
    nombre: 'Machine Learning con Python',
    descripcion: 'Implementa algoritmos de aprendizaje automático y analiza datos reales.',
    categoria: 'ia',
    precio: 'Gratis',
    imagen: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80'
  }
];

exports.getCursos = (req, res) => {
  res.json(cursos);
};

exports.createCurso = (req, res) => {
  const curso = req.body;
  cursos.push(curso);
  res.status(201).json(curso);
};
