
/**
 * @file Sample vbucks command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "vbucksnewprices",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "title": "<:vbucks:1204451598282133545>**VBUCKS**<:vbucks:1204451598282133545>",
                    "description": "> <:vbucks:1204451598282133545>**__PRICES__ :**\n\n> **<:vbucks:1204451598282133545> 1000 vbucks** = ``2.00€``\n> **<:vbucks:1204451598282133545> 2800 vbucks** = ``4.50€``\n> **<:vbucks:1204451598282133545> 5000 vbucks** = ``7.50€``\n> **<:vbucks:1204451598282133545> 13500vbucks** = ``15€``\n> **<:vbucks:1204451598282133545> 27000 vbucks** = ``28€``\n__*ask for more...*__\n\n__*100% customizable amount*__\n\n<:4863info:1205977065497559092> Go to https://discord.com/channels/1183798224113389679/1188303607142027324 proceed to payment.\n\n***__Temporary price__***\n",
                    "color": 526087,
                    "footer": {
                        "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                    },
                    "image": {
                        "url": "http://www.image-heberg.fr/files/17086065653280735211.png"
                    }
                }
            ]
        });
	}
};
