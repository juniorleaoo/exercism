/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time) {
    if (time === 0) {
        return 'Lasagna is done.';
    }

    if (!time) {
        return 'You forgot to set the timer.';
    }

    return 'Not done, please wait.';
}

export function preparationTime(layers, time = 2) {
    return layers.length * time;
}

export function quantities(layers) {
    const quantityOfNoodles = layers.filter(layer => layer === 'noodles')?.length;
    const quantityOfSauce = layers.filter(layer => layer === 'sauce')?.length;

    return {
        noodles: quantityOfNoodles * 50,
        sauce: quantityOfSauce * 0.2
    };
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, scale) {
    const scaleRecipe = {};

    for (let key in recipe) {
        scaleRecipe[key] = recipe[key] * scale / 2
    }

    return scaleRecipe;
}