//JavaScript e DOM
//Objeto document

console.log(document);

// Acessar informações

console.clear();
console.log(document.domain);
console.log(document.URL);

console.log(document.title);
console.log(document.head);
console.log(document.body);

// Alterar o titulo
document.title = 123;
//Criar um elemento <h1>
let heading = document.createElement('H1');
heading.innerHTML = 'Olá alunos!'; 
document.body.appendChild(heading);

console.clear();
// Método getElementById
let titulo = document.getElementById('titulo');
//alterando o conteudo do elemento
titulo.innerHTML = 'Olá meus caros alunos!';
//configurando o estilo CSS do elemento
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for (let i = 0; i < items.length; i++) {     
items[i].style.backgroundColor = '#f4f4f4'; 
}

let li = document.getElementsByClassName('li');
console.log(li);

for(let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = '#f4f4f4';
    else li[i].style.backgroundColor = '#fff';
}

//Método getElementsByName

let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[0].textContent = 'Olá pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Tudo bem?';
nome[1].style.backgroundColor = '#BAC1FB';



// Alterando o estilo da lista 
let ul = document.getElementById('items'); 
ul.style.listStyle = 'none';

// Marcadores numéricos 
ul.style.listStyle = 'decimal inside'; 
