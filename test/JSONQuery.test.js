const JSONQuery = require("../JSONQuery.js");
const fs = require("fs");

// Generally test the creation of a file
test('Tests creation of a file', () => {
  expect(JSONQuery.GrabJSON("123")[0]).toBe("123");
});
if(fs.existsSync("./data/123.json")) {
	fs.unlinkSync("./data/123.json");
}

// Generally test running it a second time after file is generated
JSONQuery.GrabJSON("123")
test("Generally testing running it a second time after file is generated", () => {
	expect(JSONQuery.GrabJSON("123")[0]).toBe("123");
});
fs.unlinkSync("./data/123.json");


const jsonbuilt = JSONQuery.GrabJSON("s2d3f98geasda2");
test("Testing total in allTasks", () => {
	expect(jsonbuilt[1]["total"]).toBe(0);
});

test("Testing total in allRecipes", () => {
	expect(jsonbuilt[2]["total"]).toBe(0);
});

test("Testing total in allGroceries", () => {
	expect(jsonbuilt[3]["total"]).toBe(0);
});
fs.unlinkSync("./data/s2d3f98geasda2.json");

JSONQuery.GrabJSON("123");
test("Testing ability to save files", () => {
	expect(JSONQuery.SaveJSON("123")).toBe("./data/123.json")
});
fs.unlinkSync("./data/123.json");