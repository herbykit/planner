const JSONQuery = require("./JSONQuery");
const fs = require("fs");

// Recipes
// Translates data into JSON formatted and inserts it into the user's JSON storage
function getItemSyntax(item, number, size) {
  // Creates a JSON string to combine with others to create the array
  // needed in the translateRecipe and translateGrocery function
  let item_added = {}; // Input salt from tears of no simpler way to create it...
  item_added[item] = { amount: 0, size: "null" }; // Creates the structure to fill in
  item_added[item]["amount"] = number; // Resets the number to the correct amount
  item_added[item]["size"] = size; // Resets the size to the correct amount
  return item_added;
}

function combineItems(items) {
  // combines an unknown size of items to one JSON object
  // Uses empty argument to allow infinite arguments accessed
  // through the arguments object
  if (!items) return {};
  return items;
}

function translateRecipe(ingredients, instructions) {
  // Ingredients is an array that matches the structure of the ingredients below already
  // Instructions is a string that includes \n values as neededd
  // Inserts the object into the right spot
}
/*
 * Example of a bread recipe put into this.
	"recipeName": [{
		"ingredients": [{
			"garlic_powder": [{
				"amount": [{
					"1",
					"g"
				}]
			}],
			"bread_flour": [{
				"amount": [{
					"4",
					"cup"
				}]
			}],
			"water": [{
				[{
					"amount": [{
						"2",
						"cup"
					}]
				}]
			}],
			"yeast": [{
				"amount": [{
					"two",
					"teaspoon"
				}]
			}]
		}],
		"instructions": [{
			"Put all ingredients in bowl. \nMix thoroughly. \nKnead for 5 minutes or until smooth. \nLet rise for 1 hour. \nCut into equal portions and put into baking dish."
		}]
	}]
*/

// Groceries
// Translates data into JSON formatted and inserts it into the user's JSON storage

function translateGrocery(groceries) {
  // Only here for structural context, most of its functions are performed already
  // by the time it gets to here. Inserts the values into the right place.
}

/*
	"item_name": [{
		"amount": [{
			"6",
			"cups"
		}]
	}],
	"bread_flour": [{
		"amount": [{
			"4",
			"cups"
		}]
	}],
	"garlic_powder": [{
		"150",
		"g"
	}]
*/

// Tasks
// Translates data into JSON formatted and inserts it into the user's JSON storage

/*
* 0: repeats?
* 1: how often repeats?
* 2: when it ends?
	"task_name": [{
		"description": "example description",
		"repeats": [{
			0: "no",
			1: "",
			2: ""
		}]
	}],
	"task_repeats_daily": [{
		"description": "repeated task description",
		"repeats": [{
			0: "yes",
			1: "1",
			2: ""
		}]
	}],
	"task repeats monthly until X": [{
		"description": "repeated task until X description",
		"repeats": [{
			0: "yes",
			1: "30",
			2: "28.03.2022"
		}]
	}]
*/

module.exports = {
  translateRecipe,
  translateGrocery,
  getItemSyntax,
  combineItems,
};
