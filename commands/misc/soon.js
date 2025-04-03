
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
	name: "soon",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "color": 526087,
                    "footer": {
                        "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                    },
                    "title": "<a:loading23:1204487357450166332> **SOON** <a:loading23:1204487357450166332>",
                    "image": {
                        "url": "http://www.image-heberg.fr/files/1708607525421242475.png"
                    }
                }
            ]
        });
	}
};
