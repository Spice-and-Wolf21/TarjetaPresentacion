const contenedor = new Vue({
    el: '#contenedor',
    data:{
        menu:{
            info: true,
            cajas: false
        }
    },
    methods:{
        menuSeleccionar(item){
            for(let dato in this.menu){
                if(dato===item){
                    this.menu[dato]=true
                } else{
                    this.menu[dato]=false
                }
            }
        }
    },
    beforeUpdate(){
        if(this.menu.cajas){
            console.log("iniciado")
            cajas.iniciar()
        }else{
            console.log("terminado")
            cajas.terminar()
        }
    },
    updated(){
        if(this.menu.cajas){
            cajas.ventana()
        }else{
            cajas.finVentana()
        }
    }
})

const cajas = {
    iniciar(){
        window.addEventListener('keydown', cajas.mover)
    },
    ventana(){
        document.getElementById('seccionCajas').style=`
            position: relative;
            width: ${document.body.clientWidth}px;
            height: ${document.body.clientHeight}px;
            top: -${document.body.clientHeight/2}px;
            z-index: 500;
        `
        document.querySelector('.menu').style=`
            top: -100px;
        `
    },
    finVentana(){
        
    },
    mover(event){
        switch(event.key){
            case 'ArrowUp':
                console.log(`movido`)
            break;
            case 'ArrowDown':
                console.log(`movido`)
            break;
            case 'ArrowLeft':
                console.log(`movido`)
            break;
            case 'ArrowRight':
                console.log(`movido`)
            break;
        }
    },
    terminar(){
        window.removeEventListener('keydown', cajas.mover)
    }
}
