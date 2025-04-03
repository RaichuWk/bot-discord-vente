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
	name: "packchill",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "title": "Chill Vibez Pack",
                    "color": 526087,
                    "image": {
                        "url": "http://www.image-heberg.fr/files/17086067493288758239.png"
                    },
                    "description": "<a:5716animatearrow:1205976616153387189> Doesn’t region lock your account\n<a:5716animatearrow:1205976616153387189> Can be done for both a new or existing account\n<a:5716animatearrow:1205976616153387189> 100% legal and safe, this product is legally purchased.\n\n\n<a:1162823593831444602:1204182596293103647>**Chill Vibez Pack** -  ~~4.49€~~** - 2.49€**\n‎ ‎ ‎ ‎ ‎ <a:1162823593831444602:1204182596293103647> **Reverie Outfit**\n ‎ ‎ ‎‎ ‎ ‎ <a:1162823593831444602:1204182596293103647> **Dreamzy Handbag Back Bling**\n ‎ ‎ ‎‎ ‎ ‎ <a:1162823593831444602:1204182596293103647> **Reverie's Dreamstaff Pickaxe**\n ‎ ‎ ‎‎ ‎ ‎ <a:1162823593831444602:1204182596293103647> **Reverie Rave Wrap**\n ‎ ‎ ‎‎ ‎ ‎ <a:1162823593831444602:1204182596293103647>  **600 vBucks**\n\n<:4863info:1205977065497559092> Go to https://discord.com/channels/1183798224113389679/1188303607142027324 proceed to payment."
                }
            ]
        });
	}
};
