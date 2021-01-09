const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
    if(!args.length) {
        return message.channel.send("<:Mayuri_Failed:772486728300101632>| Please Give the Suggestion").then(m => {
        m.react("❌")
        })
      }
      
      const argument = args.join(" ")                                                
      let user = message.author;
      let server = message.guild;
      let embed = new MessageEmbed()
      .setColor("#FFFF33")
      .addField('Suggestion:', `\nFrom user: ${user.tag}\nUserID: ${user.id}\nIn Server: ${server.name}`)
      .setDescription(`\`\`\`YAML
❯ ${argument}\`\`\``)
      .setTimestamp()
      
      
      client.channels.cache.get('768497526680191047').send(embed).then(m => {
        m.react("✅")
        m.react("❌")
      }).catch(err => {})
      
  
      
      message.channel.send({ embed: {
          "description": "Thanks for your suggestion! <:Woah:769139813226905611>",
          "color": "#FFFF33"
      }}).then(m => {
        m.react("✅")
      })
}
exports.help = {
    name: "suggest",
    name2: "Suggest",
    description: "Giving suggestion for mayuri-bot",
    usage: "suggest [suggestion]"
    }
    exports.conf = {
    aliases: ["suggestion"],
    cooldown: 60
}