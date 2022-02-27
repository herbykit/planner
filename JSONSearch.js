// Code to search for repeated recipe names
let fileHandler = require("./JSONQuery");
let JSONTranslate = require("./JSONTranslate");
let JSONConversion = require("./JSONConversion");

function searchRecipes(name, ID) {
  // Loop through the keys in the recipes to see if any of the names match
  // 2 is recipes
  let JSONObject = fileHandler.GrabJSON(ID);

  // search for the recipe..
  console.log(Object.keys(JSONObject[2]["recipes"][0]));
  if (name in JSONObject[2]["recipes"][0]) {
    return true;
  } else {
    return false;
  }
}

// Code to search for repeated grocery names
function searchGroceries(name, ID) {
  // Loop through the keys in the groceries to see if any of the names match
  // 3 is groceries
  let JSONObject = fileHandler.GrabJSON(ID);

  // search for the grocery
  console.log(Object.keys(JSONObject[3]["groceries"][0]));
  if (name in JSONObject[3]["groceries"][0]) {
    return true;
  } else {
    return false;
  }
}

function pushRecipe(ID, recipeName, ingredientList, instructions = "") {
  // Search recipes, then push through to add the recipe to the list
  // if it doesnt exist
  if (searchRecipes(recipeName, ID)) {
    // Update recipe with new information
    // does it actually need to delete old data?
    let JSONObject = fileHandler.GrabJSON(ID);

    console.log(JSONObject[2]["recipes"][0][recipeName]);

    JSONObject[2]["recipes"][0][recipeName].ingredients = ingredientList;
    JSONObject[2]["recipes"][0][recipeName].instructions = instructions;

    fileHandler.SaveJSON(ID, JSONObject);

    return JSONObject;
  } else {
    // Create totally new recipe
    // addToRecipe
    let result = JSONConversion.addToRecipe(
      fileHandler.GrabJSON(ID),
      JSONTranslate.translateRecipe([
        JSONTranslate.createRecipe(recipeName, ingredientList, instructions),
      ])
    );
    fileHandler.SaveJSON(ID, result);
    return result;
  }
}

function pushGrocery(ID, name, amount, size) {
  // Search groceries, then push through to add the recipe to the list
  // if it doesnt exist
  if (searchGroceries(name, ID)) {
    // Add amount to the item
    // Get the current item amount and set it to that much more?
    let JSONObject = fileHandler.GrabJSON(ID);

    if (JSONObject[3]["groceries"][0][name].size != size)
      throw "Incorrect unit";
    JSONObject[3]["groceries"][0][name].amount =
      JSONObject[3]["groceries"][0][name].amount + amount;
    JSONObject[3]["groceries"][0][name].size = size;
    fileHandler.SaveJSON(ID, JSONObject);

    return JSONObject;
  } else {
    // Add totally new item
    // addToGrocery
    let result = JSONConversion.addToGrocery(
      fileHandler.GrabJSON(ID),
      JSONTranslate.translateGrocery([
        JSONTranslate.getItemSyntax(name, amount, size),
      ])
    );
    fileHandler.SaveJSON(ID, result);
    return result;
  }
}

module.exports = { pushRecipe, pushGrocery };
