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
	name: "plextv",
	execute(message, args) {
		message.channel.send({
            "content": "",
            "tts": false,
            "embeds": [
              {
                "id": 716848101,
                "title": "<:plex:1206027616180764732> **PLEX TV**",
                "description": "<a:5716animatearrow:1205976616153387189> Doesn’t region lock your account\n<a:5716animatearrow:1205976616153387189> Can be done for both a new or existing account\n<a:5716animatearrow:1205976616153387189> 100% legal and safe, this product is legally purchased.\n\n<a:1162823593831444602:1204182596293103647>**<:plex:1206027616180764732> PLEX TV Subscriptions**\n> Plex TV 1 Month - **2.50€**\n> Plex TV 1 Year - **14.99€**\n> Plex TV LifeTime - **65.00€**\n\n<:4863info:1205977065497559092> Go to https://discord.com/channels/1183798224113389679/1188303607142027324 proceed to payment.\n",
                "color": 526087,
                "footer": {
                  "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                },
                "image": {
                  "url": "http://www.image-heberg.fr/files/17086074871836493642.jpg"
                },
                "fields": []
              }
            ],
            "components": [],
            "actions": {}
          });
	}
};
