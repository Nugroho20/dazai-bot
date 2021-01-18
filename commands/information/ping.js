const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete({timeout: 15000});
  
  const msg = await message.channel.send('Ping...')
    .then(i => i.delete({timeout: 1500}))
    const user = message.author
    const embed = new MessageEmbed()
    .setDescription(`\`\`\`asciidoc\n= PONG 🏓 =
• Bot Ping :: ${Math.round(client.ws.ping)}ms
• Latency  :: ${msg.createdTimestamp - message.createdTimestamp}ms\`\`\``)
    .setColor(client.colors.theme)
    .setFooter("🏓")
    message.channel.send({ embed }).then(i => {i.delete({timeout: 15000})
  
};
exports.help = {
name: "ping",
name2: "Ping",
description: "Show API bot ping",
  usage: "ping"
};
exports.conf = {
aliases: [],
cooldown: 5
};
