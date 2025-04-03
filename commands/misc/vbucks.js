
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
	name: "vbucks",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "color": 526087,
                    "title": "<:vbucks:1204451598282133545>**VBUCKS**<:vbucks:1204451598282133545>",
                    "description": "> <:vbucks:1204451598282133545>**__PRICES__ :**\n\n> **<:vbucks:1204451598282133545> 1000 vbucks** = ``1.50€``\n> **<:vbucks:1204451598282133545> 2800 vbucks** = ``3.50€``\n> **<:vbucks:1204451598282133545> 5000 vbucks** = ``6€``\n> **<:vbucks:1204451598282133545> 13500vbucks** = ``15€``\n> **<:vbucks:1204451598282133545> 27000 vbucks** = ``25€``\n> **<:vbucks:1204451598282133545> 40500 vbucks** = ``35€``\n\n__*vbucks for your account.*__\n\n__*open ticket below, if you are interested.*__",
                    "footer": {
                        "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                    },
                    "image": {
                        "url": "https://i.ibb.co/WGF00Z0/Em-INKTz-X0-AALdk6-1.jpg"
                    }
                }
            ]
        });
	}
};
