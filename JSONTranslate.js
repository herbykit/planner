const JSONQuery = require("./JSONQuery");
const fs = require("fs");

// Recipes
// Translates data into JSON formatted and inserts it into the user's JSON storage

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