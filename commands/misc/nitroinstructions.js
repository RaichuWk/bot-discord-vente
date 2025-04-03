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
	name: "nitroinfo",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "color": 526087,
                    "footer": {
                        "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                    },
                    "title": "<a:1112386582553559151:1187543837825052734> **Voici les intructions**",
                    "description": "> **1. Envoyez nous votre mail et mot de passe discord. Vous aurez votre nitro au maximum 10min après avoir été pris en charge**\n\n__*Si vous n'avez pas confiance n'hésitez pas à changer le mot de passe avec quelque chose de bidon telle que (Azerty123.) ou autres.*__",
                    "image": {
                        "url": "https://i.ibb.co/8XLSRLw/banniere-discord-server-boosting.webp"
                    }
                }
            ]
        });
	}
};
