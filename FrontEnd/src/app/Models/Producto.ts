
export class Producto{
    name:string;
    description:string;
    category:string;
    price:number;
    id:number;

    constructor(name:string, description:string, category:string, price:number,id:number){
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.id = id;
    }
}

