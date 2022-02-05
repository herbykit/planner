const config = require("./config.json");
const JSONQuery = require("./JSONQuery.js");
const { Client, MessageEmbed } = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on("ready", () => {
  console.log("I am ready!");
});

client.on("messageCreate", (message) => {
  //create functions to respond to messages in other files
  /**
	Create new file per user ID
	Functions for:
	Creating recipe
	Creating grocery item
	Checking groceries compared with recipe
	Using ^ to list available recipes
	Creating to-do
	Creating daily chore list (with sticker option?)

	**/
  if (!message.author.bot && message.content.startsWith("LL!")) {
    const command = message.content.split("LL!")[1];

    const JSONUser = JSONQuery.GrabJSON(message.author.id);
		console.log(JSONUser["allRecipes"]);
		console.log(JSONUser["allGroceries"]);
		console.log(JSONUser["allTasks"]);

		switch(command) {
			case "AddRecipe":
				//
				break;
			case "AddGrocery":
				//
				break;
			case "CheckRecipe":
				//
				if(JSONUser["allRecipes"] == 0) {
					message.channel.send("You have no recipes!");
				} else {

				}
				break;
			case "AddChore":
				//
				break;
			case "ListRecipes":
				if(JSONUser["allRecipes"] == 0) {
					message.channel.send("You have no recipes!");
				} else {

				}
				//
				break;
			case "ListGroceries":
				if(JSONUser["allGroceries"] == 0) {
					message.channel.send("You have no groceries!");
				} else {

				}
				//
				break;
			case "ListTasks":
				if(JSONUser["allTasks"] == 0) {
					message.channel.send("You have no tasks!");
				} else {

				}
			case "UseRecipe":
				//
				if(JSONUser["allRecipes"] == 0) {
					message.channel.send("You have no recipes!");
				} else {

				}
				break;
			case "UseGrocery":
				//
				if(JSONUser["allGroceries"] == 0) {
					message.channel.send("You have no recipes!");
				} else {

				}
				break;
			case "":
				message.channel.send("Uhhhhhh,,, I don't think that's how this works");
				break;
			default:
				message.channel.send("Yeah uh, that command doesn't exist. Did you type it right?");
				break;
		}
	}
});

client.login(config.token);
