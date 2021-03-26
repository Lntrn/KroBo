const fs = require("fs");

const Channels = require("../utilities/channels.js");
const Format = require("../utilities/format.js");
const Roles = require("../utilities/roles.js");

const Jewels = require("../utilities/krogerjewels.js");

const Discord = require("discord.js");

module.exports = {
		name: "listJewels",
    	aliases: ["list"],
		id: "",

	async execute(client, message, args) {

		const Config = JSON.parse(fs.readFileSync('./utilities/config.json', 'utf8'));

		if (message.member.roles.cache.has(Roles.admin.id) || message.member.hasPermission("ADMINISTRATOR")) {
	    	const deleteME = new Discord.MessageEmbed()
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

		    //message.channel.send(deleteME);

            for (jewel of Jewels) {

				let months = jewel.months.join(", ")
				let card;
				if (jewel.card === 10) {
					card = "[Kroger $10 USA Gift Card](http://www.wizard101central.com/wiki/Item:Kroger_$10_USA_Gift_Card)"
				} else if (jewel.card === 20) {
					card = "[Kroger $20 USA Gift Card](http://www.wizard101central.com/wiki/Item:Kroger_$20_USA_Gift_Card)"
				}

    			let embed = new Discord.MessageEmbed()
    				.setColor("#2399fa")
    			    .setTitle(jewel.name)
   			     	.setImage(jewel.image)
    			    //.setThumbnail(jewel.image)
    			    .addField("Months Available", months)
        			.addField("From Card", card)

				if (jewel.wiki) {
					embed.setURL(jewel.wiki)
				}
				let triggers;
				if (jewel.triggers) {
					triggers = jewel.triggers;
					embed.addField("Maycast Triggers", triggers);
				}

	 			embed.addField("Effect", jewel.effect);

	 			if (Config.debug) {
					console.log(jewel);
					console.log("Card: " + card);
					console.log("Triggers: " + triggers);
				}

				message.channel.send(embed)
            }

		} else {
		message.channel.send("You do not have permission to use this command.");
    }
  },
};
