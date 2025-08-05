const sentense = 'I am learning web dev.';


let reverse = ''; 
for(const letter of sentense){
    // console.log(letter);
    reverse = letter + reverse;
}

let reve = '';
for(let i = 0; i < sentense.length; i++){
    // console.log(i);
    // console.log(sentense[i]);
    const letter= sentense[i];
    reve = letter + reve;
}

// console.log(rev);

const reversed = sentense.split('').reverse().join('');
console.log(reversed);