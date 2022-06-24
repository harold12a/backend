class Usuario {

    constructor(nombre, apellido, libros, mascotas) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

    }

    getFullName() {
        return `nombre: ${this.nombre} apellido: ${this.apellido}`
    }
    addMascotas(nameMascota) {
        this.mascotas.push(nameMascota)
    }
    countMascotas() {
        return this.mascotas.length
    }
    addBook(titulo, autor) {
        this.libros.push({ nombre: titulo, autor: autor })
    }
    getBookNames() {
        return this.libros.map(libro => `libro: ${libro.nombre} Escrito Por: ${libro.autor}`);
    }
}



const libros = [
    {
        nombre: "Seguridad en aplicacion web java",
        autor: " Jose Manuel Ortega Candel"

    },
    {
        nombre: "Rich dad and Poor Dad",
        autor: "Robert T. Kiosaki"
    }
]



const res = new Usuario("Harold", "Alzate", libros, ["aguila", "caballo"])

console.log(res.getFullName());

console.log(res.getBookNames());

console.log(res.countMascotas());



