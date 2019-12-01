const iniciar = {
  iniciar(){
    boton.addEventListener("click", boton.presionar)
  }

}

const boton = {
  presionar(){
    console.log("1")
  }
}

window.addEventListener("load", iniciar.iniciar)
