
//1 arreglo de 5 numero
//metodo filter
//para que retorno los numero mayores o iguales a 
console.log("EJE 1")
const numero = [10,2,5,7,1];
const aprobados = numero.filter((numero,
    index,array) =>{
        return numero >=5;
    })
    console.log("Numeros iguales o mayores: "+aprobados);
    console.log("Numeros del arreglo: "+numero);
  //Eje 2
  //numeros sumando 
  console.log("EJE 2")
console.log("Numeros del arreglo: "+numero);
let total=0,numeros = [2, 3,5,5,5];
for(let i of numeros) total+=i;
console.log(total);
let total2=0,numeros2 = [10,2];
for(let i of numeros2) total2+=i;
console.log(total2);
let total3=0,numeros3 = [5,10];
for(let i of numeros3) total3+=i;
console.log(total3);
let total4=0,numeros4 = [7,10];
for(let i of numeros4) total4+=i;
console.log(total4);
let total5=0,numeros5 = [1,10];
for(let i of numeros5) total5+=i;
console.log(total5);

//Eje 3
console.log("EJE 3")
let arr = ["pera","fresa", "naranja", "manzana", "mango"];
console.log( arr.slice( 1,3) ); 

//Eje 4
console.log("EJE 4")
const str1 = 'H,I,J';
const str2 = 'K,L,M';

console.log(str1.concat(' ', str2));
// Expected output: "H I J"
console.log("Concatenado")
console.log(str2.concat(', ', str1));

//Eje 5
const paises = ["MEXICO","USA","FRANCIA",]

console.log(paises.includes('MEXICO'));
// Expected output: true

console.log(paises.includes('USA'));
// Expected output: true

console.log(paises.includes('RANCIA'));
// Expected output: FALSE

