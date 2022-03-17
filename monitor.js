class dispositivoEntrada{
    constructor(tipoEntrada,marca,tamano){
        this._tipoEntrada = tipoEntrada
        this._marca = marca;
        this._tamano = tamano;
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
    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        this._tamano = tamano;
    }
}


class Monitor extends dispositivoEntrada{
    static contadorMonitor = 0;
    
    constructor(marca,tamano){
       
        super(marca, tamano);
        this.idMonitor = ++ Monitor.contadorMonitor;
        this._marca = marca;
        this._tamano = tamano;
    }
    get _idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Teclado: [idMonitor: ${this.idMonitor}, marca: ${this.marca}, tamano: ${this.tamano}]`;
    }
    
}


let monitor1 = new Monitor('asus','27"');
console.log(monitor1.toString());

let monitor2 = new Monitor('Hp','32"');
console.log(monitor2.toString());