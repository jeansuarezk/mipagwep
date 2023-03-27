class jean{
    ejercicio_1(){
let nombre = document.getElementById("nombre").value
let edad = document.getElementById("edad").value
let diseño = document.getElementById("iva").checked
let $res = document.getElementById("res")
let valor=2.50
if(edad<=10){
    if(diseño){
        $res.textContent= (`hola ${nombre} el precio para niños mas diseño ${valor} es de $ 5.00  `)  

    } else{
        $res.textContent= (`hola ${nombre} el precio de tu corte para niños es de $2.50 dolares  `)  
    } 
}
if(edad>10){
    if(diseño){
        $res.textContent= (`hola ${nombre} el precio es de $3.50  mas diseño ${valor} es de $ 6.00  `)  
    } else{
        $res.textContent= (`hola ${nombre} el costo es de $3.50 dolares  `)  
    } 
}
}
}

let clas=new jean()
clas.ejercicio_1()