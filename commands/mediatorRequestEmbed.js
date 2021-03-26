const fs = require("fs");

const Channels = require("../utilities/channels.js");
const Format = require("../utilities/format.js");
const Discord = require("discord.js");

module.exports = {
		name: "mediatorRequestEmbed",
    	aliases: ["mre"],
		id: "3098",

	execute(client, message, args) {

		const Config = JSON.parse(fs.readFileSync('./utilities/config.json', 'utf8'));

		if (!Config.debug) {
			message.delete({timeout: 1000});
		};

		if(!message.member.roles.cache.has(Roles.krogerCrew.admin.id || message.member.hasPermission("ADMINISTRATOR"))) {
	    message.channel.send("You do not have permission to use this command.");
		} else {
		const embed = new Discord.MessageEmbed()
			.setColor("#2399fa")
      		.setTitle("Mediator Request Form")
			.setDescription(`\`\`\`Buyer:\nSeller:\nItems:\nWhen:\`\`\``)
			.setFooter("If you have any questions of concerns dm a member of the staff team.", "https://cdn.discordapp.com/icons/728774518918742140/357aeaac4ff4aa96020ed67db4bb08dc.webp?size=1024");

		message.channel.send(embed);
    }
  },
};
