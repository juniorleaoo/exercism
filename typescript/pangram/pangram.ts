/*export function isPangram(sentence: string): boolean {
  const alphabet = [...sentence.toLowerCase()].reduce((acc, letter) => {
    if(!acc.includes(letter) && letter >= 'a' && letter <= 'z'){
      acc.push(letter);
    }
    return acc;
  }, <string[]>[])

  return alphabet.length === 26;
}*/

export function isPangram(sentence: string): boolean {
  const alphabet = new Set();

  [...sentence.toLowerCase()].forEach(letter => {
    if (letter >= 'a' && letter <= 'z') {
      alphabet.add(letter);
    }
  });
  
  return alphabet.size === 26;
}