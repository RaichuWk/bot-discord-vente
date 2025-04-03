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
	name: "spotify",
	execute(message, args) {
		message.channel.send({
      "content": "",
      "tts": false,
      "embeds": [
        {
          "id": 614133329,
          "title": "<:spotify:1205527019966693406> **SPOTIFY**",
          "description": "<a:5716animatearrow:1205976616153387189> Doesn’t region lock your account\n<a:5716animatearrow:1205976616153387189> Can be done for both a new or existing account\n<a:5716animatearrow:1205976616153387189> 100% legal and safe, this product is legally purchased.\n\n<a:1162823593831444602:1204182596293103647>**<:spotify:1205527019966693406> SPOTIFY Subscriptions**\n> Individual LifeTime ~~**Full access**~~ - **2.50€**\n> Family LifeTime ~~**Full access**~~ - **4.99€**\n\n*__warranty__ :*\n> Individual 1 Month **Full access** - **2.99€ | ~~10.99€~~**\n> Family 1 Month **Full access** - **4.50€ | ~~17.99€~~**\n\n> Individual 6 Months **Full access** - **10.99€ | ~~65.94€~~**\n> Family 6 Months **Full access** - **17.99€ | ~~107.94€~~**\n\n> Individual Year **Full access** - **20.99€ | ~~131.88€~~**\n> Family Year **Full access** - **31.99€ | ~~215.88€~~**\n\n<:4863info:1205977065497559092> Go to https://discord.com/channels/1183798224113389679/1188303607142027324 proceed to payment.\n",
          "color": 526087,
          "footer": {
            "text": "©️2024  4SELLERSHOP. Tous droits réservés."
          },
          "image": {
            "url": "https://www.hebergeur-image.com/upload/103.50.33.107-65d94c77bbd6b.jpg"
          },
          "fields": []
        }
      ],
      "components": [],
      "actions": {}
    });
	}
};
