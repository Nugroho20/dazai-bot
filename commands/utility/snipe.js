const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("There are no deleted messages in this channel!")
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author, msg.avatar)
    .setDescription(msg.content)
    .setColor(client.colors.theme)
    .setTimestamp()
    if(msg.image) embed.setImage(msg.image);
    message.channel.send(embed)
}
exports.help = {
    name: "snipe",
    name2: "Snipe",
    description: "Get deleted messages",
    usage: "snipe"
    }
    exports.conf = {
    aliases: [],
    cooldown: 10
}