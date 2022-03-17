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

class Raton extends dispositivoEntrada{
    static contadorRatones = 0;
    
    constructor(tipoEntrada,marca){
        super(tipoEntrada, marca);
        this.idRaton = ++ Raton.contadorRatones
    }
    get _idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this.idRaton},]`;
    }
    
}



let raton1 = new Raton('wireless','genius');
console.log(raton1.toString());

let raton2 = new Raton('bluethoot','Hp');
console.log(raton2.toString());