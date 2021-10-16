//laços
var count;
for(count=0; count <=5; count++){
    alert(count);
}

 
var count = 0;
while(count < 5){
    console.log(count);
    count ++;
} 


//condicional
var idade = prompt("Qual a sua idade?");

if(idade > 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

//array
var fruta = {nome : "maça", cor : "vermelha"};
console.log(fruta);

var lista = ["maça", "banana", "uva"];
lista.push("laranja");
console.log(lista);
lista.pop();
console.log(lista.length);
console.log(lista.toString);
console.log(lista.join(" - "));

//variavel
var nome = "Felipe Lauton";
var idade = 20;
var idade2 = 10;
alert(nome + " tem " + idade + " anos.");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
