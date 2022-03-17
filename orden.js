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
        return `Monitor: [idMonitor: ${this.idMonitor}, marca: ${this.marca}, tamano: ${this.tamano}]`;
    }
    
}

class Computador {
    static contadorComputador = 0;
    
    constructor(nombre,monitor,teclado,raton){

        this._idComputador = ++ Computador.contadorComputador;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputador(){
        return this._idComputador;
    }
    get nombre(){
        return this._nombre;
    }
    get monitor(){
        return this._monitor;
    }
    get teclado(){
        return this._teclado;
    }
    get raton(){
        return this._raton;
    }
    
    toString(){
        return `Computador: [idComputador: ${this.idComputador}, nombre: ${this.nombre}, ${this.monitor}, ${this.teclado}, ${this.raton}`;
    }
    
}

class Orden {
    static contadorOrden = 0;
    
    constructor(computadora){

        this._idOrden = ++ Orden.contadorOrden;
        this._computadora = computadora;
        this._compus = []
    }
    
    agregarComputadora(computadora){
        this._compus.push(computadora);
    }
    
    mostrarOrden(computadora){
        let ord;
        for (let index in this._compus) {
            ord += this._compus[index].toString()
        }
        return console.log(ord);
    }

    get idOrden(){
        return this._idOrden;
    }
    get computadora(){
        return this._computadora;
    }
    
}

let raton1 = new Raton('wireless','genius');
console.log(raton1.toString());


let teclado1 = new Teclado('membrana','logitech');
console.log(teclado1.toString());


let monitor1 = new Monitor('asus','27"');
console.log(monitor1.toString());

let computador1 = new Computador('PC',raton1,teclado1,monitor1);
let computador2 = new Computador('PC2',raton1,teclado1,monitor1);
console.log(computador1.toString());

let orden = new Orden(computador1)
orden.agregarComputadora(computador2);
orden.mostrarOrden(orden);
console.log(orden);