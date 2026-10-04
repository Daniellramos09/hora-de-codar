




const prompt = require('prompt-sync')();

// Classe Principal (normalmente em um arquivo externo)
class BichinhoVirtual {

    constructor(nome) {
        this.nome = nome;
        this.nivelDeFome = 50;
        this.nivelFelicidade = 50;
        this.idade = 5;
        this.cansaco = 50;
    }

    alimentar() {
        this.nivelDeFome -= 10;
        console.log(`${this.nome} foi alimentado. O nível de fome diminuiu.`);
    }

    brincar() {
        this.nivelFelicidade += 10;
        console.log(`${this.nome} está brincando e se sentindo mais feliz.`);
    }

    verificarStatus() {
        console.log(`Status atual de ${this.nome}:`);
        console.log(`Nível de fome: ${this.nivelDeFome}`);
        console.log(`Nível de felicidade: ${this.nivelFelicidade}`);
        console.log(`Nível de cansaço: ${this.cansaco}`);
        console.log(`Nível de idade: ${this.idade}`);
    }

    passarTempo() {
        this.nivelDeFome += 3;
        this.nivelFelicidade -= 3;
        this.cansaco += 10;
        this.idade += 1;


        if (this.nivelDeFome >= 100) {
            console.log(`${this.nome} Você perdeu. A fome do cachorro atingiu 100 pontos.`)
        }
        else {
            console.log(`${this.nome} está ficando mais faminto com o passar do tempo.`);

        }

        if (this.nivelFelicidade <= 0) {
            console.log(`${this.nome} Você perdeu. A felicidade do cachorro atingiu 0 pontos.`)
        } else {
            console.log(` A felicidade do ${this.nome} diminuiu 3 pontos.`)

        }

    }

    Cansaco() {
        this.cansaco += 10;

        if (this.cansaco >= 100) {
            console.log(`${this.nome} Você perdeu. O cansaso do cachorro atingiu 100 pontos.`)
        }
        else {
            console.log(`${this.nome} brincou e ficou mais cansado.`);

        }
    }

    descansar() {
        this.cansaco -= 10;
        console.log(`${this.nome} descansou e recupeou sua energia.`)
    }




}



// Programa Principal
console.log("Bem-vindo ao Simulador de Animal de Estimação Virtual!");
const nomePet = prompt("Digite o nome do seu animal de estimação:") || "Baltazar Guilherme Tenório";
const pet = new BichinhoVirtual(nomePet);

while (true) {
    console.log("\nEscolha uma ação:");
    console.log("1. Alimentar " + nomePet);
    console.log("2. Brincar com " + nomePet);
    console.log("3. Verificar o status de " + nomePet);
    console.log("4. Sair");

    const escolha = parseInt(prompt("Escolha uma opção:"));

    switch (escolha) {
        case 1:
            pet.alimentar();
            break;
        case 2:
            pet.brincar();
            break;
        case 3:
            pet.verificarStatus();
            break;
        case 4:
            console.log("Saindo do Simulador de Animal de Estimação Virtual. Adeus!");
            process.exit();
        default:
            console.log("Escolha inválida. Tente novamente.");
    }

    pet.passarTempo(); // Simula o tempo que passa após cada ação
}
