const num1 = Array(30, -1, 5, 3, 121);
const num2 = [-2, 40, 16, 111, 33, 64];

console.log(num1);
console.log(num2);

console.log(`primeiro elemento de num1: ${num1[0]}`);
console.log(`primeiro elemento de num2: ${num2[0]}`);

console.log(`terceiro elemento de num1: ${num1[2]}`);
console.log(`quinto elemento de num2: ${num2[5]}`);

const matrix = [
    ['Banana','Maçã','Pêra'],
    ['Lanranja', true, 1]
    [null, 'Uva', -350],
];  
console.log(`Acessar a primeira linha: ${matrix[0]}`);
console.log(`Acessar o segundo elemento: ${matrix[0][1]}`);

console.clear();

let moedas = ['Real', 'Dolar','Coroa','Peso'];

console.log(`Antes: ${moedas}`);
moedas[2] = 'Yen';
console.log(`Depois: ${moedas}`);

let matrix1 = [
    [1,2,3],
    [4,5,6],
];
console.log('Antes:');
console.log(matrix1);

matrix1[0][2] = -10;
console.log('Depois:');
console.log(matrix1);

console.clear();

let numArray = [1,2,3,4];
console.log(typeof numArray);

let numArray2 = numArray.toString()
console.log(typeof numArray2);

console.clear();
let teste1 = [0, 1, 2, 3, 4, 5];
let teste2 = teste1.join(' *** ');
console.log(teste2);
console.log(typeof teste2);

console.clear();
let array = [0,1,2,3,4];
console.log(array.length);

console.clear();
const frutas1 = ['Banana', 'Laranja', 'Maçã','Manga'];
let x = frutas1.pop();

console.log(frutas1);
console.log(x);

console.clear();
const frutas2 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let y = frutas2.push('Kiwi');

console.log(frutas2);
console.log(y);

console.clear();
const frutas3 = ['Banana', 'Laranja'];
let z = frutas3.shift();
console.log(frutas3);
console.log(z);

console.clear();
const frutas4 = ['Banana', 'Laranja'];
let w = frutas4.unshift('Kiwi');

console.log(frutas4);
console.log(w);

console.clear();
const frutas5 = ['Banana','Laranja','Maçã','Manga'];
delete frutas5[2];

console.log(frutas5);

let valor01 = 100;
const valor02 = 5;
console.log('A multiplicação de ' +valor01+' por  ' + valor02 + ' é ' + valor01 * valor02);
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`);

console.clear();
const string01 = 'Instituto da Oportunidade Social';

console.log(string01.charAt(0));
console.log(string01[0]);

console.log(string01.charAt(10));
console.log(string01[10]);

console.clear();
let texto = 'abcdefghijklmnopqrstuvwxyz';

console.log(texto.length);

console.clear();
const texto2 = 'Também 123 [] é uma strings 231 -1\n';
console.log(texto2.length);

console.clear();
const s = 'Hello World!';

console.log(s.toUpperCase());
console.log(s.toLowerCase());

const str = 'Mozilla';

console.log(str.substring(1,3));

console.log(str.substring(2));

const str1 = 'A raposa é um animal esperto';

const palavras = str1.split(' ');
console.log(palavras[3]);

const chars = str1.split(' ');
console.log(chars[7]);

const strCopy = str1.split();
console.log(strCopy);


console.clear();
let text = '    Olá Alunos do IOS!      ';
console.log(text.trim());

console.clear();
let frase = 'Sou um aluno do IOS e o IOS é muito bom!';
console.log(frase.indexOf('IOS'));
console.log(frase.lastIndexOf('IOS'));

console.log(frase.search('IOS'));

console.log(frase.startsWith('S'));
console.log(frase.startsWith('Sou'));
console.log(frase.startsWith('a'));

console.log(frase.endsWith('!'));
console.log(frase.endsWith('bom!'));
console.log(frase.endsWith('x'));

console.clear();
let pessoa = {
    firtsName: 'Irmão do',
    lasName: 'Jorel',
    idade:10,
    corDosOlhos:'preto',
    hobbies:['música', 'filme', 'esportes'],
    endereco: {
        rua: 'Rua dos bobos',
        numero:0,
        cidade: 'São Paulo',
        estado: 'SP',
    },
};

console.log(pessoa);
console.log(pessoa.firtsName);
console.log(pessoa.lasName, pessoa.idade);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereco.cidade);

console.clear()

const {
    firtsName,
    lasName,
    endereco: { cidade },
} = pessoa;
console.log(`${firtsName} ${lasName} é de ${cidade}`);

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

console.log(tarefas);
console.log(tarefas[1].texto);
console.log(tarefas[2].id, tarefas[2].texto, tarefas[2].isCompleted);

//Transformar um Array em JSON
console.log(JSON.stringify(tarefas));

//JSON
const tarefas_JSON =
    '[{"id":1,"texto":"Levar o lixo para fora","isCompleted":true},{"id":2,"texto":"Encontrar com o chefe","isCompleted":true},{"id":3,"texto":"Consulta no dentista","isCompleted":false}]';
    const objeto = JSON.parse(tarefas_JSON);
    console.clear();
    console.log(objeto);