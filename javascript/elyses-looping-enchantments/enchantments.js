// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 * The function should use forEach
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let result = 0;
  stack.forEach(value => {
    if (value === card) {
      result++;
    }
  });
  return result;
  //return stack.filter(value => value === card).length
}

/**
 * Determine how many cards are odd or even. 
 * To practice, use a for..of loop 
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let odd = 0;
  let even = 0;

  for (let value of stack) {
    if (value % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return type ? even : odd;
}
