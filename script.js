const nombre = "Gonzalo";
const apellido = "Corradi";
let edad = 23;
let cursos = ["Desarrollo Web", "BackEnd I", "Python"];

// Función con alert
function saludar() {
    alert(`¡Hola ${nombre} ${apellido}, bienvenido a mi página!`);
}

// Función con interacción (cambia el color del fondo)
function cambiarColor() {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random()*16777215).toString(16); 
}

// Función que pide datos con prompt y confirm
function registrarCurso() {
    let nuevoCurso = prompt("Ingresa el nombre de un curso que quieras agregar:");
    if (nuevoCurso) {
        cursos.push(nuevoCurso);
        alert(`Curso "${nuevoCurso}" agregado correctamente.`);
    }

    // Confirmar si quiere ver todos los cursos
    let mostrar = confirm("¿Querés ver la lista de cursos?");
    if (mostrar) {
        console.log("Lista de cursos:");
        for (let i = 0; i < cursos.length; i++) {
            console.log(`${i + 1}. ${cursos[i]}`);
        }
        alert("Revisá la consola para ver todos los cursos");
    }
}

// Función que usa un condicional
function verificarEdad() {
    if (edad >= 18) {
        alert("Sos mayor de edad.");
    } else {
        alert("Sos menor de edad.");
    }
}


