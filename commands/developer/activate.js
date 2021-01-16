exports.run = async (client, message, args) => {
  const active = client.db.get(`activated.${message.guild.id}`);
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<:Mayuri_Failed:772486728300101632>| You need ADMIN permission to perform this command!')

  let msg = await message.channel.send({ embed: {
    description: "Are you sure want to activate Shoob Commands",
    color: client.colors.theme
  }})
  await msg.react("✅")
  await msg.react("❌")
  const filter = (reaction, user) => (reaction.emoji.name === "✅" || reaction.emoji.name === "❌") && (user.id === message.author.id)
  
  msg.awaitReactions(filter, {max: 1}).then(collected => {
     
    if(collected.first().emoji.name === "✅") {
      msg.delete()
      if(active === `${message.guild.id}`) return message.channel.send('Shoob Commands already active for this server.');
     client.db.set(`activated.${message.guild.id}`, `${message.guild.id}`);
     message.channel.send({ embed: {
       description: "Shoob Commands is now `activated`",
       color: client.colors.success
     }})
     msg.reactions.removeAll()
    }
    
    if(collected.first().emoji.name === "❌") {
      msg.delete()
      message.channel.send({ embed: {
        description: "Command Cancelled",
        color: client.colors.failed
      }})
      msg.reactions.removeAll()
    }
  })
}

exports.help = {
    name: "activate",
    name2: "Shoob activate",
    description: "Activate shoob category on the server",
    usage: "activate",
    example: "activate"
  }
  
  exports.conf = {
    aliases: ["shoobactive],
    cooldown: 10
  }
