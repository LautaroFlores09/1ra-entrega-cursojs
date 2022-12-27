function Menu(id,nombre,precio){
     this.id=id,
     this.nombre=nombre,
     this.precio=precio
}

const menuArr=[["Pollo frito", 3000],["Hamburguesa completa",3200],["HAmburguesa de pollo",2500],["Pizza",1800]]
const menuObj=[]

for (let i = 0; i < menuArr.length; i++) {
     let productoActual=new Menu(i,menuArr[i][0],menuArr[i][1])
     menuObj.push(productoActual)
}
function stringMenu(){
     let bd="Hola buenos dias \n"
     let mostrarTotal="999 Mostrar Total \n"
     let finalizarPedido="111 Finalizar pedido"
     let menuStr=""
     for (let i = 0; i < menuObj.length; i++) {
          menuStr=menuStr +"0"+ i +" "+ menuObj[i].nombre +" $"+menuObj[i].precio + "\n"
     }
     return bd + menuStr + mostrarTotal + finalizarPedido  
}

let menuPrompt=stringMenu()

let total1=0;
let total2=0;
let total3=0;
let total4=0;
let ingreso=prompt("Ingresa 1 para entrar al menu \nIngresa cualquier caracter para salir ")
if (ingreso=1){
     let menu= prompt(menuPrompt)
     while (menu != 111){
          
          switch (menu) {
               case "00":
                    let cantidad1 = parseInt(prompt("Cuanta cantidad desea?"));
                    total1=menuObj[0].precio*cantidad1;
                    break;
               case "01":
                    let cantidad2 = parseInt(prompt("Cuanta cantidad desea?"));
                    total2=menuObj[1].precio*cantidad2;
                    break;
               case "02":
                    let cantidad3 = parseInt(prompt("Cuanta cantidad desea?"));
                    total3=menuObj[2].precio*cantidad3;
                    break;
               case "03":
                    let cantidad4 = parseInt(prompt("Cuanta cantidad desea?"));
                    total4=menuObj[3].precio*cantidad4;
                    break;
               case "999":
                    let totalFinal= total1+ total2 + total3 + total4;
                    alert(totalFinal);
                    break;
          
               default:
                    break;
          }
          
          menu= prompt(menuPrompt)
     }

}



