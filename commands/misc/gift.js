/**
 * @file Sample comptes command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "gift",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "color": 526087,
                    "title": "🎁<:vbucks:1204451598282133545>**GIFT**<:vbucks:1204451598282133545>",
                    "description": "> <:vbucks:1204451598282133545>**__PRICES__ :**\n\n> **<:vbucks:1204451598282133545> 200 vbucks** = ``0.50€``\n> **<:vbucks:1204451598282133545> 500 vbucks** = ``0.80€``\n> **<:vbucks:1204451598282133545> 1200 vbucks** = ``1.50€``\n> **<:vbucks:1204451598282133545> 1500 vbucks** = ``2.20€``\n> **<:vbucks:1204451598282133545> 1800 vbucks** = ``3€``\n> **<:vbucks:1204451598282133545> 2000 vbucks** = ``4.5€``\n\n__*Open ticket below, if you are interested.*__\n\n__*To be faster add__ `JamesAAAh` __on epic games*__\n\n__*Gifts can be sent **2 days** after acceptance as a friend.*__\n\n*+0.60€ per article due to Xbox patch (temporary)*\n",
                    "footer": {
                        "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                    },
                    "image": {
                        "url": "http://www.image-heberg.fr/files/17086071922967601122.jpg"
                    }
                }
            ]
        });
	}
};
