
export class Producto{
    nombre:string;
    descripcion:string;
    clasificacion:string;
    precio:number;

    constructor(nombre:string, descripcion:string, clasificacion:string, precio:number){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.clasificacion = clasificacion;
    this.precio = precio;
    }
}

