const Discord = require("discord.js");
const superagent = require('superagent');

exports.run = async (client, message, args) => {
    const msg = await message.channel.send('Looking for random Waifu image....')
    .then(i => i.delete({timeout: 2500}))
    const user = message.author
        const { body } = await superagent
        .get('https://waifu.pics/api/sfw/waifu');
        var image = body.url
        const embed = new Discord.MessageEmbed()
        .setColor("#FFFF33")
        .setAuthor(`WAIFU`)
        .setDescription(`[Download Image](${image})`)
        .setImage(image)
        .setFooter(`Replying to ${user.tag}`, user.displayAvatarURL())
        message.channel.send(embed)
}
exports.help = {
    name: "waifu",
    name2: "Waifu",
    description: "Showing random waifu images",
    usage: "waifu"
    }
    exports.conf = {
    aliases: [],
    cooldown: 10
} 