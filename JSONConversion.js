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

const JSONQuery = require("./JSONQuery");
const JSONTranslate = require("./JSONTranslate");

/** 
    existingJSON is read from stringify initially
    Can pass the returned value of this function as existingJSON too
*/
function addToRecipe(existingJSON, recipeList) {
  // Work with 2
  let array = existingJSON[2];
  let total = array.total;
  for (let i = 0; i < recipeList.length; i++) {
    existingJSON[2].total = total + i + 1;
    existingJSON[2].recipes[total + i] = recipeList[i];
  }
  return existingJSON;
}

function addToGrocery(existingJSON, groceryList) {
  // work with 3
  let array = existingJSON[3];
  let total = array.total;
  for (let i = 0; i < groceryList.length; i++) {
    existingJSON[3].total = total + i + 1;
    existingJSON[3].groceries[total + i] = groceryList[i];
  }
  return existingJSON;
}

/**
 * Boilerplate code for when tasks are added to the program later on
function addToTask(existingJSON, taskList) {
  // work with 1
  let array = existingJSON[1];
  let total = array.total;
  for (let i = 0; i < taskList.length; i++) {
    existingJSON[1].total = total + i + 1;
    existingJSON[1].tasks[total + i] = taskList[i];
    console.log(existingJSON[1]["tasks"]);
  }
  return existingJSON;
}
*/

module.exports = { addToRecipe, addToGrocery /** , addToTask */ };
