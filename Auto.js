export default class Auto {
constructor(marca, modelo, color= "Rojo", kilometraje=0){
    this._marca=marca;
    this._modelo=modelo;
    this._color=color;
    this._kilometraje=kilometraje;
    this._estado="Apagado";
}

get color(){ //Get es un metodo de lectura
    return this._color;
}
set color(color){ //Set es un metodo de escritura
    this._color= color.toUpperCase();
}


mostrarEstado(){
    console.log(`El auto ${this._marca}  del año ${this._modelo} tiene un color ${this._color} tiene un kilometraje de ${this._kilometraje}  y se encuentra ${this._estado}` );
}

encender(){
    this._estado = "Encendido"
    this.mostrarEstado()
}
apagar(){
    this._estado = "Apagado"
    this.mostrarEstado()
}

avanazar(velocidad, tiempo){
    if(this._estado === "Apagado"){
        console.log('El auto no avanza porque está apagado')
    }
    else{
        let distancia= velocidad * tiempo;
        this._kilometraje = this._kilometraje + distancia;
       this.mostrarEstado();
      
    }
}

}

