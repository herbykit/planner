const JSONTranslate = require("../JSONTranslate.js");


// Testing the getItemSyntax, excluding false error-causing calls
// Will provide safety checks in a higher level call
test('Tests creation of specific item', () => {
	expect(JSONTranslate.getItemSyntax("garlic_powder", 0, "tbs")["garlic_powder"]['amount']).toBe(0);
});

test('Tests creation of specific item', () => {
	expect(JSONTranslate.getItemSyntax("garlic_powder", 0, "tbs")["garlic_powder"]['size']).toBe("tbs");
});