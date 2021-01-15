const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  const active = await client.db.get(`activated.${message.guild.id}`);
  if(!active) return message.channel.send('Please activate first to use Shoob Category Commands');
    if(!message.guild.id.includes(active)) {
        return message.channel.send('Please activate first to use Shoob Category Commands');
    }
   
    let data = client.db.all().filter(data => data.ID.startsWith(`claims_${message.guild.id}`)).sort((a, b) => b.data - a.data)
    if (!data) return message.channel.send("Unknown generated data.");

    var limit = 10; 

   let lastpage = Math.ceil(Object.keys(data).length / limit);
    let page = parseInt(args[0]); // !lb 1
    if (!page) page = 1;
    if (page > lastpage) return message.channel.send(`Sorry, there is no page ${page}.`);

    let frompages = limit * (page - 1);
    let pageslimit = 10 * page;
    
    let list = client.db.all().filter(data => data.ID.startsWith(`claims_${message.guild.id}`)).sort((a, b) => b.data - a.data).slice(frompages, pageslimit)
    let arr = [];

    for (var i in list) {
      let userID = `${list[i].ID.slice(26).replace(/[@<>]/g, "")}`
      let userTag = `${client.users.cache.get(userID).tag ? client.users.cache.get(userID).tag : "invalid-user"}`
        arr.push(`(${i * 1 + 1 + frompages})   ${userTag}  :  ${list[i].data} Claims\n`);
    };

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Leaderboard | ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
    .setTitle(`Top Claimer on ${message.guild.name}`)
    .setColor('RED')
    .setDescription(`\`\`\`css
${arr.join("\n")}\`\`\``)
  .setFooter(`Page: ${page} / ${lastpage} | d!lb [page]`);
    message.channel.send(embed).then(i => {
      i.delete({timeout: 15000})
  })
}
exports.help = {
    name: "leaderboard",
    name2: "Leaderboard",
    description: "Display claim leaderboard",
    usage: "leaderboard",
    example: "leaderboard"
  }
  
  exports.conf = {
    aliases: ["lb", "top"],
    cooldown: 10
  }
