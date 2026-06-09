//console.log(productos)
//const newProductos = productos.filter(function(item, indice,productos)){
//console.log(ClipboardItem, indice, productos)
//})

//let newArray=  productos.filter(item => item.precio > 4000)
//console.log(newArray)

//EJ2
//let newArray=  productos.filter(item => item.codigo != 129)
//console.log(newArray)

//EJ3
 let newArray = productos.map(function(item){
    return{
        stock:item.stock,
        recomendado:item.recomendado,
        imagen:item.imagen,
        descripcion:item.descripcion,
        codigo:item.codigo,
        nombre:item.nombre,
        precio:item.precio + item.precio * 0.2

    }
})

//ejercicio 4
console.log(productos)
const object = {"codigo": 120,
    "nombre": "Papas surtido",
    "descripcion": "Papas fritas con carne de pollo y salsa a elección",
    "precio": 6800,
    "imagen": "papas-surtido.jpg",
    "recomendado": true,
    "stock": 0
}
productos.push(object)
console.log(productos)

//ejercicio 5
productos.pop()
console.log(productos)


//ejercicio 6
const codigo = 139
let i;
const obj = productos.filter(function(item,indice,producto){
    if(item.codigo==codigo){
        i=indice
        return i

    }
})
console.log(i)
const newObject = productos.splice(i,1)
console.log(newObject)


console.log(productos);

document.querySelector(".form").addEventListener('submit',e=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
})