export interface Item {
    id:string;
    tipo:string;
    nombre:string;
    propietario:boolean;
    fecha_registro:Date;
    acceso:Avatar[];    
}

export interface Avatar {
id:string;
nombre:string;
}


