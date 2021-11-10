let s = '07:05:45PM';
let arr = s.split('', 8);
let hh;
if(s[s.length-2] === 'A'){
    arr[0] = arr[0] + arr[1];
    arr[0] == 12? arr[0]='00' : arr[0];
    delete arr[1];
}

else if(s[s.length-2] === 'P'){
    hh = Number(arr[0]+arr[1]);
    hh += 12;
    arr[0] = hh.toString();
    delete arr[1];
}

let final = arr.join('')
console.log(final)