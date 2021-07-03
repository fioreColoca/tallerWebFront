
export class Producto{
    name:string;
    description:string;
    category:string;
    price:number;
    id:number;
    img:string;

    constructor(name:string, description:string, category:string, price:number,id:number,img:string){
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.id = id;
    this.img=img
    }
}

