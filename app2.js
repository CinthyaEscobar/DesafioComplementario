let menu = [{ id: 1, nombre: 'Hamburguesa', valor: 1500 },
{ id: 2, nombre: 'Pizza', valor: 2500 },
{ id: 3, nombre: 'Papas Fritas', valor: 1000 }]

let nombre = ''
do {
    nombre = prompt("Hola, bienvenido a la tienda pizza pizza,por favor, debe ingresar su nombre para continuar con la compra")
}
while (nombre == '' || nombre == null)

function funcionPrincipal(){
    saludar();
    desplegarMenu()
    pagarProducto()
}
funcionPrincipal()


function saludar() {
    alert(`¡ Bienvenido ${nombre} !`);
}

function desplegarMenu() {
    let producto = Number(prompt('Elija pedido que desee llevar: \n 1: Hamburguesa \n 2:Pizza \n 3:Papas Fritas \n 4: SALIR'))
    let pro = menu.find(m => m.id === producto);
    while (producto !== 4) {
        if (producto === 1) {
            alert(`Has seleccionado:  ${pro.nombre}`)
            pagarProducto(producto)
            break;
        } else if (producto === 2) {
            alert(`Has seleccionado:  ${pro.nombre}`)
            pagarProducto(producto)
            break;
        }
        else if (producto === 3) {
            alert(`Has seleccionado:  ${pro.nombre}`)
            pagarProducto(producto)
            break;
        }
        else if (producto === 4) {
            alert('Esperamos que vuelva a visitarnos')
            break;
        } else {
            producto = prompt('Elija pedido que desee llevar: \n 1: Hamburguesa \n 2:Pizza \n 3:Papas Fritas \n 4: SALIR')
        }
    }
}

let valor = ''
function pagarProducto(id) {
    let r = menu.find(m => m.id === id);
    alert(`Llevas ${r.nombre} Con un valor de: ${r.valor}`);
    let comprar = Number(prompt(`Como desea pagar? \n 1: Débito \n 2: Efectivo \n 3: Volver a seleccionar producto \n 4: Cancelar compra y salir.`))
    switch (comprar) {
        case 1:
            alert('Su pago con tarjeta ha sido aceptado. Gracias por su compra')
            break
        case 2:
            alert('Su pago con dinero en efectivo sido aceptado.\n  Gracias por su compra')
            break
        case 3:
            desplegarMenu()
            break
        case 4:
            alert('Se ha cancelado su compra')
            break
        default:
            alert('opcion no válida')
    }
}




