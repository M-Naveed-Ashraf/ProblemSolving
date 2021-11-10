    let arr1=[1,2,3,0,-1,-2,-3,0,-102];
    let arr2 = [];
    let count0 = 0;
    let countP = 0;
    let countN = 0;
    if(0<arr1.length<=100){
        for(let i of arr1) {
            if(-101 < i < 101){
                if(i === 0) {
                count0++;
                }
                if(i > 0) {
                    countP++;
                }
                if(i < 0) {
                    countN++;
                }
            }
        }
    }


let Neg = (countN/arr1.length).toFixed(6);
let Zero = (count0/arr1.length).toFixed(6);
let Pos = (countP/arr1.length).toFixed(6);
return console.log(`${Pos}\n${Neg}\n${Zero}`)