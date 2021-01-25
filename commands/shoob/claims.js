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
    .setColor("BLACK")
    .setDescription(`\n
<:atr_queenfitoria:803057916512567336> | Total Cards Claimed: \`${totalclaims}\`
<a:atr_bongo:803052248170233856> | Cards Claimed This Season: \`${seasonclaims}\`

**──────By Tier──────**
<:atr_t1:798846436593631252> x ${claimst1} \`|\` <:atr_t2:798846602101391380> x ${claimst2} \`|\` <:atr_t3:798846665414017075> x ${claimst3}
**────────────────**
<:atr_t4:798846783119818753> x ${claimst4} \`|\` <:atr_t5:798846842334478336> x ${claimst5} \`|\` <:atr_t6:798846909006741545> x ${claimst6}\n`)
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
    usage: "claims <@user>",
    example: "claims"
  }
  
  exports.conf = {
    aliases: ["shoobstats"],
    cooldown: 5
  }
