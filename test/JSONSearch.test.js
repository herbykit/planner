let JSONTranslate = require("../JSONTranslate");
let JSONSearch = require("../JSONSearch");
const fs = require("fs");

let item2 = JSONTranslate.getItemSyntax("potato", 1, "potato");
let item3 = JSONTranslate.getItemSyntax("butter", 2, "tbsp");
let item4 = JSONTranslate.getItemSyntax("water", 4, "cups");

// pushGrocery(ID, name, amount, size)
test("tests that groceries matches combineItems", () => {
  expect(
    JSONSearch.pushGrocery("123", "garlic_powder", 1, "tsp")[3]["groceries"]
  ).toStrictEqual([{ garlic_powder: { amount: 1, size: "tsp" } }]);
});

test("tests that groceries matches combineItems", () => {
  expect(
    JSONSearch.pushGrocery("123", "garlic_powder", 3, "tsp")[3]["groceries"]
  ).toStrictEqual([{ garlic_powder: { amount: 4, size: "tsp" } }]);
});

test("test that Incorrect Unit is thrown", () => {
  expect(() => {
    JSONSearch.pushGrocery("123", "garlic_powder", 3, "tbsp");
  }).toThrow("Incorrect unit");
});
if (fs.existsSync("./data/123.json")) {
  fs.unlinkSync("./data/123.json");
}

// pushRecipes(ID, recipeName, ingredientList, (instructions = ""));
let recipeList = JSONSearch.pushRecipe(
  "123",
  "melted_butter",
  JSONTranslate.combineItems([item3]),
  "put butter in hot saucepan and wait"
);

test("tests that a multiple item list is created when inputting an array of recipes to translateRecipe", () => {
  expect(recipeList[2]["recipes"]).toStrictEqual([
    {
      melted_butter: {
        ingredients: [{ butter: { amount: 2, size: "tbsp" } }],
        instructions: "put butter in hot saucepan and wait",
      },
    },
  ]);
});

let recipeList2 = JSONSearch.pushRecipe(
  "123",
  "melted_butter",
  JSONTranslate.combineItems([item3]),
  "put butter in hot saucepan and wait "
);

test("tests that a multiple item list is created when inputting an array of recipes to translateRecipe", () => {
  expect(recipeList2[2]["recipes"]).toStrictEqual([
    {
      melted_butter: {
        ingredients: [{ butter: { amount: 2, size: "tbsp" } }],
        instructions: "put butter in hot saucepan and wait ",
      },
    },
  ]);
});
if (fs.existsSync("./data/123.json")) {
  fs.unlinkSync("./data/123.json");
}
