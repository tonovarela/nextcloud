import { Avatar, Item } from "../workspace/interfaces/Item.interface";



export const agregarPropiedades = (items: Item[]):Item[] => {
    return items.map(a => {
        const backgroundColors: string[] = ['bg-success', 'bg-purple', 'bg-warning', 'bg-pink', 'bg-dark', 'bg-orange'];
        const acceso = a.acceso.map(b => {
            const index = Math.floor(Math.random() * backgroundColors.length);
            const iniciales=b.nombre.substring(0,2).toUpperCase();
            const color = backgroundColors[index - 1];
            backgroundColors.splice(index - 1, 1);
            b.color = color;
            return { ...b, color,iniciales };
        });
        return { ...a, acceso };
    });


}