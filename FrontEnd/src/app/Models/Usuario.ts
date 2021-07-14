export class Usuario{
    email:string;
    password:string;
    name:string;
    family_name:string;
    address:string;

    constructor(email:string,password:string,name:string,family_name:string,address:string){
        this.email=email;
        this.password=password;
        this.name=name;
        this.family_name=family_name;
        this.address=address;
    }
}