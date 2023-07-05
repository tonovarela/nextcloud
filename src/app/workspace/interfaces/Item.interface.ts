export interface Item {
    id_item: string;
    tipo: string;
    nombre: string;
    propietario: boolean;
    fecha_registro: Date;
    acceso: Avatar[];    
}

export interface Avatar {
    id: string;
    nombre: string;
    color?: string;
    iniciales?: string
}


export interface StateModal {
    isOpen: boolean;
    file?: Item
}

export interface StateModalUpload {
    isOpen: boolean;
    sendingFiles: boolean;
    files: File[]
}


