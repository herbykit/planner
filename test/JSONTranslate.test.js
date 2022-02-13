const JSONTranslate = require("../JSONTranslate.js");

// Testing the getItemSyntax, excluding false error-causing calls
// Will provide safety checks in a higher level call
test("Tests creation of specific item", () => {
  expect(
    JSONTranslate.getItemSyntax("garlic_powder", 0, "tbs")["garlic_powder"][
      "amount"
    ]
  ).toBe(0);
});

test("Tests creation of specific item", () => {
  expect(
    JSONTranslate.getItemSyntax("garlic_powder", 0, "tbs")["garlic_powder"][
      "size"
    ]
  ).toBe("tbs");
});

test("Tests exact equal of what the object should be", () => {
  expect(JSONTranslate.getItemSyntax("garlic_powder", 0, "tbs")).toStrictEqual({
    garlic_powder: { amount: 0, size: "tbs" },
  });
});

// Test adding 0 items in combineItems
test("Tests an empty call to combineItems", () => {
  expect(JSONTranslate.combineItems()).toStrictEqual({});
});

let item1 = JSONTranslate.getItemSyntax("garlic_powder", 1, "tsp");
let item2 = JSONTranslate.getItemSyntax("potato", 1, "potato");
let item3 = JSONTranslate.getItemSyntax("butter", 2, "tbsp");
let item4 = JSONTranslate.getItemSyntax("water", 4, "cups");

let combined1 = JSONTranslate.combineItems(item1);
let combined2 = JSONTranslate.combineItems([item1, item2, item3, item4]);
// Test adding 1 item in combineItems
// JS cannot have a value without a key, will have to make up for this in higher level functions
test("Tests a call with one item in combineItems", () => {
  expect(combined1).toStrictEqual({
    garlic_powder: { amount: 1, size: "tsp" },
  });
});

test('Tests that the key is named "garlic_powder"', () => {
  expect(Object.keys(combined1)[0]).toBe("garlic_powder");
});

test("Tests that the amount is correctly 1", () => {
  expect(combined1["garlic_powder"]["amount"]).toBe(1);
});

test('Tests that the size is exactly "tsp"', () => {
  expect(combined1["garlic_powder"]["size"]).toBe("tsp");
});

// Test adding 4 items in combineItems
// Only temporarily have extended the object to be human readable
test("Tests a call with multiple items in combineItems", () => {
  expect(combined2).toStrictEqual([
    { garlic_powder: { amount: 1, size: "tsp" } },
    { potato: { amount: 1, size: "potato" } },
    { butter: { amount: 2, size: "tbsp" } },
    { water: { amount: 4, size: "cups" } },
  ]);
});

// Test that the structure matches and also tests that it is accessible in an easy way
// for other code that comes later
test("Tests that the first key is garlic_powder", () => {
  expect(
    JSONTranslate.getSubArray(combined2, "garlic_powder")["garlic_powder"]
  ).toStrictEqual({
    amount: 1,
    size: "tsp",
  });
});

test("Tests that the first key is potato", () => {
  expect(
    JSONTranslate.getSubArray(combined2, "potato")["potato"]
  ).toStrictEqual({
    amount: 1,
    size: "potato",
  });
});

test("Tests that the first key is butter", () => {
  expect(
    JSONTranslate.getSubArray(combined2, "butter")["butter"]
  ).toStrictEqual({
    amount: 2,
    size: "tbsp",
  });
});

test("Tests that the first key is water", () => {
  expect(JSONTranslate.getSubArray(combined2, "water")["water"]).toStrictEqual({
    amount: 4,
    size: "cups",
  });
});

// Testing abiilty to access individual items
test("Tests that access to the specific amount works", () => {
  expect(JSONTranslate.getSubArray(combined2, "water")["water"]["amount"]).toBe(
    4
  );
});

test("Tests that access to the specific size works", () => {
  expect(JSONTranslate.getSubArray(combined2, "water")["water"]["size"]).toBe(
    "cups"
  );
});

test("Tests that the recipe is created correctly", () => {
  expect(
    JSONTranslate.translateRecipe(
      "melted_butter",
      JSONTranslate.combineItems(item3),
      "put butter in hot saucepan and wait"
    )
  ).toStrictEqual({
    melted_butter: {
      ingredients: { butter: { amount: 2, size: "tbsp" } },
      instructions: "put butter in hot saucepan and wait",
    },
  });
});

test("tests that an empty ingredients doesn't fail", () => {
  expect(
    JSONTranslate.translateRecipe("air", JSONTranslate.combineItems())
  ).toStrictEqual({ air: { ingredients: {}, instructions: "" } });
});

test("tests that groceries matches combineItems", () => {
  expect(JSONTranslate.translateGrocery(combined2)).toStrictEqual([
    { garlic_powder: { amount: 1, size: "tsp" } },
    { potato: { amount: 1, size: "potato" } },
    { butter: { amount: 2, size: "tbsp" } },
    { water: { amount: 4, size: "cups" } },
  ]);
});

test("tests that empty groceries returns {}", () => {
  expect(JSONTranslate.translateGrocery()).toStrictEqual({});
});
