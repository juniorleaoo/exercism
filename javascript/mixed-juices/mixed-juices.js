// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const JUICES = {
  strawberry: { name: 'Pure Strawberry Joy', time: 0.5 },
  energizer: { name: 'Energizer', time: 1.5 },
  greenGarder: { name: 'Green Garden', time: 1.5 },
  tropicalIsland: { name: 'Tropical Island', time: 3 },
  allOrNothing: { name: 'All or Nothing', time: 5 }
}

const DEFAULT_TIME_JUICE = 2.5

const WEDGES_PER_LIME = {
  small: 6,
  medium: 8,
  large: 10
}

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  return Object.values(JUICES).find(juice => juice.name === name)?.time ?? DEFAULT_TIME_JUICE
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let numberOfLimes = 0;

  for (; numberOfLimes < limes.length; numberOfLimes++) {
    if (wedgesNeeded <= 0) {
      break;
    }

    wedgesNeeded -= WEDGES_PER_LIME[limes[numberOfLimes]];
  }

  return numberOfLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders.shift());
  }

  return orders;
}
