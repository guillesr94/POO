// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos


class Estudiante {
  constructor(nombre,asignatura){
    this.name=nombre
    this.subject=asignatura
  }
  obtenDatos (){
    console.log(`mi nombre es ${this.name} y estudio ${this.subject}`)
  }
}

estudiante1 = new Estudiante("pepe",["matematica","ingles","programacion"])

console.log(estudiante1.obtenDatos())








