/*

This file is to be used to provide the proper data build for JSONQuery's save function. To use multiple functions:

EX:

addToRecipe(addToGrocery(addToTask(JSONQuery.GrabJSON("123"), taskList), groceryList), recipeList);
addToGrocery(addToRecipe(JSONQuery.GrabJSON("123"), recipeList), groceryList);

etc.

To use with saveJSON:

const file = JSONQuery.GrabJSON("123");
JSONQuery.SaveJSON(file[0], addToTask(addToGrocery(file, groceryList), taskList));

const defaultItem = {
      0: UserID,
      1: {
        total: 0,
        tasks: [{}],
      },
      2: {
        total: 0,
        recipes: [{}],
      },
      3: {
        total: 0,
        groceries: [{}],
      },
    };

    Structure of base.

*/

/** 
    existingJSON is read from stringify initially
    Can pass the returned value of this function as existingJSON too
*/
function addToRecipe(existingJSON, recipeList) {
  // Work with 2
}

function addToGrocery(existingJSON, groceryList) {
  // work with 3
}

function addToTask(existingJSON, taskList) {
  // work with 1
}

module.exports = { addToRecipe, addToGrocery, addToTask };
