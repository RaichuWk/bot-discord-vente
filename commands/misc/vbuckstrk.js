
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
	name: "vbuckstrk",
	execute(message, args) {
		message.channel.send({
            "content": "",
            "tts": false,
            "embeds": [
              {
                "id": 58581848,
                "title": "<:vbucks:1204451598282133545>**VBUCKS**<:vbucks:1204451598282133545>",
                "description": "> <:vbucks:1204451598282133545>**__PRICES__ :**\n\n> **<:vbucks:1204451598282133545> 1000 vbucks** = ``4.50€``\n> **<:vbucks:1204451598282133545> 2800 vbucks** = ``12€``\n> **<:vbucks:1204451598282133545> 5000 vbucks** = ``19.99€``\n> **<:vbucks:1204451598282133545> 13500vbucks** = ``42€``\n> **<:vbucks:1204451598282133545> 27000 vbucks** = ``81€``\n\n__*vbucks for your account.*__\n\n**__*work currently.*__**\n\n*Prices increased following the epic game patch*\n\n<:4863info:1205977065497559092> Go to https://discord.com/channels/1183798224113389679/1188303607142027324 proceed to payment.\n",
                "color": 526087,
                "footer": {
                  "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                },
                "image": {
                  "url": "https://i.postimg.cc/CKCSH5VL/apps.png"
                },
                "fields": []
              }
            ],
            "components": [],
            "actions": {}
          });
	}
};
