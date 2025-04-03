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
	name: "payment",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "color": 526087,
                    "footer": {
                        "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                    },
                    "image": {
                        "url": "https://i.ibb.co/0CpXCw8/paypal-avis.png"
                    },
                    "title": "<:paypal:1187543553505763358>**paiement**",
                    "description": "> Veuillez envoyer l'argent à cette adresse paypal `raichu26onyt@gmail.com`.\n\n*Veillez à bien envoyer l'argent en ami proche. Aucun remboursement ne sera possible en cas d'erreur.<:paypal:1187543553505763358>*"
                }
            ]
        });
	}
};
