const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    const msg = client.editsnipe.get(message.channel.id)
    const avatar = client.editsnipe
    if(!msg) return message.channel.send("There are no edited messages in this channel!")
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author, msg.avatar)
    .setDescription(msg.content)
    .setColor('#FFFF33')
    .setTimestamp()
    message.channel.send(embed)
}
exports.help = {
    name: "editsnipe",
    name2: "EditSnipe",
    description: "Get edited messages",
    usage: "editsnipe"
    }
    exports.conf = {
    aliases: ["esnipe"],
    cooldown: 10
}