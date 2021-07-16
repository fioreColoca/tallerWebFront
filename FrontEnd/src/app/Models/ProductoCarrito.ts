import { Producto } from "./Producto";

export class ProductoCarrito{
    name:string;
    price:number;
    id:number;
    img:string;
    cantidad:number;
    
    constructor(producto:Producto,cantidad:number){
    this.name = producto.name;
    this.price = producto.price;
    this.id = producto.id;
    this.img=producto.img;
    this.cantidad=cantidad;
    }
}

