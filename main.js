const natalia = {
    name: "Natalia",
    age: 20,
    cursoAprobados: [
        "Curso Definitivo de HTML y  CSS",
        "Curso Práctico de HTML y  CSS"
    ],
    aprobarCurso (newCurso){
        this.cursoAprobados.push(newCurso);
    }
};
// Creación de prototipo, es decir creacion de nuestro molde
function bnbvnmx(name, age, cursoAprobados){
    this.name = name;
    this.age = age;
    this.cursoAprobados = cursoAprobados;
}

bnbvnmx.prototype.aprobarCurso = function (newCurso){
    this.cursoAprobados.push(newCurso);
}

const juanita = new bnbvnmx(
    "Juanita",
     25,
    ["Curso indorcuccion a los videGames",
    "Curso Práctico de HTML y  CSS"]);

// Prototipos con la sintaxis de clases

class Student2 {
    constructor({name, age, cursoAprobados = [], email}) {
        this.name = name;
        this.age = age;
        this.cursoAprobados = cursoAprobados;
    }

    aprobarCurso(newCurso){
        this.cursoAprobados.push(newCurso);
    }
}

const Jorge = new Student2({
    name: "Jorge",
    age: 28,
    email: "jorge01@hotmail.com"
});
