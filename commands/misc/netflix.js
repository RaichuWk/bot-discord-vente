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
	name: "netflix",
	execute(message, args) {
		message.channel.send({
      "content": "",
      "tts": false,
      "embeds": [
        {
          "id": 713245125,
          "title": "<:channels4_profile:1204209599759253524> **NETFLIX**",
          "description": "<a:5716animatearrow:1205976616153387189> Doesn’t region lock your account\n<a:5716animatearrow:1205976616153387189> Can be done for both a new or existing account\n<a:5716animatearrow:1205976616153387189> 100% legal and safe, this product is legally purchased\n\n<a:1162823593831444602:1204182596293103647>**<:channels4_profile:1204209599759253524> NETFLIX Subscriptions**\n> LifeTime ~~**Full access**~~ - **6.20€**\n\n> Standard 1 Month **Full access** - **6.99€** | ~~**13.49**~~\n> Premium 1 Month **Full access** - **8.50€** | ~~**17.99€**~~\n\n<:4863info:1205977065497559092> Go to https://discord.com/channels/1183798224113389679/1188303607142027324 proceed to payment.\n",
          "color": 526087,
          "footer": {
            "text": "©️2024  4SELLERSHOP. Tous droits réservés."
          },
          "image": {
            "url": "https://www.hebergeur-image.com/upload/103.50.33.107-65d94d7f462be.png"
          },
          "fields": []
        }
      ],
      "components": [],
      "actions": {}
    });
	}
};
