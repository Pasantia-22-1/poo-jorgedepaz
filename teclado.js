class dispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}


class Teclado extends dispositivoEntrada{
    static contadorTeclado = 0;
    
    constructor(tipoEntrada,marca){
        super(tipoEntrada, marca);
        this.idTeclado = ++ Teclado.contadorTeclado
    }
    get _idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this.idTeclado}, Marca:${this.marca}]`;
    }
    
}


let teclado1 = new Teclado('membrana','logitech');
console.log(teclado1.toString());

let teclado2 = new Teclado('mecanico','Hp');
console.log(teclado2.toString());