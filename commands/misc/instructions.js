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
	name: "instructions",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "color": 526087,
                    "footer": {
                        "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                    },
                    "image": {
                        "url": "https://i.ibb.co/5j283YR/d092e9261e936c22a0fcded668406ea0-1673630571.jpg"
                    },
                    "title": "<:vbucks:1204451598282133545>**Voici les intructions**",
                    "description": "> **1. Pour commencer allez sur le lien `https://signup.live.com/` et crée un compte ou connectez vous.**\n\n> **2. Ensuite, rendez-vous sur le lien `https://www.epicgames.com/login` et connectez vous à votre compte.**\n\n> **3.Par la suite, accédez à votre compte et rendez-vous dans l'onglet \"applications & comptes\". Allez sur compte et associez votre compte Microsft (celui que vous venez de crée)**\n\n> 4. **Enfin envoyez nous le mail et  le mot de passe du compte microsoft**\n\n__*Vous n'avez pas besoin d'xbox.*__\n __*Les vBucks seront dispo immédiatement une fois que nous vous le dirons.*__\n"
                }
            ]
        });
	}
};
