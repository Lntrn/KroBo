const fs = require("fs");

const Channels = require("../utilities/channels.js");
const Format = require("../utilities/format.js");
const Roles = require("../utilities/roles.js");
const Discord = require("discord.js");

module.exports = {
		name: "krogerMonthlyListEmbed",
    	aliases: ["kml"],
		id: "7908",

	execute(client, message, args) {

		const Config = JSON.parse(fs.readFileSync('./utilities/config.json', 'utf8'));

		if (!Config.debug) {
			message.delete({timeout: 1000});
		};

		if (message.member.roles.cache.has(Roles.admin.id) || message.member.hasPermission("ADMINISTRATOR")) {
	    	const embed1 = new Discord.MessageEmbed()
			.setColor("#2399fa")
			.setTitle("$10 Kroger Cards")
			.setURL("http://www.wizard101central.com/wiki/Item:Kroger_$10_USA_Gift_Card")
			.addFields(
				{ name: "January", value: "\`High Voltage Amethyst\`", inline: true },
				{ name: "February", value: "\`Fire and Brimstone Ruby\`", inline: true },
				{ name: "March", value: "\`Hard Life Jade\`", inline: true },
				{ name: "April", value: "[Dire Omen Onyx](http://www.wizard101central.com/wiki/Jewel:Dire_Omen_Onyx)", inline: true },
				{ name: "May", value: "[Twist of Fate Peridot](http://www.wizard101central.com/wiki/Jewel:Twist_of_Fate_Peridot)", inline: true },
				{ name: "June", value: "\`Ninjitsu Citrine\`", inline: true },
				{ name: "July", value: "\`Miasma Opal\`", inline: true },
				{ name: "August", value: "\`Fire and Brimstone Ruby\`", inline: true },
				{ name: "September", value: "\`Hard Life Jade\`", inline: true },
				{ name: "October", value: "[Dire Omen Onyx](http://www.wizard101central.com/wiki/Jewel:Dire_Omen_Onyx)", inline: true },
				{ name: "November", value: "\`Frozen Solid Sapphire\`", inline: true },
				{ name: "December", value: "\`High Voltage Amethyst\`", inline: true },
			)
			.setFooter("Any jewel without a link currently does not have a Wizard101 Central Wiki page. DM an admin if a new page is created.");

		message.channel.send(embed1);

		const embed2 = new Discord.MessageEmbed()
			.setColor("#2399fa")
			.setTitle("$20 Kroger Cards")
			.setURL("http://www.wizard101central.com/wiki/Item:Kroger_$20_USA_Gift_Card")
			.addFields(
				{ name: "January", value: "[Sinking Feeling Amethyst](http://www.wizard101central.com/wiki/Jewel:Sinking_Feeling_Amethyst)", inline: true },
				{ name: "February", value: "[Melting Point Ruby](http://www.wizard101central.com/wiki/Jewel:Melting_Point_Ruby)", inline: true },
				{ name: "March", value: "[Lifesaver Jade](http://www.wizard101central.com/wiki/Jewel:Lifesaver_Jade)", inline: true },
				{ name: "April", value: "[Mortal Toil Onyx](http://www.wizard101central.com/wiki/Jewel:Mortal_Toil_Onyx)", inline: true },
				{ name: "May", value: "\`Stuff of Legends Peridot\`", inline: true },
				{ name: "June", value: "[Chi-Focus Citrine](http://www.wizard101central.com/wiki/Jewel:Chi-Focus_Citrine)", inline: true },
				{ name: "July", value: "[Undauntable Opal](http://www.wizard101central.com/wiki/Jewel:Undauntable_Opal)", inline: true },
				{ name: "August", value: "[Melting Point Ruby](http://www.wizard101central.com/wiki/Jewel:Melting_Point_Ruby)", inline: true },
				{ name: "September", value: "[Lifesaver Jade](http://www.wizard101central.com/wiki/Jewel:Lifesaver_Jade)", inline: true },
				{ name: "October", value: "[Mortal Toil Onyx](http://www.wizard101central.com/wiki/Jewel:Mortal_Toil_Onyx)", inline: true },
				{ name: "November", value: "[Bitter Winter Sapphire](http://www.wizard101central.com/wiki/Jewel:Bitter_Winter_Sapphire)", inline: true },
				{ name: "December", value: "[Sinking Feeling Amethyst](http://www.wizard101central.com/wiki/Jewel:Sinking_Feeling_Amethyst)", inline: true },
			)
			.setFooter("If you have any questions of concerns dm a member of the staff team.", "https://cdn.discordapp.com/icons/728774518918742140/357aeaac4ff4aa96020ed67db4bb08dc.webp?size=1024");

		message.channel.send(embed2);
		} else {
		message.channel.send("You do not have permission to use this command.");
    }
  },
};
