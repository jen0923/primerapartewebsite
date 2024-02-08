function cambiarImagen(elemento){
    elemento.style.backgroundImage = "url(./css/img/succulents-2.jpg)";
}
function regresarImagen(elemento){
    elemento.style.backgroundImage = "url(./css/img/succulents-1.jpg)";
}
function destino(elemento){
    if(elemento.id=="carrito"){
        alert("Your car is empty");}
    }

    function removePopUp(){
        let cookies = document.querySelector('.cookies');
        cookies.remove();
    }