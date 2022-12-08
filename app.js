let total1=0;
let total2=0;
let total3=0;
let total4=0;
let ingreso=prompt("Ingresa 1 para entarar al menu \nIngresa cualquier caracter para salir ")
if (ingreso=1){
     let menu= prompt("Hola buenos dias \n 01 Pollo frito: $3000 \n 02 Hamburguesa completa: $3200 \n 03 Hamburguesa de pollo:$2500 \n 04 Pizza: $1800 \n 999 Mostar total \n 000 Finalizar pedido")
     while (menu != 000){
          
          switch (menu) {
               case "01":
                    let cantidad1 = parseInt(prompt("Cuanta cantidad desea?"));
                    total1=3000*cantidad1;
                    break;
               case "02":
                    let cantidad2 = parseInt(prompt("Cuanta cantidad desea?"));
                    total2=3200*cantidad2;
                    break;
               case "03":
                    let cantidad3 = parseInt(prompt("Cuanta cantidad desea?"));
                    total3=2500*cantidad3;
                    break;
               case "04":
                    let cantidad4 = parseInt(prompt("Cuanta cantidad desea?"));
                    total4=1800*cantidad4;
                    break;
               case "999":
                    let totalFinal= total1+ total2 + total3 + total4;
                    alert(totalFinal);
                    break;
          
               default:
                    break;
          }
          
          menu= prompt("Hola buenos dias \n 01 Pollo frito: $3000 \n 02 Hamburguesa completa: $3200 \n 03 Hamburguesa de pollo:$2500 \n 04 Pizza: $1800 \n 999 Mostar total \n 000 Finalizar pedido");
     }

}
