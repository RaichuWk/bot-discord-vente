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
	name: "comptes",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "title": "__**ACCOUNTS**__",
                    "description": "***Basic Premium :***\n\n**<:channels4_profile:1204209599759253524> NETFLIX <:580b57fcd9996e24bc43c44e:1204184443204538378> 5.00€/month**\n\n**<:apps:1204210220201672734> DISNEY+ <:580b57fcd9996e24bc43c44e:1204184443204538378> 5.00€/month**\n\n**<:spotify:1205527019966693406> SPOTIFY <:580b57fcd9996e24bc43c44e:1204184443204538378> 4.99€/month**\n\n<:youtubepremiumfeatured1:1205665413397090304> **YouTube <:580b57fcd9996e24bc43c44e:1204184443204538378> 3.80€/month**\n\n**Family Premium :**\n\n**<:channels4_profile:1204209599759253524> NETFLIX <:580b57fcd9996e24bc43c44e:1204184443204538378> 8.00€/month**\n\n**<:apps:1204210220201672734> DISNEY+ <:580b57fcd9996e24bc43c44e:1204184443204538378> 7.50€/month**\n\n**<:spotify:1205527019966693406> SPOTIFY <:580b57fcd9996e24bc43c44e:1204184443204538378> 8.00€/month**\n\n<:youtubepremiumfeatured1:1205665413397090304> **YouTube <:580b57fcd9996e24bc43c44e:1204184443204538378> 6.00€/month**\n\n**------------------------------**\n\n<:tlchargement1:1205679839672139867>** Crunchyoll <:580b57fcd9996e24bc43c44e:1204184443204538378> 15€/year**\n\n__*Accounts are associated with your email addresses. They therefore belong entirely to you. Payment is made per month.*__\n",
                    "color": 526087,
                    "footer": {
                        "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                    }
                }
            ]
        });
	}
};
