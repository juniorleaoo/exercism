//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

/**
 * Já foi resolvido no typescript 
 */
export const isPangram = (sentence) => {
  const sentenceLowerCase = sentence.toLowerCase();
  return [...ALPHABET].every(letter => sentenceLowerCase.includes(letter))
};
