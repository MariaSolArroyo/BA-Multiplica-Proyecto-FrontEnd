setInterval(function () {document.querySelector(".inicio-imagen").classList.toggle("movimiento")},10000);

setInterval(function () {document.querySelector(".inicio-textos-h6").classList.toggle("movimiento")},2000);

function infoCurso(n){

    if (n == 1){
        let curso = document.getElementById("info-card-title1");
        let detalle = document.getElementById("info-detalle1");
        let precio = document.getElementById("info-precio1");
alert("INFO:"+ "\n" + "- "  + curso.innerHTML + "\n" + "Detalle: " + "\n" + detalle.innerHTML + "\n" +"Precio: " + "\n" + precio.innerHTML + "\n");
    }else  if (n == 2){
        let curso = document.getElementById("info-card-title2");
        let detalle = document.getElementById("info-detalle2");
        let precio = document.getElementById("info-precio2");
    alert("CURSO: " + "\n" + curso.innerHTML + "\n" + "Detalle: " + "\n" + detalle.innerHTML + "\n" +"Precio: " + "\n" +precio.innerHTML + "\n");
    } else  if (n == 3){
        let curso = document.getElementById("info-card-title3");
        let detalle = document.getElementById("info-detalle3");
        let precio = document.getElementById("info-precio3");
    alert("CURSO: " + "\n" + curso.innerHTML + "\n" + "Detalle: "+ "\n" +detalle.innerHTML + "\n" +"Precio: " + "\n" + precio.innerHTML + "\n");
    } else  if (n == 4){
        let curso = document.getElementById("info-card-title4");
        let detalle = document.getElementById("info-detalle4");
        let precio = document.getElementById("info-precio4");
    alert("CURSO: " + "\n" + curso.innerHTML + "\n" + "Detalle: " + "\n" +detalle.innerHTML + "\n" +"Precio: " + "\n" + precio.innerHTML + "\n");
    } else  if (n == 5){
        let curso = document.getElementById("info-card-title5");
        let detalle = document.getElementById("info-detalle5");
        let precio = document.getElementById("info-precio5");
    alert("CURSO: "+ "\n" + curso.innerHTML + "\n" + "Detalle: " + "\n" + detalle.innerHTML + "\n" +"Precio: " + "\n" +precio.innerHTML + "\n");
    } else {
        let curso = document.getElementById("info-card-title6");
        let detalle = document.getElementById("info-detalle6");
        let precio = document.getElementById("info-precio6");
    alert("CURSO: " + "\n" + curso.innerHTML + "\n" + "Detalle: " + "\n" + detalle.innerHTML + "\n" +"Precio: " + "\n" + precio.innerHTML + "\n");
    }
    

}