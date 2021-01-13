const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  
  const msg = await message.channel.send('Ping...')
    .then(i => i.delete({timeout: 1500}))
    const user = message.author
    const embed = new MessageEmbed()
    .setDescription(`\`\`\`asciidoc\n= PONG 🏓 =
• Bot Ping :: ${Math.round(client.ws.ping)}ms
• Latency  :: ${msg.createdTimestamp - message.createdTimestamp}ms\`\`\``)
    .setColor(client.colors.theme)
    .setFooter(`user.displayAvatarURL())
    message.channel.send({ embed });
  
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
