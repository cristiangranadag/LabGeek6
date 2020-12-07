'use strict'
document.getElementById('resultado2').style.display="none"
// const dinero = Number(document.getElementById('cantidad').value);
const formulario = document.getElementById('formulario');
const listaMoneda = document.getElementById('moneda');
const listaCambio = document.getElementById('criptomoneda');
const alerta = document.getElementById('principal');

const fragmento = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();

let moneda2
let N;

// var moneda[1] = dolar;
// let pesoMex;
// let pesoCol;
// let euros;
// let bolivar;
// let resDolar;
// let resPesoMex;
// let resPesoCol;
// let resEuros;
// let resBolivar;

//Vector Moneda
var moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euros','Bolivar'];
var cambio = ['Elige Moneda de cambio','Dolar','Peso Mexicano','Peso Colombiano','Euros','Bolivar'];
//Vector Moneda destino

// let dolar = moneda['Dolar'];
// let pesoMex = cambio['Peso Mexicano']
// dinero = parseFloat(document.getElementById('cantidad').value);

function Convertir(){

     document.getElementById('resultado2').style.display="block"

     moneda2 = Leer(listaMoneda, listaCambio);
     Cantidad(N)
     document.getElementById('conversorRes').value = moneda2;
     N = Number(document.getElementById('cantidad').value);
}
function Cantidad(N) {
     while (N < 0 || isNaN(N)) {
          // alert('Error')
          N = Number(document.getElementById('cantidad').value);
     }
}

var Leer = function(listaMoneda, listaCambio) {

     if (listaMoneda=moneda[1]) {

          switch(listaCambio) {
                        
               case cambio[2]:
                    moneda2 = moneda[1]*19.8003;
               break;
          
               case cambio[3]:
                    moneda2 = moneda[1]*3466.38;
               break;
          
               case cambio[4]:
                    moneda2 = moneda[1]*0.824628;
               break;
          
               case cambio[5]:
                    moneda2 = moneda[1]*9987.5;
               break;
          }
     } else
     
     if (listaMoneda=moneda[2]) {
     
          switch(listaCambio) {
                        
               case cambio[1]:
                    moneda2 = moneda[2]*0.0505108;
               break;
          
               case cambio[3]:
                    moneda2 = moneda[2]*175.05;
               break;
          
               case cambio[4]:
                    moneda2 = moneda[2]*0.0416405;
               break;
          
               case cambio[5]:
                    moneda2 = moneda[2]*504.329;
               break;
          }
     } else
     
     if (listaMoneda=moneda[3]) {
     
          switch(listaCambio) {
                        
               case cambio[1]:
                    moneda2 = moneda[3]*0.000288474;
               break;
          
               case cambio[2]:
                    moneda2 = moneda[3]*0.00571318;
               break;
          
               case cambio[4]:
                    moneda2 = moneda[3]*0.000237911;
               break;
          
               case cambio[5]:
                    moneda2 = moneda[3]*2.88143;
               break;
          }
     } else

     if (listaMoneda=moneda[4]) {
     
          switch(listaCambio) {
                        
               case cambio[1]:
                    moneda2 = moneda[4]*1.21295;
               break;
          
               case cambio[2]:
                    moneda2 = moneda[4]*24.0224;
               break;
          
               case cambio[3]:
                    moneda2 = moneda[4]*4203.89;
               break;
          
               case cambio[5]:
                    moneda2 = moneda[4]*12115.23;
               break;
          }
     } else

     if (listaMoneda=moneda[5]) {
     
          switch(listaCambio) {
                        
               case cambio[1]:
                    moneda2 = moneda[5]*0.000100125;
               break;
          
               case cambio[2]:
                    moneda2 = moneda[5]*0.00198248;
               break;
          
               case cambio[3]:
                    moneda2 = moneda[5]*0.34695;
               break;
          
               case cambio[4]:
                    moneda2 = moneda[5]*0.0000825311;
               break;
          }
     } 

     return moneda2;
}

     // case pesoCol:
     //      resDolar=3465.71*pesoCol
     // break;

     // case euros:
     //      resDolar=0.825019*euros
     // break;

     // case bolivar:
     //      resDolar=9987.50*bolivar
     // break;


moneda.forEach((data,index)=>{
     const item = document.createElement('option');
     item.setAttribute('value',index)
     item.textContent = data;
     fragmento.appendChild(item)   
})

cambio.forEach((data,index)=>{
     const item = document.createElement('option');
     item.setAttribute('value',index)
     item.textContent = data;
     fragmento2.appendChild(item)   
})

listaMoneda.appendChild(fragmento);
listaCambio.appendChild(fragmento2);
//Recorrer vector para insertar la informacion de la lista

// function Convertir(){
//      document.getElementById('resultado2').style.display="block"

//      // dinero = parseFloat(document.getElementById('cantidad').value);
//      // Leer(dinero)

//      // resPesoMex = eeuu(dinero);
//      // resPesoMex = Responde(resPesoMex);
     

//      document.getElementById('conversorRes').value = resPesoMex;
// }

// function Calcular(listaMoneda) {
     // switch(listaMoneda) {
                   
     //      case pesoMex:
     //        resDolar=0.0505708*pesoMex
     //      break;
  
     //      case pesoCol:
     //           resDolar=3465.71*pesoCol
     //      break;
  
     //      case euros:
     //           resDolar=0.825019*euros
     //      break;
  
     //      case bolivar:
     //           resDolar=9987.50*bolivar
     //      break;
     //  }
// }
     // resPesoMex = 19.77 * dinero;
     // resPesoCol = 3466.5 * dinero;
     // euros = 0.82 * dinero;
     // bolivar = 1084783 * dinero;

     // resPesoMex = 19.77 * dinero;
     // resPesoCol = 3466.5 * dinero;
     // euros = 0.82 * dinero;
     // bolivar = 1084783 * dinero;

     // resPesoMex = 19.77 * dinero;
     // resPesoCol = 3466.5 * dinero;
     // euros = 0.82 * dinero;
     // bolivar = 1084783 * dinero;

     // resPesoMex = 19.77 * dinero;
     // resPesoCol = 3466.5 * dinero;
     // euros = 0.82 * dinero;
     // bolivar = 1084783 * dinero;

     // return resPesoMex;


// function Responde(resPesoMex) {
//      alert(resPesoMex)
//      return resPesoMex;
// }

formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     // leer la moneda seleccionada
     const monedaSelect = document.getElementById('moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
     


     // leer la criptomoneda seleccionada
     const criptoMonedaSelect = document.getElementById('criptomoneda');
     const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
 
     const divMensaje = document.createElement('div');
     divMensaje.classList.add('text-center', 'alert');

     // comprobar que ambos campos tengan algo seleccionado
     if(monedaSeleccionada == 0 || criptoMonedaSeleccionada == 0) {
          divMensaje.classList.add('alert-danger');
          divMensaje.appendChild(document.createTextNode('Es requisito escoger las monedas'));
          alerta.appendChild(divMensaje)
     } else {
          divMensaje.classList.add('alert-success');
          divMensaje.appendChild(document.createTextNode('Gracias'));
          alerta.appendChild(divMensaje)
     }

     setTimeout(function() {
          document.querySelector('#principal .alert').remove();
          formulario.reset();
     }, 3000);

     // console.log("Moneda selecc "+criptoMonedaSeleccionada)
     // switch (criptoMonedaSeleccionada) {
     //      case "1":
     //           console.log('Dolares')
     //           break;
     //      case "2":
     //           console.log('Peso Mexicano')
     //           break;
     //      case "3":
     //           console.log('Pesos Colombiano')
     //           break;
     //      default:
     //           console.log('opción invalida')
     //           break;     
     // }

})


