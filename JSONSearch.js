// Code to search for repeated recipe names
let fileHandler = require("./JSONQuery");

function searchRecipes(name, ID) {
  // Loop through the keys in the recipes to see if any of the names match
  // 2 is recipes
  let JSONObject = fileHandler.GrabJSON(ID);

  // search for the recipe..
  if (!JSONObject[2][name]) return false;
  else return true;
}

// Code to search for repeated grocery names
function searchGroceries(name, ID) {
  // Loop through the keys in the groceries to see if any of the names match
  // 3 is groceries
  let JSONObject = fileHandler.GrabJSON(ID);

  // search for the grocery
  if (!JSONObject[3][name]) return false;
  else return true;
}

function pushRecipes(ID, recipeName, ingredientList, instructions = "") {
  // Search recipes, then push through to add the recipe to the list
  // if it doesnt exist
  if (searchRecipes(recipeName, ID)) {
    // Update recipe with new information
    // does it actually need to delete old data?
  } else {
    // Create totally new recipe
    // addToRecipe
  }
}

function pushGrocery(ID, name, amount, size) {
  // Search groceries, then push through to add the recipe to the list
  // if it doesnt exist
  if (searchGroceries(name, ID)) {
    // Add amount to the item
    // Get the current item amount and set it to that much more?
  } else {
    // Add totally new item
    // addToGrocery
  }
}
