const Discord = require("discord.js");
const MayuriClient = require("./handler/Client.js");
const client = new MayuriClient({
  disableMentions: 'everyone',
  fetchAllMembers: true
});
const { token } = require('./config.json')

//READ DB
client.on('message', async message => {
  const activated = await client.db.get(`activated.${message.guild.id}`);
  if(!activated) return;
  if(message.guild.id.includes(activated)) {
  if (message.author.id === "673362753489993749") {
    let checkEmbed = message.embeds[0]
    if (!checkEmbed) return;
    if (!checkEmbed.title) return;
    if (!checkEmbed.title.includes(" Tier:")) return;
    const linkimage = checkEmbed.image.proxyURL
    const namecard = checkEmbed.title.replace("Tier: ", "T")
    const tieraja = checkEmbed.title.split(":")[1]
    const tieraja1 = tieraja.replace(" ", "")
    const link = message.url
     client.db.set(`lastspawn_${message.guild.id}`, `${new Date()}`)
     client.db.set(`tieraja_${message.guild.id}`, `${tieraja1}`)
    if (checkEmbed && checkEmbed.title.includes(" Tier: 1")) {
       client.db.set(`type_${message.guild.id}`, 'tier1')
	   client.db.set(`lastspawnt1_${message.guild.id}`, `${new Date()}`)
       client.db.set(`imagerecentt1_${message.guild.id}`, linkimage)
       client.db.set(`namecard_${message.guild.id}`, namecard)
       client.db.set(`linkmsg_${message.guild.id}`, link)
    }
    if (checkEmbed && checkEmbed.title.includes(" Tier: 2")) {
       client.db.set(`type_${message.guild.id}`, 'tier2')
	   client.db.set(`lastspawnt2_${message.guild.id}`, `${new Date()}`)
       client.db.set(`imagerecentt2_${message.guild.id}`, linkimage)
       client.db.set(`namecard_${message.guild.id}`, namecard)
       client.db.set(`linkmsg_${message.guild.id}`, link)
    }
    if (checkEmbed && checkEmbed.title.includes(" Tier: 3")) {
       client.db.set(`type_${message.guild.id}`, 'tier3')
	   client.db.set(`lastspawnt3_${message.guild.id}`, `${new Date()}`)
       client.db.set(`imagerecentt3_${message.guild.id}`, linkimage)
       client.db.set(`namecard_${message.guild.id}`, namecard)
       client.db.set(`linkmsg_${message.guild.id}`, link)
    }
    if (checkEmbed && checkEmbed.title.includes(" Tier: 4")) {
       client.db.set(`type_${message.guild.id}`, 'tier4')
	   client.db.set(`lastspawnt4_${message.guild.id}`, `${new Date()}`)
       client.db.set(`imagerecentt4_${message.guild.id}`, linkimage)
       client.db.set(`namecard_${message.guild.id}`, namecard)
       client.db.set(`linkmsg_${message.guild.id}`, link)
    }
    if (checkEmbed && checkEmbed.title.includes(" Tier: 5")) {
       client.db.set(`type_${message.guild.id}`, 'tier5')
	   client.db.set(`lastspawnt5_${message.guild.id}`, `${new Date()}`)
       client.db.set(`imagerecentt5_${message.guild.id}`, linkimage)
       client.db.set(`namecard_${message.guild.id}`, namecard)
       client.db.set(`linkmsg_${message.guild.id}`, link)
    }
    if (checkEmbed && checkEmbed.title.includes(" Tier: 6")) {
       client.db.set(`type_${message.guild.id}`, 'tier6')
	   client.db.set(`lastspawnt6_${message.guild.id}`, `${new Date()}`)
       client.db.set(`imagerecentt6_${message.guild.id}`, linkimage)
       client.db.set(`namecard_${message.guild.id}`, namecard)
       client.db.set(`linkmsg_${message.guild.id}`, link)
    }
  }
}else {
  return;
}
});

client.on('message', async message => {
  const activated = await client.db.get(`activated.${message.guild.id}`);
  if(!activated) return;
  if(message.guild.id.includes(activated)) {
  if (message.author.id === "673362753489993749") {
    let Embed = message.embeds[0]
    if (!Embed) return;
    if (!Embed.description) return;
    
    if (Embed && Embed.description.includes("got the card!")) {

    const tier =  await client.db.get(`type_${message.guild.id}`)
    const tieraja =  await client.db.get(`tieraja_${message.guild.id}`)
    const link =  await client.db.get(`linkmsg_${message.guild.id}`)
    const imaget1 =  await client.db.get(`imagerecentt1_${message.guild.id}`)
    const imaget2 =  await client.db.get(`imagerecentt2_${message.guild.id}`)
    const imaget3 =  await client.db.get(`imagerecentt3_${message.guild.id}`)
    const imaget4 =  await client.db.get(`imagerecentt4_${message.guild.id}`)
    const imaget5 =  await client.db.get(`imagerecentt5_${message.guild.id}`)
    const imaget6 =  await client.db.get(`imagerecentt6_${message.guild.id}`)
    const chnl =  await client.db.get(`channel_${message.guild.id}`)
    const log =  await client.db.get(`shooblog_${message.guild.id}`)
    const servername = message.channel.name

        const realnamecard = Embed.description.split("`")[1]
        const issue = Embed.description.split("`")[3]
        const args = Embed.description.split(" ")
        const user = args[1]
         client.db.push(`recentclaim_${message.guild.id}`, `> ${user}`)
         client.db.push(`recentcard_${message.guild.id}`, `**\`T${tieraja}\` •** [${realnamecard} V${issue}](${link})`)
        if (tier == "tier1") {
           client.db.add(`claims_${message.guild.id}_${user}`, 1)
           client.db.add(`seasonclaim_${message.guild.id}_${user}`, 1)
           client.db.add(`claimst1_${message.guild.id}_${user}`, 1)
           client.db.set(`claiming_${message.guild.id}_${user}`, true)
           client.db.push(`recentclaimt1_${message.guild.id}`, `> ${user}`)
           client.db.push(`recentcardt1_${message.guild.id}`, `**•** [${realnamecard} V${issue}](${link})`)
          //Shoob log
          const embed = new Discord.MessageEmbed()
          .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
          .setDescription(`${user} claimed [${realnamecard} V${issue}](${link})`)
          .setFooter(servername)
          .setColor("#95A5A6")
          .setThumbnail(imaget1)
          .setTimestamp()
          if (log === "true") {
            client.channels.cache.get(chnl).send(embed);
          }
          else {
            return;
          }
        }
        if (tier == "tier2") {
           client.db.add(`claims_${message.guild.id}_${user}`, 1)
           client.db.add(`seasonclaim_${message.guild.id}_${user}`, 1)
           client.db.add(`claimst2_${message.guild.id}_${user}`, 1)
           client.db.set(`claiming_${message.guild.id}_${user}`, true)
           client.db.push(`recentclaimt2_${message.guild.id}`, `> ${user}`)
           client.db.push(`recentcardt2_${message.guild.id}`, `**•** [${realnamecard} V${issue}](${link})`)
           //Shoob log
           const embed = new Discord.MessageEmbed()
           .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
           .setDescription(`${user} claimed [${realnamecard} V${issue}](${link})`)
           .setFooter(servername)
           .setColor("#2ECC71")
           .setThumbnail(imaget2)
           .setTimestamp()
           if (log === "true") {
             client.channels.cache.get(chnl).send(embed);
           }
           else {
             return;
           }
        }
        if (tier == "tier3") {
           client.db.add(`claims_${message.guild.id}_${user}`, 1)
           client.db.add(`seasonclaim_${message.guild.id}_${user}`, 1)
           client.db.add(`claimst3_${message.guild.id}_${user}`, 1)
           client.db.set(`claiming_${message.guild.id}_${user}`, true)
           client.db.push(`recentclaimt3_${message.guild.id}`, `> ${user}`)
           client.db.push(`recentcardt3_${message.guild.id}`, `**•** [${realnamecard} V${issue}](${link})`)
           //Shoob log
           const embed = new Discord.MessageEmbed()
           .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
           .setDescription(`${user} claimed [${realnamecard} V${issue}](${link})`)
           .setFooter(servername)
           .setColor("#3498DB")
           .setThumbnail(imaget3)
           .setTimestamp()
           if (log === "true") {
             client.channels.cache.get(chnl).send(embed);
           }
           else {
             return;
           }
        }
        if (tier == "tier4") {
           client.db.add(`claims_${message.guild.id}_${user}`, 1)
           client.db.add(`seasonclaim_${message.guild.id}_${user}`, 1)
           client.db.add(`claimst4_${message.guild.id}_${user}`, 1)
           client.db.set(`claiming_${message.guild.id}_${user}`, true)
           client.db.push(`recentclaimt4_${message.guild.id}`, `> ${user}`)
           client.db.push(`recentcardt4_${message.guild.id}`, `**•** [${realnamecard} V${issue}](${link})`)
           //Shoob log
           const embed = new Discord.MessageEmbed()
           .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
           .setDescription(`${user} claimed [${realnamecard} V${issue}](${link})`)
           .setFooter(servername)
           .setColor("#AE04D3")
           .setThumbnail(imaget4)
           .setTimestamp()
           if (log === "true") {
             client.channels.cache.get(chnl).send(embed);
           }
           else {
             return;
           }
        }
        if (tier == "tier5") {
           client.db.add(`claims_${message.guild.id}_${user}`, 1)
           client.db.add(`seasonclaim_${message.guild.id}_${user}`, 1)
           client.db.add(`claimst5_${message.guild.id}_${user}`, 1)
           client.db.set(`claiming_${message.guild.id}_${user}`, true)
           client.db.push(`recentclaimt5_${message.guild.id}`, `> ${user}`)
           client.db.push(`recentcardt5_${message.guild.id}`, `**•** [${realnamecard} V${issue}](${link})`)
           //Shoob log
           const embed = new Discord.MessageEmbed()
           .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
           .setDescription(`${user} claimed [${realnamecard} V${issue}](${link})`)
           .setFooter(servername)
           .setColor("#FADB03")
           .setThumbnail(imaget5)
           .setTimestamp()
           if (log === "true") {
             client.channels.cache.get(chnl).send(embed);
           }
           else {
             return;
           }
        }
        if (tier == "tier6"){
           client.db.add(`claims_${message.guild.id}_${user}`, 1)
           client.db.add(`seasonclaim_${message.guild.id}_${user}`, 1)
           client.db.add(`claimst6_${message.guild.id}_${user}`, 1)
           client.db.set(`claiming_${message.guild.id}_${user}`, true)
           client.db.push(`recentclaimt6_${message.guild.id}`, `> ${user}`)
           client.db.push(`recentcardt6_${message.guild.id}`, `**•** [${realnamecard} V${issue}](${link})`)
           //Shoob log
           const embed = new Discord.MessageEmbed()
           .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
           .setDescription(`${user} claimed [${realnamecard} V${issue}](${link})`)
           .setFooter(servername)
           .setColor("#E74C3C")
           .setThumbnail(imaget6)
           .setTimestamp()
           if (log === "true") {
             client.channels.cache.get(chnl).send(embed);
           }
           else {
             return;
           }
        }
        else {
          return;
        }
    }
  }
}else {
  return;
}
});

client.on("message", async message => {
  const activated = await client.db.get(`activated.${message.guild.id}`);
  if(!activated) return;
  if(message.guild.id.includes(activated)) {
  if (message.author.id === "673362753489993749") {
    const chnl =  await client.db.get(`channel_${message.guild.id}`)
    const log =  await client.db.get(`shooblog_${message.guild.id}`)
    const tier =  await client.db.get(`type_${message.guild.id}`)
    const tieraja =  await client.db.get(`tieraja_${message.guild.id}`)
    const name =  await client.db.get(`namecard_${message.guild.id}`)
    const link =  await client.db.get(`linkmsg_${message.guild.id}`)
    const imaget1 =  await client.db.get(`imagerecentt1_${message.guild.id}`)
    const imaget2 =  await client.db.get(`imagerecentt2_${message.guild.id}`)
    const imaget3 =  await client.db.get(`imagerecentt3_${message.guild.id}`)
    const imaget4 =  await client.db.get(`imagerecentt4_${message.guild.id}`)
    const imaget5 =  await client.db.get(`imagerecentt5_${message.guild.id}`)
    const imaget6 =  await client.db.get(`imagerecentt6_${message.guild.id}`)
    const servername = message.channel.name
    if (message.content.includes("Looks like no one got the card")) {
         client.db.push(`recentclaim_${message.guild.id}`, `> \`  -  \``)
         client.db.push(`recentcard_${message.guild.id}`, `**\`T${tieraja}\` •** [${name}](${link})`)
      if (tier == "tier1") {
         client.db.push(`recentclaimt1_${message.guild.id}`, `> \`  -  \``)
         client.db.push(`recentcardt1_${message.guild.id}`, `**•** [${name}](${link})`)
         await client.db.delete(`type_${message.guild.id}`)
       //Shoob log
       const embed = new Discord.MessageEmbed()
       .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
       .setDescription(`[${name}](${link}) Despawned`)
       .setFooter(servername)
       .setColor("RED")
       .setThumbnail(imaget1)
       .setTimestamp()
       if (log === "true") {
         client.channels.cache.get(chnl).send(embed);
       }
       else {
         return;
       }
      }
      if (tier == "tier2") {
         client.db.push(`recentclaimt2_${message.guild.id}`, `> \`  -  \``)
         client.db.push(`recentcardt2_${message.guild.id}`, `**•** [${name}](${link})`)
         await client.db.delete(`type_${message.guild.id}`)
       //Shoob log
       const embed = new Discord.MessageEmbed()
       .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
       .setDescription(`[${name}](${link}) Despawned`)
       .setFooter(servername)
       .setColor("RED")
       .setThumbnail(imaget2)
       .setTimestamp()
       if (log === "true") {
         client.channels.cache.get(chnl).send(embed);
       }
       else {
         return;
       }
      }
      if (tier == "tier3") {
         client.db.push(`recentclaimt3_${message.guild.id}`, `> \`  -  \``)
         client.db.push(`recentcardt3_${message.guild.id}`, `**•** [${name}](${link})`)
         await client.db.delete(`type_${message.guild.id}`)
        //Shoob log
        const embed = new Discord.MessageEmbed()
        .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
        .setDescription(`[${name}](${link}) Despawned`)
        .setFooter(servername)
        .setColor("RED")
        .setThumbnail(imaget3)
        .setTimestamp()
        if (log === "true") {
          client.channels.cache.get(chnl).send(embed);
        }
        else {
          return;
        }
      }
      if (tier == "tier4") {
         client.db.push(`recentclaimt4_${message.guild.id}`, `> \`  -  \``)
         client.db.push(`recentcardt4_${message.guild.id}`, `**•** [${name}](${link})`)
         await client.db.delete(`type_${message.guild.id}`)
        //Shoob log
        const embed = new Discord.MessageEmbed()
        .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
        .setDescription(`[${name}](${link}) Despawned`)
        .setFooter(servername)
        .setColor("RED")
        .setThumbnail(imaget4)
        .setTimestamp()
        if (log === "true") {
          client.channels.cache.get(chnl).send(embed);
        }
        else {
          return;
        }
      }
      if (tier == "tier5") {
         client.db.push(`recentclaimt5_${message.guild.id}`, `> \`  -  \``)
         client.db.push(`recentcardt5_${message.guild.id}`, `**•** [${name}](${link})`)
         await client.db.delete(`type_${message.guild.id}`)
        //Shoob log
        const embed = new Discord.MessageEmbed()
        .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
        .setDescription(`[${name}](${link}) Despawned`)
        .setFooter(servername)
        .setColor("RED")
        .setThumbnail(imaget5)
        .setTimestamp()
        if (log === "true") {
          client.channels.cache.get(chnl).send(embed);
        }
        else {
          return;
        }
      }
      if (tier == "tier6") {
         client.db.push(`recentclaimt6_${message.guild.id}`, `> \`  -  \``)
         client.db.push(`recentcardt6_${message.guild.id}`, `**•** [${name}](${link})`)
         await client.db.delete(`type_${message.guild.id}`)
        //Shoob log
        const embed = new Discord.MessageEmbed()
        .setAuthor("Shoob", "https://cdn.discordapp.com/avatars/673362753489993749/e6b0d793ad45ec4028eee10aa06f00af.png?size=1024")
        .setDescription(`[${name}](${link}) Despawned`)
        .setFooter(servername)
        .setColor("RED")
        .setThumbnail(imaget6)
        .setTimestamp()
        if (log === "true") {
          client.channels.cache.get(chnl).send(embed);
        }
        else {
          return;
        }
      }
    }
  }
}else {
  return;
}
});

client.on("message", async message => {
  const activated = await client.db.get(`activated.${message.guild.id}`);
  if(!activated) return;
  if(message.guild.id.includes(activated)) {
  const isTimer =  await client.db.get(`timer.${message.guild.id}`)
  if (message.author.id === "673362753489993749") {
    let checkEmbed = message.embeds[0]
    if (!checkEmbed) return;
    if (!checkEmbed.title) return
    if (isTimer === "true") {
      if (checkEmbed && checkEmbed.title.includes(" Tier:")) {
        message.channel.send({embed: { 
          "description": ":green_circle: **| Time until despawn:** `15s`",
          "color": `GREEN`
        }}).then(msg => {
        setTimeout(function() {
          msg.edit({embed: { 
            "description": ":green_circle: **| Time until despawn:** `13s`",
            "color": `GREEN`
          }})
        }, 2000)
        setTimeout(function() {
          msg.edit({embed: { 
            "description": ":green_circle: **| Time until despawn:** `11s`",
            "color": `GREEN`
          }})
        }, 4000)
        setTimeout(function() {
          msg.edit({embed: { 
            "description": ":green_circle: **| Time until despawn:** `9s`",
            "color": `GREEN`
          }})
        }, 6000)
        setTimeout(function() {
          msg.edit({embed: { 
            "description": ":orange_circle: **| Time until despawn:** `7s`",
            "color": `ORANGE`
          }})
        }, 8000)
        setTimeout(function() {
          msg.edit({embed: { 
            "description": ":orange_circle: **| Time until despawn:** `5s`",
            "color": `ORANGE`
          }})
        }, 10000)
        setTimeout(function() {
          msg.edit({embed: { 
            "description": ":red_circle: **| Time until despawn:** `3s`",
            "color": `RED`
          }})
        }, 12000)
        setTimeout(function() {
          msg.edit({embed: { 
            "description": ":red_circle: **| Time until despawn:** `1s`",
            "color": `RED`
          }})
        }, 14000)
        setTimeout(function() {
          msg.edit({embed: { 
            "description": ":black_circle: **| DONE:** `0s`",
            "color": `BLACK`
          }})
        }, 15000)
        setTimeout(function() {
          msg.delete()
        }, 16000)
      })
    }
  }
  if (checkEmbed && checkEmbed.title.includes(" Tier: 4")) {
    const role =  await client.db.get(`t4ping_${message.guild.id}`)
    const on =  await client.db.get(`t4ping.${message.guild.id}`)
    if (on !== "on") return;
    const namecard = checkEmbed.title.replace(" Tier: 4", "");
    message.channel.send("<:IP_T4:757355465373122661> |** ``" + namecard + "``**, " + role + "")
  }
  if (checkEmbed && checkEmbed.title.includes(" Tier: 5")) {
    const role =  await client.db.get(`t5ping_${message.guild.id}`)
    const on =  await client.db.get(`t5ping.${message.guild.id}`)
    if (on !== "on") return;
    const namecard = checkEmbed.title.replace(" Tier: 5", "");
    message.channel.send("<:IP_T5:757355431613169874> |** ``" + namecard + "``**, " + role + "")
  }
  if (checkEmbed && checkEmbed.title.includes(" Tier: 6")) {
    const role =  await client.db.get(`t6ping_${message.guild.id}`)
    const on =  await client.db.get(`t6ping.${message.guild.id}`)
    if (on !== "on") return;
    const namecard = checkEmbed.title.replace(" Tier: 6", "");
    message.channel.send("<:IP_T6:757354520530386944> |** ``" + namecard + "``**, " + role + "")
  }
  }
}else {
  return;
}
});

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

client.package = require("./package.json");
client.login(token).catch(console.error);
