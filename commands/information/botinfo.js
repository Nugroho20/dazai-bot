const { version, MessageEmbed } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os');
const ms = require("ms");

exports.run = (client, message, args) => { // eslint-disable-line no-unused-vars
  message.delete({timeout: 15000});

  // function data size
  function formatBytes(bytes) {
		if (bytes === 0) return '0 Bytes'
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		const i = Math.floor(Math.log(bytes) / Math.log(1024))
		return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`
  }
  
  const clientservers = client.guilds.cache.size
  const clientchannel = client.channels.cache.size
  const user = message.author
  const embed = new MessageEmbed()
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
  .addField("Bot Info:", `\`\`\`YAML\n
❯ Name: ${client.user.username}
❯ Owmer: @Jin-dae#0017
❯ Ping: ${Math.round(client.ws.ping)}ms\`\`\``)
  .addField("Presence:", `\`\`\`YAML\n
❯ Users    : ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0).toLocaleString()}
❯ Servers  : ${clientservers.toLocaleString()}
❯ Channels : ${clientchannel.toLocaleString()}\`\`\``)
  .addField("System:", `\`\`\`yaml\n
❯ Platform: ${os.type()}
❯ Memory Usage: ${formatBytes(process.memoryUsage().heapUsed)}
❯ Memory Total: ${formatBytes(process.memoryUsage().heapTotal)}
❯ Uptime: ${ms(os.uptime() * 1000, { long: true })}
❯ Library Used: Discord.js (v${version})\`\`\``)
  .setColor(client.colors.theme)
  .setFooter(`Replying to ${user.tag}`, user.displayAvatarURL())
  message.channel.send(embed).then(i => {
    i.delete({timeout: 20000})
})

}; 

 exports.help = {
    name: "botinfo",
    name2: "BotInfo",
    description: "Showing bot information",
    usage: "botinfo"
};

exports.conf = {
     aliases: [],
     cooldown: 5
};
   
