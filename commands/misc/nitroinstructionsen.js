/**
 * @file Sample nitro command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "nitroinfoen",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "color": 526087,
                    "footer": {
                        "text": "©️2024 4SELLERSHOP. All rights reserved."
                    },
                    "title": "<a:1112386582553559151:1187543837825052734> **Voici les intructions**",
                    "description": "> **Send us your email and Discord password. You will receive your Nitro within a maximum of 10 minutes after being assisted.**\n\n__*If you don't trust us, feel free to change the password to something fake like (Azerty123.) or similar.*__",
                    "image": {
                        "url": "https://i.ibb.co/8XLSRLw/banniere-discord-server-boosting.webp"
                    }
                }
            ]
        });
	}
};
