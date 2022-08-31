
let nombre = ''
do{ 
  nombre= prompt("Hola, bienvenido a la tienda pizza pizza,por favor, debe ingresar su nombre para continuar con la compra")
}
while(nombre=='' || nombre == null)

let hamburguesa = 1500;
let pizza = 2000;
let papasFritas = 1000;

saludar();

function saludar() {

  alert(`¡ Bienvenido ${nombre} !`);

desplegarMenu();

function desplegarMenu(){
  let producto = prompt('Elija pedido que desee llevar: \n 1: Hamburguesa \n 2:Pizza \n 3:Papas Fritas \n 4: SALIR')
  while (producto!==4){
     if(producto==='1'){
      comprarHamburguesa()
      break
    }else if(producto === '2'){
      comprarPizza()
      break
    }else if(producto ==='3'){
      comprarPapasFritas()
      break
    }else if(producto==='4'){
      alert('Esperamos que vuelva a visitarnos!')
      break
    }else{
      producto = prompt('Elija pedido que desee llevar: \n 1: Hamburguesa \n 2:Pizza \n 3:Papas Fritas \n 4: SALIR')
    }
  }
}

 function comprarHamburguesa(){
  alert(`Seleccionaste Hamburguesa.\n Precio:$${hamburguesa}`)
  let comprar = Number(prompt('Como desea pagar? \n 1: Débito \n 2: Efectivo \n 3: Volver a seleccionar producto \n 4: Cancelar compra y salir.'))
  switch(comprar){
    case 1:
      alert('Su pago con tarjeta ha sido aceptado. Gracias por su compra')
      break
    case 2:
      alert('Su pago con dinero en efectivo sido aceptado. Gracias por su compra')
      break
    case 3:
      desplegarMenu()
      break
      case 4:
        alert ('Se ha cancelado su compra')
        break
    default:
      alert('opcion no válida')
  }
}

function comprarPizza(){
  alert(`Seleccionaste Pizza.\n Precio:$${pizza}`)
  let comprar = Number(prompt('Como desea pagar? \n 1: Débito \n 2: Efectivo \n 3: Volver a seleccionar producto \n 4: Cancelar compra y salir.'))
  
  switch(comprar){
    case 1:
      alert('Su pago con tarjeta ha sido aceptado. Gracias por su compra')
      break
    case 2:
      alert('Su pago con dinero en efectivo sido aceptado. Gracias por su compra')
      break
    case 3:
      desplegarMenu()
      break
    case 4:
      alert ('Se ha cancelado su compra')
      break
    default:
      alert('opcion no válida')
  }
}
function comprarPapasFritas(){
  alert(`Seleccionaste Papas fritas.\n Precio:$${papasFritas}`)
  let comprar = Number(prompt('Como desea pagar? \n 1: Débito \n 2: Efectivo \n 3: Volver a seleccionar producto \n 4: Cancelar compra y salir.'))
  switch(comprar){
    case 1:
      alert('Su pago con tarjeta ha sido aceptado. Gracias por su compra')
      break
    case 2:
      alert('Su pago con dinero en efectivo sido aceptado. Gracias por su compra')
      break
      case 3:
        desplegarMenu()
        break
      case 4:
        alert ('Se ha cancelado su compra')
        break
    default:
      alert('opcion no válida')
  }
}
}
