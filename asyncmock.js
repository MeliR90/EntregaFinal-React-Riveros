const misProductos = [
    {id:"1", nombre: "Mate", precio: 1000, img:"../img/mate.jpg", idCat: "1"},
    {id:"2", nombre: "Termo", precio: 1500, img:"../img/termo.jpg", idCat: "2"},
    {id:"3", nombre: "Botella", precio: 1300, img:"../img/botella.jpg", idCat: "3"},
    {id:"4", nombre: "Vasos", precio: 1200, img:"../img/vaso.jpg", idCat: "4"},
]


export const getProductos = () => {

    return new Promise(resolve => {
        setTimeout(() => {
        
            resolve(misProductos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout ( () => {
            const producto  = misProductos.find(prod => prod.id === id);
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve =>{
        setTimeout( () =>{
            const productosCategoria = misProductos.filter(prod =>prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}