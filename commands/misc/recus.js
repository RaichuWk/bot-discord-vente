/**
 * @file Sample recu command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "recus",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "title": "__**PREUVE D'ACHAT**__",
                    "description": "\n***__Ticket de caisse__ :***\n\n**<a:1162823593831444602:1204182596293103647> Balanciaga, Burberry, Citadium, Fnac, GalerieLaFayette Forreal/Champs Elysées, Gucci, Louis Vuitton, Printemps.. **\n<:580b57fcd9996e24bc43c44e:1204184443204538378> 8.99€\n\n***__Mail de confirmation__ :***\n\n<a:1162823593831444602:1204182596293103647>** Syna World, Corteiz, Trapstar...**\n<:580b57fcd9996e24bc43c44e:1204184443204538378> 7.99€\n\n***__Nourriture__ :***\n\n**<a:1162823593831444602:1204182596293103647>MCDO (PDF/Tikcet)**\n<:580b57fcd9996e24bc43c44e:1204184443204538378> 6.99€\n\n*Les tickets de caisse sont expédiés à vos adresses ou sous **PDF** en moins de **48h**. Pour plus d'info ouvrez un ticket. Livraison dispo en **France Métropolitaine** *\n\n<:4863info:1205977065497559092> Allez dans https://discord.com/channels/1183798224113389679/1188303607142027324 pour procéder au paiement.\n",
                    "color": 526087,
                    "footer": {
                        "text": "©️2024  4SELLERSHOP. Tous droits réservés."
                    },
                    "image": {
                        "url": "https://i.ibb.co/xfr1Y0b/Nouveau-projet.png"
                    }
                }
            ]
        });
	}
};


