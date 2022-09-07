var btnencriptar=document.querySelector(".btn-encriptar");
var btndesencriptar=document.querySelector(".btn-desencriptar");
var btncopiar=document.querySelector(".btn-copiar");
var persona=document.querySelector(".cont-persona");
var h3=document.querySelector(".cont-h3");
var p=document.querySelector(".cont-parrafo");
const texto=document.querySelector(".texto");
const resultado=document.querySelector(".text-result")
btnencriptar.onclick=mostrarEncriptar;
btndesencriptar.onclick=mostrarDesencriptar;
btncopiar.onclick=copiar;
function ocultar(){
    persona.classList.add("hide");
    h3.classList.add("hide");
    p.classList.add("hide");
}
function encriptar(mensaje){
    let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    mensaje=mensaje.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++) {
        if(mensaje.includes(matrizCodigo[i][0])) {
            mensaje=mensaje.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return mensaje;
}
function desencriptar(mensaje){
    let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    mensaje=mensaje.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++) {
        if(mensaje.includes(matrizCodigo[i][0])) {
            mensaje=mensaje.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }                
    }
    return mensaje;
}
function mostrarEncriptar(){
    ocultar();
    resultado.value=encriptar(texto.value);
    texto.value="";
}
function mostrarDesencriptar(){
    ocultar();
    resultado.value=desencriptar(texto.value);
    texto.value="";
}
function copiar(){
    resultado.select();
    navigator.clipboard.writeText(resultado.value);
    resultado.value="";
    alert("Texto Copiado");
}