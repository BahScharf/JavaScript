let contador = 1;

while (contador <= 10) {
    console.log(`Valor = ${contador}`);
    contador++;
}

console.clear();
let cont = 10;

while (cont >= 0) {
    console.log(`Valor = ${cont}`);
    cont--;
}

console.clear();
let i = 10,
    text = '';
    do {
        text += `O número é ${i}\n`;
        i++;
    } while (i < 9);
    console.log(text);

    console.log();
    for (let i = 0; i < 10; i++) console.log(`Laço For número: ${i}`);

    console.clear();

    for (let i = 10; i > 0; i--) console.log(`Laço For número: ${i}`);

    //Laço de arrays

    const frutas = ['apples', 'oranges', 'pears', 10, true];

    console.clear();
    
    for (let j = 0; j < frutas.length; j++) console.log(`Nome: ${frutas[j]} \n`);

    console.clear();

    const todos = [
        {
            id: 1,
            text: 'Take out trash',
            isCompleted: true,
        },
        {
            id: 2,
            text: 'Meeting with boss',
            isCompleted: true,
        },
        {
            id: 3,
            text: 'Dentist appt',
            isCompleted: false,
        },
    ];

    //For overloop
    for(let t of todos) {
        console.log(t);
        console.log(t.text);
        console.log(t.id);
    }
console.clear();

    const frut = ['apple', 'orange', 'cherry'];
    frut.forEach(minhaFuncao);

    function minhaFuncao(item, index) {
        console.log(`Índice: ${index}`);
        console.log(`Elemento: ${item}`);
    }
    console.clear();
    const frutas01 = ['apple', 'orange', 'cherry'];
    frutas01.forEach((index,item) => {
    console.log(`Índice: ${index}`);
    console.log(`Elemento: ${item}`);
    });

    console.clear();
    const tarefas = [
        {
            id: 1,
            texto: 'Levar o lixo para fora',
            isCompleted: true,
        },
        {
            id:2,
            texto: 'Encontrar com o chefe',
            isCompleted: true,
        },
        {
            id:3,
            texto: 'Consulta no dentista',
            isCompleted: false,
        },
    ];
    tarefas.forEach((teste) => console.log(teste.texto));

    console.clear();

    const numeros = [4,9,16,25];
    const newArray = numeros.map(Math.sqrt);

    console.log('Números:');
    console.log(numeros);
    console.log('Novo array:');
    console.log(newArray);

    //Outro exemplo de map
console.clear();
const mapText = tarefas.map((valor) => {
    return valor.texto;
});
//Imprime o novo array
console.log(mapText); 

console.clear();
const idade = [32,33, 16,40];

let filtroIdade = idade.filter((idade) => {
    return idade >= 18;
});
console.log(filtroIdade);

//Outro exemplo do filter

console.clear();
const filtoCompletas = tarefas.filter((item) => {
    return item.isCompleted === true;
});

console.log(filtoCompletas);

//Método find()

console.clear();
const meuArray = [
    { nome:'apples', quantidade: 2},
    { nome:'bananas', quantidade: 0},
    { nome:'cerejas', quantidade: 5},
];

console.log (
    meuArray.find((fruta) => {
        return fruta.nome === 'cerejas';
    })
);

console.clear();
class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}

// Intanciando objetos à classe 
let meuCarro1 = new Carro('Ford', 2014);
let meuCarro2 = new Carro('Audi', 2019);

//Imprimindo valores

console.log(meuCarro1.nome);
console.log(meuCarro1.ano);

console.log(meuCarro2.nome);
console.log(meuCarro2.ano);

console.clear();

class NovoCarro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    idadeCarro(ano) {
        return ano - this.ano;
    }
}

//Buscando o ano atual automaticamente

let dataHoje = new Date();
let ano = dataHoje.getFullYear();

//console.log(dataHoje);

//Intanciando o objeto à classe

let meuNovoCarro = new NovoCarro('Ford', 2014);

console.log(meuNovoCarro.idadeCarro(ano));

console.clear();

class ClassPessoa {
    constructor(firstName, lastName, dob) {
        this.firstName - firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate objeto
const pessoa1 = new ClassPessoa('John', 'Doe', '1980-04-03');
const pessoa2 = new ClassPessoa('Marry', 'Smith', '1970-06-13');

console.log(pessoa1);

console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthYear());

console.log(pessoa1.getFullName());

//Lexical this em uma fução
console.clear();
//Constructor de função - lexical this
function PessoaFunc(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    };
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}
    //Intanciando os objetos
    const pessoa3 = new PessoaFunc('John', 'Doe', '1980-04-03');
    const pessoa4 = new PessoaFunc('Marry', 'Smith', '1970-06-13');

    console.log(pessoa3);
    console.log(pessoa4.dob.getFullYear());

    console.clear();

    PessoaFunc.prototype.getBirthDayMonth = function () {
        let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
        return dados;
    };

PessoaFunc.prototype.getFirstName = function () {
    return `${this.firstName}`;
};

console.log(pessoa3.getBirthDayMonth());
console.log(pessoa4.getFirstName());