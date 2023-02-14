const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let decode = (message) => {
    let messageConverted = [];
    message.split('**********').map( word => {
        let decodedWord = [];
        let codeMorse = '';
        for(i = 0; i < word.length; i += 10) {
            decodedWord.push(+word.slice(i, i+10).toString());
        }
        decodedWord.map( letter => {
            let decodedLetter = [];
            letter = letter.toString();
            for(j = 0; j < letter.length; j += 2 ) {
                if (letter.slice(j, j+2) == 10) {decodedLetter.push('.')}
                if (letter.slice(j, j+2) == 11) {decodedLetter.push('-')}
            }
            codeMorse = decodedLetter.join('');
            messageConverted.push(MORSE_TABLE[codeMorse]);
        });
        messageConverted.push(' ');
    })
    return messageConverted.join('').trim();
}

module.exports = {
    decode
}
