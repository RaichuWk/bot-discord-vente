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
	name: "nitro",
	execute(message, args) {
		message.channel.send({
			"content": "",
			"tts": false,
			"embeds": [
			  {
				"id": 443507334,
				"title": "***<a:1112386582553559151:1187543837825052734> __NITRO__ <a:1112386582553559151:1187543837825052734> ***",
				"description": "__**DISCORD NITRO 1 Month (login)**__\n<a:1162823593831444602:1204182596293103647> Nitro Basic <:580b57fcd9996e24bc43c44e:1204184443204538378> 1.80€ <a:1058038121037570058:1187543832963850250>\n<a:1162823593831444602:1204182596293103647> Nitro Boost <:580b57fcd9996e24bc43c44e:1204184443204538378> 3.70€ <a:nitro_boost:1187543648657752084><a:1080098062304817172:1187543835052609577>\n\n__**DISCORD Boosts**__\n<a:1162823593831444602:1204182596293103647>14 Boosts <:580b57fcd9996e24bc43c44e:1204184443204538378> 3.99€ <a:1080098062304817172:1187543835052609577>\n\n\n__**DISCORD NITRO 1 YEAR (login)**__\n<a:1162823593831444602:1204182596293103647> Nitro Basic <:580b57fcd9996e24bc43c44e:1204184443204538378> 14.99€ <a:1058038121037570058:1187543832963850250>\n<a:1162823593831444602:1204182596293103647> Nitro Boost <:580b57fcd9996e24bc43c44e:1204184443204538378> 24.99€ <a:nitro_boost:1187543648657752084><a:1080098062304817172:1187543835052609577>\n\n<:4863info:1205977065497559092> Go to https://discord.com/channels/1183798224113389679/1188303607142027324 proceed to payment.\n",
				"color": 526087,
				"footer": {
				  "text": "©️2024  4SELLERSHOP. Tous droits réservés."
				},
				"image": {
				  "url": "https://www.hebergeur-image.com/upload/88.162.89.192-65d7df036975d.jpg"
				},
				"fields": []
			  }
			],
			"components": [],
			"actions": {}
		  });
	}
};
