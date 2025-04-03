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
	name: "disney+",
	execute(message, args) {
		message.channel.send({
            "content": "",
            "tts": false,
            "embeds": [
              {
                "id": 859961008,
                "title": "<:apps:1204210220201672734> **DISNEY +**",
                "description": "<a:5716animatearrow:1205976616153387189> Doesn’t region lock your account\n<a:5716animatearrow:1205976616153387189> Can be done for both a new or existing account\n<a:5716animatearrow:1205976616153387189> 100% legal and safe, this product is legally purchased\n\n<a:1162823593831444602:1204182596293103647>**<:apps:1204210220201672734> DISNEY + Subscriptions**\n> LifeTime ~~**Full access**~~ - **3.80€**\n\n>  Basic 1 Month **Full access** - **4.99€** | ~~**8.99€**~~\n> Premium 1 Month **Full access** - **9.99€** | ~~**11.99€**~~\n> Basic Year **Full access** - **27.99€** | ~~**119.90€**~~\n\n<:4863info:1205977065497559092> Go to https://discord.com/channels/1183798224113389679/1188303607142027324 proceed to payment.\n",
                "color": 526087,
                "footer": {
                  "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                },
                "image": {
                  "url": "https://www.hebergeur-image.com/upload/88.162.89.192-65da666bd93c3.jpg"
                },
                "fields": []
              }
            ],
            "components": [],
            "actions": {}
          });
	}
};
