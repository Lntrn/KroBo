const fs = require("fs");

const Channels = require("../utilities/channels.js");
const Format = require("../utilities/format.js");
const Roles = require("../utilities/roles.js");

const Jewels = require("./krogerjewels.js");

const Discord = require("discord.js");

module.exports = {
		name: "searchJewels",
    	aliases: ["search"],
		id: "",

	async execute(client, message, args) {

		const Config = JSON.parse(fs.readFileSync('./utilities/config.json', 'utf8'));

		if (!Config.debug) {
			message.delete({timeout: 1000});
		};

		if (message.member.roles.cache.has(Roles.admin.id) || message.member.hasPermission("ADMINISTRATOR")) {

            // Joining the arguments in to one long string
            let argsStr = args.join(" ");
            // Making the entire string lower case
            let input = argsStr.toLowerCase();
            // Splitting the string at each comma to get talent names
            let argsArray = input.split(", ");

			let i = 0;
			let toSend = [];

			for (arg of argsArray) {
				console.log(arg)

				i = 0;
                Jewels.filter(jewel => {
					console.log(arg)
					jewel.months.filter(month => {
						if (month.toLowerCase() === arg) {
							toSend.push(i);
						}
					});
					if (jewel.name.toLowerCase().includes(arg)) {
						toSend.push(i);
					}
					if (jewel.card == arg) {
						toSend.push(i);
					}
					i++;
				});
				//i = 0;
                //Jewels.filter(jewel => {
				//	if (jewel.name.toLowerCase() === arg) {
				//		toSend.push(i);
				//	}
				//	i++;
				//});
				
			}
			console.log(toSend)

			for (v of toSend) {
				generateEmbed(Config, client, message, args, v);
			}

		} else {
			message.channel.send("You do not have permission to use this command.");
    }
  },
};

async function generateEmbed(Config, client, message, args, v) {
	let months = Jewels[v].months.join(", ")
	let card;
	if (Jewels[v].card === 10) {
		card = "[Kroger $10 USA Gift Card](http://www.wizard101central.com/wiki/Item:Kroger_$10_USA_Gift_Card)"
	} else if (Jewels[v].card === 20) {
		card = "[Kroger $20 USA Gift Card](http://www.wizard101central.com/wiki/Item:Kroger_$20_USA_Gift_Card)"
	}

    let embed = new Discord.MessageEmbed()
    	.setColor("#2399fa")
        .setTitle(Jewels[v].name)
        .setImage(Jewels[v].image)
        //.setThumbnail(jewel.image)
        .addField("Months Available", months)
        .addField("From Card", card)

	if (Jewels[v].wiki) {
		embed.setURL(Jewels[v].wiki)
	}
	let triggers;
	if (Jewels[v].triggers) {
		triggers = Jewels[v].triggers;
		embed.addField("Maycast Triggers", triggers);
	}

	 embed.addField("Effect", Jewels[v].effect);

	 if (Config.debug) {
		console.log(Jewels[v]);
		console.log("Card: " + card);
		console.log("Triggers: " + triggers);
	}

	message.channel.send(embed)
}
