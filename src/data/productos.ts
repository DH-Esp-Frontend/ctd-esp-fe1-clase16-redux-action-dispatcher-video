export type Producto = {
    id: number;
    nombre: string;
    imagen: string;
}

export const productosData:Producto[] = [
    {
        id: 1,
        nombre: 'Queso',
        imagen: '/imagenes/product_1.png'
    },
    {
        id: 2,
        nombre: 'Manzana',
        imagen: '/imagenes/product_2.png'
    },
    {
        id: 3,
        nombre: 'Banana',
        imagen: '/imagenes/product_3.png'
    },
    {
        id: 4,
        nombre: 'Limon',
        imagen: '/imagenes/product_4.png'
    },
    {
        id: 5,
        nombre: 'Naranja',
        imagen: '/imagenes/product_5.png'
    },
    {
        id: 6,
        nombre: 'Cereza',
        imagen: '/imagenes/product_6.png'
    }
]