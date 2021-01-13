const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  const active = await client.db.get(`activated.${message.guild.id}`);
  if(!active) return message.channel.send('Please activate first to use Shoob Category Commands');
    if(!message.guild.id.includes(active)) {
        return message.channel.send('Please activate first to use Shoob Category Commands');
    }
    let user = message.mentions.users.first() || message.author
    let haveclaimed = await client.db.get(`claiming_${message.guild.id}_${user}`) ? await client.db.get(`claiming_${message.guild.id}_${user}`) : false
    const seasonclaims = await client.db.get(`seasonclaim_${message.guild.id}_${user}`) ? await client.db.get(`seasonclaim_${message.guild.id}_${user}`) : '0'
    const totalclaims = await client.db.get(`claims_${message.guild.id}_${user}`) ? await client.db.get(`claims_${message.guild.id}_${user}`) : '0'
    const claimst1 = await client.db.get(`claimst1_${message.guild.id}_${user}`) ? await client.db.get(`claimst1_${message.guild.id}_${user}`) : '0'
    const claimst2 = await client.db.get(`claimst2_${message.guild.id}_${user}`) ? await client.db.get(`claimst2_${message.guild.id}_${user}`) : '0'
    const claimst3 = await client.db.get(`claimst3_${message.guild.id}_${user}`) ? await client.db.get(`claimst3_${message.guild.id}_${user}`) : '0'
    const claimst4 = await client.db.get(`claimst4_${message.guild.id}_${user}`) ? await client.db.get(`claimst4_${message.guild.id}_${user}`) : '0'
    const claimst5 = await client.db.get(`claimst5_${message.guild.id}_${user}`) ? await client.db.get(`claimst5_${message.guild.id}_${user}`) : '0'
    const claimst6 = await client.db.get(`claimst6_${message.guild.id}_${user}`) ? await client.db.get(`claimst6_${message.guild.id}_${user}`) : '0'
    if (haveclaimed === true) {
      const embed = new MessageEmbed()
    .setTitle(':pencil: | ' + user.username + '`s Card Stats')
    .setURL('https://animesoul.com/user/' + user.id + '')
    .setColor("#FFFF33")
    .setDescription(`\n
<:Badge:772478575122579466> | Total Cards Claimed: \`${totalclaims}\`
<:Hypesquad:772403036386623498> | Cards Claimed This Season: \`${seasonclaims}\`

**──────By Tier──────**
<:IP_T1:757355565981761669> x ${claimst1} \`|\` <:IP_T2:757355535828779069> x ${claimst2} \`|\` <:IP_T3:757355503939616850> x ${claimst3}
**────────────────**
<:IP_T4:757355465373122661> x ${claimst4} \`|\` <:IP_T5:757355431613169874> x ${claimst5} \`|\` <:IP_T6:757354520530386944> x ${claimst6}\n`)
    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
    .setFooter('Replying to ' + message.author.tag, message.author.displayAvatarURL());
    message.channel.send({ embed })
    }
    else {
      message.channel.send({ embed: {
        "description": `:red_circle: | **${user.username}** haven\'t claimed any cards yet`,
        "color": "RED"
      }});
    }
}
exports.help = {
    name: "claims",
    name2: "Claims",
    description: "Showing user claims stats",
    usage: "m!claims <@user>",
    example: "claims"
  }
  
  exports.conf = {
    aliases: ["shoobstats"],
    cooldown: 10
  }
