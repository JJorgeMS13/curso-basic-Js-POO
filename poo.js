class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante"
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.like = 0;
    }

    publicar(){
        console.log(this.studentName + "(" + this.studentRole + ")" );
        console.log(this.like + "Likes");
        console.log(this.content);
    }
}

class teacher {
    constructor({
        name,
        lastname,
        age,
        profession,
    }){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.profession = profession;
    }
}
const JuanDC = new teacher({
    name: "JuanDC",
    lastname: "DC",
    age: 28,
    profession: "Ing."
});

// ------------------- Clases de los curso de platzi --------------
function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reprodución desde la urlSecreta: "+ urlSecreta);
}
function videoStop() {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la urlSecreta: "+ urlSecreta);
}

class PlatziClass {
    constructor({
        name,
        videoID
    }){
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID);
    }
    pausa(){
        videoStop();
    }
}

const htmlCss = new PlatziClass({
    name: "Introducción de html y css",
    urlvideos: "",
    teacher: JuanDC
});


// ----------------  Clase de los cursos -------------
class Couser {
    constructor({
        name,
        classes,
        isFree = false,
        lang = "spanish",
        avances =  0 + "%"
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
        this.avances = avances;
    }
    // Encapsulamientos protege los datos de un prototipo
    get name(){
        return this._name;
    }
    // Encapsulamientos
    set name(newName) {
        if (newName === "Curso Malito de Programación Basica") {
            console.error("Web.... no");
        }else {
            this._name = newName;
        }
    }

}
const cursoProgBasica = new Couser({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
});
const desarrolloWeb = new Couser({
    name: "Curso Definitivo de HTML y CSS",
    classes: [
        htmlCss
    ],
    avances : 10 +"%"
});

const cursoPracticoHTML = new Couser({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
});

// --------  Ruta de aprendijaze -------------------- 
class LearningPaths {
    constructor({
        name,
        course = [],
    }){
        this.name = name;
        this.course = course;
    }
}

const escuelaDesarrolloWeb = new LearningPaths(
    {
        name: "Escuela de Desarrollo Web",
        course: [
            desarrolloWeb,
            cursoPracticoHTML
        ]
    }
);
const escuelaProgramadorBasi = new LearningPaths({
    name: "Escuela Basica de Programación",
    course: [
        cursoProgBasica
    ]
});



//  ------------------ Clase del Estudiante -----------
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario(CommentContent){
        const comment = new Comment({
            content: CommentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}
// Herencia con clases en JavaScript.
class FreeStudent extends Student {
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        }else {
            console.warn("Lo sentimos, "+ this.name +" no tienen acceso a este cuerso.");
        }
    }
}
class BasicStudent extends Student  {
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        }else {
            console.warn("Lo sentimos, "+ this.name +" no tienen acceso a este cuerso.");
        }
    }    
}
class ExpertStudent extends Student {
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }     
}
class TeacherStudent extends Student {
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
    // Polimorfismos cambio el metodo que esta en la super clase Student
    publicarComentario(CommentContent){
        const comment = new Comment({
            content: CommentContent,
            studentName: this.name,
            studentRole: "profesor"
        });
        comment.publicar();
    }    
}
const juan = new BasicStudent({
    name: "Juan",
    username: "JuanDC",
    email: "juan@hotmail.com",
    twitter: "juanAD",
    learningPaths: escuelaDesarrolloWeb
});

const jorge = new FreeStudent({
    name: "Jorge",
    username: "JJMS",
    email: "jorge@hotmail.com",
    twitter: "jorge7216",
    learningPaths: escuelaProgramadorBasi
});


const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@hotmail.com",
    twitter: "freddiervega"
});
