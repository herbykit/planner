// Code to search for repeated recipe names
let fileHandler = require("./JSONQuery");
let JSONTranslate = require("./JSONTranslate");
let JSONConversion = require("./JSONConversion");

function searchRecipes(name, ID) {
  // Loop through the keys in the recipes to see if any of the names match
  // 2 is recipes
  let JSONObject = fileHandler.GrabJSON(ID);

  // search for the recipe..
  if (JSONTranslate.getSubArray(JSONObject[2]["recipes"], name)) return true;
  else return false;
}

// Code to search for repeated grocery names
function searchGroceries(name, ID) {
  // Loop through the keys in the groceries to see if any of the names match
  // 3 is groceries
  let JSONObject = fileHandler.GrabJSON(ID);

  // search for the grocery
  if (JSONTranslate.getSubArray(JSONObject[3]["groceries"], name)) return true;
  else return false;
}

function pushRecipe(ID, recipeName, ingredientList, instructions = "") {
  // Search recipes, then push through to add the recipe to the list
  // if it doesnt exist
  if (searchRecipes(recipeName, ID)) {
    // Update recipe with new information
    // does it actually need to delete old data?
    let JSONObject = fileHandler.GrabJSON(ID);

    JSONObject[2][recipeName].ingredients = ingredientList;
    JSONObject[2][recipeName].instructions = instructions;

    return JSONObject;
  } else {
    // Create totally new recipe
    // addToRecipe
    return JSONConversion.addToRecipe(
      fileHandler.GrabJSON(ID),
      JSONTranslate.translateRecipe([
        JSONTranslate.createRecipe(recipeName, ingredientList, instructions),
      ])
    );
  }
}

function pushGrocery(ID, name, amount, size) {
  // Search groceries, then push through to add the recipe to the list
  // if it doesnt exist
  if (searchGroceries(name, ID)) {
    // Add amount to the item
    // Get the current item amount and set it to that much more?
    let JSONObject = fileHandler.GrabJSON(ID);

    if (JSONObject[3][name].size.equals(size)) throw "Incorrect unit";
    JSONObject[3][name].amount = JSONObject[3][name].amount + amount;
    JSONObject[3][name].size = size;
  } else {
    // Add totally new item
    // addToGrocery
    console.log(
      name +
        " with the amoutn of " +
        amount +
        " and size of " +
        size +
        " was perceived as normal"
    );
    return JSONConversion.addToGrocery(
      fileHandler.GrabJSON(ID),
      JSONTranslate.translateGrocery([
        JSONTranslate.getItemSyntax(name, amount, size),
      ])
    );
  }
}

module.exports = { pushRecipe, pushGrocery };
