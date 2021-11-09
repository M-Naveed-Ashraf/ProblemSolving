// let randomNum =(min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random()* (max - min +1) + min);
// } 

// let n = randomNum(50,100);

let n = [];
let num = 0;

for(let i =51; i < 101; i++){
    n.push(i);
}

for(let i of n){
    if(i%2 === 0 && i%3 === 0 && i%5 === 3)
    num=i;
}

console.log(`Total number of eggs was ${num}`);
const price = num * (1/2);

console.log(`So the total price the gentleman paid to Rasool : Rs.${price}`);