const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user;
  let toFind = args.join(" ").toLowerCase();

  if (message.mentions.members.first()) {
    user = message.mentions.members.first();
  } else if (args[0]) {
    user = await message.guild.members.cache.find(member => {
      return member.displayName.toLowerCase().includes(toFind) || member.user.tag.toLowerCase().slice(0, 5).includes(toFind) || member.user.id === toFind
    });
  } else {
    user = message.member;
  }

  if (!user) {
    return message.channel.send("<:Shrug:769943946092609566> | Unable to find this person!")
  }

  let avatar = user.user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 });

  const embed = new Discord.MessageEmbed()
  .setTitle("Avatar of" + ` ${user.user.tag} avatar`)
  .setDescription(`[Download Image](${avatar})`)
  .setImage(avatar)
  .setColor("RANDOM")
  .setFooter('Replying to ' + message.author.tag, message.author.displayAvatarURL());
  return message.channel.send({ embed })
}
exports.help = {
    name: "avatar",
    name2: "Avatar",
    description: "Showing other or your avatar/profile picutre",
    usage: "avatar <@user>",
    example: "avatar @ShiroLine#0001"
  }
  
  exports.conf = {
    aliases: ["av"],
    cooldown: 5
  }
