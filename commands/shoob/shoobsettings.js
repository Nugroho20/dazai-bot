const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const active = await client.db.get(`activated.${message.guild.id}`);
  if(!active) return message.channel.send('Please activate first to use Shoob Category Commands');
    if(!message.guild.id.includes(active)) {
        return message.channel.send('Please activate first to use Shoob Category Commands');
    }
    const timer = await client.db.get(`timer.${message.guild.id}`)
    const logs = await client.db.get(`channel_${message.guild.id}`)
    const t4ping = await client.db.get(`t4ping_${message.guild.id}`)
    const t5ping = await client.db.get(`t5ping_${message.guild.id}`)
    const t6ping = await client.db.get(`t6ping_${message.guild.id}`)
    const user = message.author
    const timer1 = timer ? timer : "Disabled"
    const logs1 = `<#${logs}>`
    if (logs1 === "<#null>") {
      let logs1 = "` Disabled `"
    
    const pingt4 = t4ping ? t4ping : "`   -   `"
    const pingt5 = t5ping ? t5ping : "`   -   `"
    const pingt6 = t6ping ? t6ping : "`   -   `"

    const embed = new Discord.MessageEmbed()
    .setTitle("Shoob Settings | " + message.guild.name + "")
    .setColor("#FFFF33")
    .setThumbnail(message.guild.iconURL())
    .setDescription("Spawntimer: ` " + timer1 + " `\nCard Logs: " + logs1)
    .addField("__**Ping Roles**__", "\n<:IP_T4:757355465373122661> `Tier 4` • " + pingt4 + "\n<:IP_T5:757355431613169874> `Tier 5` • " + pingt5 + "\n<:IP_T6:757354520530386944> `Tier 6` • " + pingt6 + "",true)
    .setFooter(`Replying to ${user.tag}`, user.displayAvatarURL())
    message.channel.send(embed)
    }
    else {
      const pingt4 = t4ping ? t4ping : "`   -   `"
      const pingt5 = t5ping ? t5ping : "`   -   `"
      const pingt6 = t6ping ? t6ping : "`   -   `"
  
      const embed = new Discord.MessageEmbed()
      .setTitle("Shoob Settings | " + message.guild.name + "")
      .setColor("#FFFF33")
      .setThumbnail(message.guild.iconURL())
      .setDescription("Spawntimer: ` " + timer1 + " `\nCard Logs: " + logs1)
      .addField("__**Ping Roles**__", "\n<:IP_T4:757355465373122661> `Tier 4` • " + pingt4 + "\n<:IP_T5:757355431613169874> `Tier 5` • " + pingt5 + "\n<:IP_T6:757354520530386944> `Tier 6` • " + pingt6 + "",true)
      .setFooter(`Replying to ${user.tag}`, user.displayAvatarURL())
      message.channel.send(embed)
    }
}
exports.help = {
    name: "shoobsettings",
    name2: "ShoobSettings",
    description: "Showing status of shoob commands",
    usage: "shoobsettings <true/false>",
    example: "shoobsettings true"
  }
  
  exports.conf = {
    aliases: ["shoobstatus", "ss"],
    cooldown: 5
  }
