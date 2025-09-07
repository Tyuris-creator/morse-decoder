const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const encoded = expr.split('**********');
  let decodeStr = '';
  for (let i = 0; i < encoded.length; i += 1) {
    let subStr = encoded[i].split('');
    const timesToIterate = Math.floor(subStr.length / 10);
    for (let j = 0; j < timesToIterate; j += 1) {
      let letter = '';
      for (let k = 0; k < 10; k += 1) {
        letter += subStr[k];
      }
      const regex = /10|11/g;
      const matches = letter.match(regex);
      letter = '';
      for (let z = 0; z < matches.length; z += 1) {
        if (Number(matches[z]) === 10) {
          letter += '.';
        }
        if (Number(matches[z]) === 11) {
          letter += '-';
        }
      }
      letter = MORSE_TABLE[letter];
      decodeStr += letter;
      subStr.splice(0, 10);
      letter = '';
    }
    decodeStr += ' ';
  }
  return decodeStr.trim();
}

console.log(
  decode(
    '0000101010000000101100101010110000000010**********00000011110000000010'
  )
);
