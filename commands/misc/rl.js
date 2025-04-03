
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
	name: "rl",
	execute(message, args) {
		message.channel.send({
            "content": "",
            "tts": false,
            "embeds": [
              {
                "id": 614133329,
                "color": 526087,
                "footer": {
                  "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                },
                "fields": [],
                "image": {
                  "url": "http://www.image-heberg.fr/files/17084629352291481857.jpg"
                },
                "title": "Rocket League <:776697551139241985:1209608772926963742> / <:Esports_Tokens_icon:1209609206433321010>",
                "description": "\n*__Credits :__*\n\n**500 <:776697551139241985:1209608772926963742>** = **3.00€**\n**1100 <:776697551139241985:1209608772926963742>** = **5.00€**\n**3000 <:776697551139241985:1209608772926963742>** = **9.50€**\n**6500 <:776697551139241985:1209608772926963742>** = **20.00€**\n**13000 <:776697551139241985:1209608772926963742>** = **37.50€**\n\n**----------------------------**\n\n*__Esports Tokens :__*\n\n**100 <:Esports_Tokens_icon:1209609206433321010>** = **0.60€**\n**600 <:Esports_Tokens_icon:1209609206433321010>** = **3.40€**\n**1200 <:Esports_Tokens_icon:1209609206433321010>** = **5.50€**\n**2500 <:Esports_Tokens_icon:1209609206433321010>** = **10.00€**"
              }
            ],
            "components": [],
            "actions": {}
          });
	}
};