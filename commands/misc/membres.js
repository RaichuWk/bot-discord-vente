/**
 * @file Sample membres command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "membres",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "title": "**<:membres:1187544885851603004>__DISCORD MEMBERS__<:membres:1187544885851603004>**",
                    "description": "__**PRICES :**__\n\n<a:1162823593831444602:1204182596293103647> 50 <:membres:1187544885851603004> <:580b57fcd9996e24bc43c44e:1204184443204538378> 0.40€ <:paypal:1187543553505763358>\n<a:1162823593831444602:1204182596293103647> 100<:membres:1187544885851603004> <:580b57fcd9996e24bc43c44e:1204184443204538378> 0.70€ <:paypal:1187543553505763358>\n<a:1162823593831444602:1204182596293103647> 500<:membres:1187544885851603004> <:580b57fcd9996e24bc43c44e:1204184443204538378> 2.50€ <:paypal:1187543553505763358>\n\n<:4863info:1205977065497559092> Go to https://discord.com/channels/1183798224113389679/1188303607142027324 proceed to payment.\n",
                    "color": 526087,
                    "footer": {
                        "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                    },
                    "image": {
                        "url": "http://www.image-heberg.fr/files/17086072483436688760.png"
                    }
                }
            ]
        });
	}
};
