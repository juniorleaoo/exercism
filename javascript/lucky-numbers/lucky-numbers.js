// @ts-check

const transformArrayInNumber = (array) => Number(array.join(''));

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return transformArrayInNumber(array1) + transformArrayInNumber(array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return value === transformArrayInNumber([...String(value)].reverse())
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input) {
    return Number(input) ? '' : 'Must be a number besides 0';
  }

  return 'Required field';
}
