const statement = 'I am a hard working person';
const words = statement.split(' ');
let reversed = '';

for (let i = words.length - 1; i >= 0; i--) {
  reversed += words[i];
  if (i !== 0) {
    reversed += ' ';
  }
}

console.log(reversed);
