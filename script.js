// Contenido de las lecciones
const lecciones = [
    { titulo: "Variables y Tipos de Datos", contenido: "Las variables son contenedores para almacenar datos. Los tipos básicos incluyen números, cadenas y booleanos." },
    { titulo: "Estructuras de Control", contenido: "Las estructuras de control como if-else y bucles permiten controlar el flujo de ejecución del programa." },
    { titulo: "Funciones", contenido: "Las funciones son bloques de código reutilizables que realizan una tarea específica." }
];

// Ejemplos de código
const ejemplos = [
    { titulo: "Uso de Variables", codigo: "let edad = 25;\nlet nombre = 'Juan';\nconsole.log('Hola, ' + nombre + '. Tienes ' + edad + ' años.');" },
    { titulo: "Estructura if-else", codigo: "let hora = 14;\nif (hora < 12) {\n    console.log('Buenos días');\n} else {\n    console.log('Buenas tardes');\n}" },
    { titulo: "Función Simple", codigo: "function saludar(nombre) {\n    return 'Hola, ' + nombre + '!';\n}\nconsole.log(saludar('María'));" }
];

// Preguntas del cuestionario
const preguntas = [
    { pregunta: "¿Qué tipo de dato es '5'?", respuesta: "cadena" },
    { pregunta: "¿Cómo se llama la estructura de control que permite repetir código?", respuesta: "bucle" },
    { pregunta: "¿Cuál es la palabra clave para declarar una función en JavaScript?", respuesta: "function" }
];

let preguntaActual = 0;

// Función para cargar las lecciones
function cargarLecciones() {
    const lista = document.getElementById('leccion-lista');
    lecciones.forEach(leccion => {
        const li = document.createElement('li');
        li.textContent = leccion.titulo;
        li.onclick = () => mostrarContenidoLeccion(leccion);
        lista.appendChild(li);
    });
}

// Función para mostrar el contenido de una lección
function mostrarContenidoLeccion(leccion) {
    const contenido = document.createElement('p');
    contenido.textContent = leccion.contenido;
    const leccionesSection = document.getElementById('lecciones');
    leccionesSection.appendChild(contenido);
}

// Función para cargar ejemplos
function cargarEjemplos() {
    const contenedor = document.getElementById('ejemplo-contenido');
    ejemplos.forEach(ejemplo => {
        const titulo = document.createElement('h3');
        titulo.textContent = ejemplo.titulo;
        const codigo = document.createElement('pre');
        codigo.textContent = ejemplo.codigo;
        contenedor.appendChild(titulo);
        contenedor.appendChild(codigo);
    });
}

// Función para mostrar una pregunta
function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        document.getElementById('pregunta').textContent = preguntas[preguntaActual].pregunta;
        document.getElementById('respuesta').value = '';
        document.getElementById('retroalimentacion').textContent = '';
    } else {
        document.getElementById('pregunta-contenedor').style.display = 'none';
        document.getElementById('retroalimentacion').textContent = '¡Has completado todas las preguntas!';
    }
}

// Función para verificar la respuesta
function verificarRespuesta() {
    const respuestaUsuario = document.getElementById('respuesta').value.toLowerCase();
    const respuestaCorrecta = preguntas[preguntaActual].respuesta.toLowerCase();

    if (respuestaUsuario === respuestaCorrecta) {
        document.getElementById('retroalimentacion').textContent = '¡Correcto!';
        preguntaActual++;
        setTimeout(mostrarPregunta, 1000);
    } else {
        document.getElementById('retroalimentacion').textContent = 'Incorrecto. Intenta de nuevo.';
    }
}

// Inicializar la aplicación
window.onload = function() {
    cargarLecciones();
    cargarEjemplos();
    mostrarPregunta();
};