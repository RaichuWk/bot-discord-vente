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
	name: "adobe",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "color": 526087,
                    "footer": {
                        "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                    },
                    "title": "<:images:1205983035263287366> **ADOBE**",
                    "description": "<a:5716animatearrow:1205976616153387189> Doesn’t region lock your account\n<a:5716animatearrow:1205976616153387189> Can be done for both a new or existing account\n<a:5716animatearrow:1205976616153387189> 100% legal and safe, this product is legally purchased from Adobe themselves\n\n<a:1162823593831444602:1204182596293103647>**<:images:1205983035263287366> AdobeCC + 1 To Cloud**\n>  AdobeCC *1 Month* - **15.00€**\n\n<:4863info:1205977065497559092> Go to https://discord.com/channels/1183798224113389679/1188303607142027324 proceed to payment.\n",
                    "image": {
                        "url": "http://www.image-heberg.fr/files/17086072901809384804.jpg"
                    }
                }
            ]
        });
	}
};
