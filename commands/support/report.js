const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
    if(!args.length) {
        return message.channel.send(":red_circle:| Please Give the Report details, e.g: `m!report Bug on command anime (it doesn't appear/showing anime details)`").then(m => {
        m.react("❌")
        })
      }
      
      const argument = args.join(" ")                                                
      let user = message.author;
      let server = message.guild;
      let embed = new MessageEmbed()
      .setColor(client.colors.theme)
      .addField('Report:', `\nFrom user: ${user.tag}\nUserID: ${user.id}\nIn Server: ${server.name}`)
      .setDescription(`\`\`\`YAML
❯ ${argument}\`\`\``)
      .setTimestamp()
      
      
      client.channels.cache.get('803441590545678380').send(embed).then(m => {
        m.react("✅")
        m.react("❌")
      }).catch(err => {})
      
  
      
      message.channel.send({ embed: {
          "description": "Thanks for Reporting. Your report will be responded soon.",
          "color": client.colors.theme
      }}).then(m => {
        m.react("✅")
      })
}
exports.help = {
    name: "report",
    name2: "Report",
    description: "Reporting something like BUG/etc",
    usage: "report [report]"
    }
    exports.conf = {
    aliases: ["bug"],
    cooldown: 60
}
