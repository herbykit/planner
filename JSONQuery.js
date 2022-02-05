const fs = require("fs");

function GrabJSON(UserID) {
  const FILE_PATH = `./data/${UserID}.json`;
  // Gets stopped here
  let file = "";
  if (fs.existsSync(FILE_PATH)) {
    file = fs.readFileSync(FILE_PATH, "utf8");
  } else {
    const defaultItem = {
      id: UserID,
      allTasks: "0",
      tasks: {},
      allRecipes: "0",
      recipes: {},
      allGroceries: "0",
      groceries: {},
    };
    const data = JSON.stringify(defaultItem);
    fs.writeFileSync(FILE_PATH, data, "utf8", (err) => {
      if (err) {
        console.log(`Error creating file: ${err}`);
      } else {
        console.log(`Created ${UserID}'s file!`);
      }
    });
  }

  file = fs.readFileSync(FILE_PATH);

  let userObject = JSON.parse(file);

  if (!("allTasks" in userObject)) {
    userObject["allTasks"].push({ total: 0, tasks: {} });
  }

  console.log(userObject["allTasks"][0]);

  return userObject;
}

function SaveJSON(UserID) {
  const FILE_PATH = `./data/${UserID}.json`;
  fs.open(FILE_PATH);
  const data = fs.readFileSync(FILE_PATH);

  // JSON.stringify for processing the JSON later

  return elements;
}

module.exports = { GrabJSON, SaveJSON };
