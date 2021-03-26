const Discord = require("discord.js");
const fs = require('fs');

const Emojis = require("../utilities/emojis.js");
const Format = require("../utilities/format.js");

module.exports = {
    name: "debugMode",
    aliases: ["debug", "dbg"],
    description: "enable/disable dev mode",
    id: "1726",
    async execute(client, message, args) {

      const Config = JSON.parse(fs.readFileSync('./utilities/config.json', 'utf8'))
      
      if (message.author.id !== Config.ownerID) {
    		return message.author.send("You do not have permission to use this command.")
    	}

      if (args[0] === "set") {

        switch(args[1]) {
          case "true":
            Config.debug = true;
            message.channel.send(`${Emojis.greenCheck.pub} debug set to ${Config.debug}`);
            break;
          case "t":
            Config.debug = true;
            message.channel.send(`${Emojis.greenCheck.pub} debug set to ${Config.debug}`);
            break;
          case "false": 
            Config.debug = false;
            message.channel.send(`${Emojis.greenCheck.pub} debug set to ${Config.debug}`);
            break;
          case "f":
            Config.debug = false;
            message.channel.send(`${Emojis.greenCheck.pub} debug set to ${Config.debug}`);
            break;
          default:
            message.channel.send(`Error: \`${args[1]}\`\n\nvalid responses are: \`false\`, \`f\`, \`true\`, or \`t\`.`);
        }

        fs.writeFile('./utilities/config.json', JSON.stringify(Config, null, 4), (err) => {
          if (err) console.log(err);
        });

      } else if (args[0] === undefined) {
        message.channel.send(`debug is currently set to ${Config.debug}`);
      }
    }
};
