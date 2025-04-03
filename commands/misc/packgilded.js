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
	name: "packgilded",
	execute(message, args) {
		message.channel.send({
            "embeds": [
                {
                    "title": "Gilded Elites Pack",
                    "color": 526087,
                    "image": {
                        "url": "http://www.image-heberg.fr/files/17086068391992674699.jpg"
                    },
                    "description": "<a:5716animatearrow:1205976616153387189> Doesn’t region lock your account\n<a:5716animatearrow:1205976616153387189> Can be done for both a new or existing account\n<a:5716animatearrow:1205976616153387189> 100% legal and safe, this product is legally purchased.\n\n\n<a:1162823593831444602:1204182596293103647>**Gilded Elites Pack** -  ~~17.16€~~** - 8.00€**\n‎ ‎ ‎ ‎ ‎ <a:1162823593831444602:1204182596293103647> **Lustrous Luxe Outfit**\n ‎ ‎ ‎‎ ‎ ‎ <a:1162823593831444602:1204182596293103647> **Hollowpoint Wings Back Bling**\n ‎ ‎ ‎‎ ‎ ‎ <a:1162823593831444602:1204182596293103647> **Gunslinger Calamity Outfit**\n ‎ ‎ ‎‎ ‎ ‎ <a:1162823593831444602:1204182596293103647>  **Eternal Longhorn Back Bling**\n ‎ ‎ ‎‎ ‎ ‎ <a:1162823593831444602:1204182596293103647> **Gunswinger Pickaxe**\n ‎ ‎ ‎‎ ‎ ‎ <a:1162823593831444602:1204182596293103647> **The Goldfish Outfit**\n ‎ ‎ ‎‎ ‎ ‎ <a:1162823593831444602:1204182596293103647> **Submariner's Safe Back Bling**\n ‎ ‎ ‎‎ ‎ ‎ <a:1162823593831444602:1204182596293103647> **Speargun Slasher Pickaxe**\n\n<:4863info:1205977065497559092> Go to https://discord.com/channels/1183798224113389679/1188303607142027324 proceed to payment."
                }
            ]
        });
	}
};
