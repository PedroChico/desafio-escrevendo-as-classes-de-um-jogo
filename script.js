class heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = " ";
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "um ataque genérico";
      }
      return ataque; 
    }
  }
  
  let heroi1 = new heroi("Aragorn", 30, "monge");
  
  let resultadoAtaque = heroi1.atacar();
  
  console.log(`O ${heroi1.tipo} atacou usando ${resultadoAtaque}`);