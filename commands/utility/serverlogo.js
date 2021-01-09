const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  let avatar = message.guild.iconURL({dynamic: true, size: 4096});

  const embed = new Discord.MessageEmbed()
  .setTitle("Showing" + ` ${message.guild.name} Logo`)
  .setDescription(`[Download Image](${avatar})`)
  .setImage(avatar)
  .setColor("#FFFF33")
  .setFooter('Replying to ' + message.author.tag, message.author.displayAvatarURL());
  return message.channel.send({ embed })
}
exports.help = {
    name: "serverlogo",
    name2: "ServerLogo",
    description: "Showing server profile picutre/logo",
    usage: "serverlogo",
    example: "serverlogo"
  }
  
  exports.conf = {
    aliases: ["spfp"],
    cooldown: 5
  }