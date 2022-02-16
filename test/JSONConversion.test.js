let JSONConversion = require("../JSONConversion.js");
let JSONQuery = require("../JSONQuery.js");
let JSONTranslate = require("../JSONTranslate.js");

let potato = JSONTranslate.getItemSyntax("potato", 1, "potato");
let water = JSONTranslate.getItemSyntax("water", 4, "cups");
let recipe1 = JSONTranslate.createRecipe(
  "mashed_potatoes",
  JSONTranslate.translateGrocery(JSONTranslate.combineItems[(potato, water)])
);

// Test if the array is accessed properly
test("checking if the array is accessed properly", () => {
  expect(
    Object.keys(
      JSONConversion.addToRecipe(
        JSONQuery.GrabJSON("123"),
        JSONTranslate.translateRecipe([recipe1])
      )[2]["recipes"][0]
    )[0]
  ).toBe("mashed_potatoes");
});

test("checking if the array is accessed properly", () => {
  expect(
    JSONConversion.addToRecipe(
      JSONQuery.GrabJSON("123"),
      JSONTranslate.translateRecipe([recipe1])
    )[2]["total"]
  ).toBe(1);
});

// Test if the array is accessed properly
test("checking if the array is accessed properly", () => {
  expect(
    Object.keys(
      JSONConversion.addToGrocery(
        JSONQuery.GrabJSON("123"),
        JSONTranslate.translateGrocery(JSONTranslate.combineItems([potato]))
      )[3]["groceries"][0]
    )[0]
  ).toBe("potato");
});

test("checking if the array is accessed properly", () => {
  expect(
    JSONConversion.addToGrocery(
      JSONQuery.GrabJSON("123"),
      JSONTranslate.translateGrocery(JSONTranslate.combineItems([potato]))
    )[3]["total"]
  ).toBe(1);
});
