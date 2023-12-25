class heroi{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        if(tipo === "mago"){
            this.ataque = "magia";
        }
        else if (tipo === "guerreiro"){
            this.ataque = "espada";
        }
        else if(tipo === "monge"){
            this.ataque = "artes marciais";
        }
        else if(tipo === "ninja"){
            this.ataque = "shuriken";
        }
        else{
            this.ataque = "as mãos";
        }
    } 
    atacar(tipo){
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let jogador1 = new heroi("Marcos",33,"ninja");
let jogador2 = new heroi("Felipe",34,"monge");
let jogador3 = new heroi("Pedro",24,"camponês");
jogador1.atacar();
jogador2.atacar();
jogador3.atacar();
