const fs = require("fs");

// Instead of UserID directly, a token in their browser or app could tell us which ID it is they have been assigned
function GrabJSON(UserID) {
  const FILE_PATH = `./data/${UserID}.json`;
  let file = "";
  if (!fs.existsSync(FILE_PATH)) {
    // Translating:
    /*
     * 0 : id
     * 1: allTasks
     * 2: allRecipes
     * 3: allGroceries
     */
    const defaultItem = {
      0: UserID,
      1: {
        total: 0,
        tasks: [{}],
      },
      2: {
        total: 0,
        recipes: [{}],
      },
      3: {
        total: 0,
        groceries: [{}],
      },
    };
    const data = JSON.stringify(defaultItem);
    fs.writeFileSync(FILE_PATH, data, "utf8", (err) => {
      if (err) {
        console.log(`Error creating file: ${err}`);
      }
    });
  }

  file = fs.readFileSync(FILE_PATH);

  let userObject = JSON.parse(file);

  return userObject;
}

// This is written with the expectation that data is using combineForFile
function SaveJSON(UserID, data) {
  const FILE_PATH = `./data/${UserID}.json`;

  // JSON.stringify for processing the JSON later
  const filecontents = JSON.stringify(data);

  fs.writeFileSync(FILE_PATH, filecontents, "utf8", (err) => {
    if (err) {
      console.log(`Error creating file: ${err}`);
    }
  });

  return FILE_PATH;
}

module.exports = { GrabJSON, SaveJSON };
