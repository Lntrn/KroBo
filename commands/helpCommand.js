const fs = require("fs");

const Channels = require("../utilities/channels.js");
const Config = JSON.parse(fs.readFileSync('./utilities/config.json', 'utf8'));
const CommandLog = require("../utilities/commandLog.js");
const Format = require("../utilities/format.js");
const Discord = require("discord.js");
const Emojis = require("../utilities/emojis.js");

module.exports = {
			name: "helpCommand",
			aliases: ["help", "ivefallenandcantgetup"],
			description: "",
			id: "5026",
	    async execute(client, message, args) {

			let page = "";

			const helpEmbed = new Discord.MessageEmbed()
				.setColor("#310ff5")
				.addField(`\`search\``, `> Searches for Kroger jewels based on user input, checks for months, name, or kroger card.\n> **Aliases**: NA\n> ex. <@${client.user.id}> search may, frozen solid, april`)
				.setFooter(Format.footer.desc, Format.footer.image)
				
			message.channel.send(helpEmbed);

			// Log command
			CommandLog.logCommand(client, message, message.guild.id, "help");
      	}
};

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

