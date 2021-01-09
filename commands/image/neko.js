const Discord = require("discord.js");
const superagent = require('superagent');

exports.run = async (client, message, args) => {
    const msg = await message.channel.send('Looking for random Neko images....')
    .then(i => i.delete({timeout: 2500}))
    const user = message.author
        const { body } = await superagent
        .get('https://nekobot.xyz/api/image?type=neko');
        var image = body.message
        const embed = new Discord.MessageEmbed()
        .setColor("#FFFF33")
        .setAuthor(`NEKO`)
        .setDescription(`[Download Image](${image})`)
        .setImage(image)
        .setFooter(`Replying to ${user.tag}`, user.displayAvatarURL())
        message.channel.send(embed)
}
exports.help = {
    name: "neko",
    name2: "Neko",
    description: "Showing random neko images",
    usage: "neko"
    }
    exports.conf = {
    aliases: [],
    cooldown: 10
} 