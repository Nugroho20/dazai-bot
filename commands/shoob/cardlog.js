

exports.run = async (client, message, args) => {
    const active = await client.db.get(`activated.${message.guild.id}`);
    if(!active) return message.channel.send('Please activate first to use Shoob Category Commands');
    if(!message.guild.id.includes(active)) {
        return message.channel.send('Please activate first to use Shoob Category Commands');
    }
    if(!message.member.permissions.any(["MANAGE_GUILD", "ADMINISTRATOR"])) {
        return message.channel.send('<:Mayuri_Failed:772486728300101632>| You need **Manage Server** permission to perform this command!');
    }

    let toggling = ["disable", "enable", "false", "true"];
    if (!toggling.includes(args[0])) {
        return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Wrong Usage m!cardlog `true/false`",
            "color": "RED"
        }});
    }

    if (args[0] === "true") {
        let channel = message.mentions.channels.first()
        if (!channel) return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Please provide the channel that you want to make it as `card-log`",
            "color": "RED"
        }});

        await client.db.set(`channel_${message.guild.id}`, channel.id)
        await client.db.set(`shooblog_${message.guild.id}`, `true`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Card Log now will be displayed in <#" + channel.id + ">",
            "color": "GREEN"
        }});
    }
    if (args[0] === "enable") {
        let channel = message.mentions.channels.first()
        if (!channel) return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Please provide the channel that you want to make it as `card-log`",
            "color": "RED"
        }});

        await client.db.set(`channel_${message.guild.id}`, channel.id)
        await client.db.set(`shooblog_${message.guild.id}`, `true`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Card Log now will be displayed in <#" + channel.id + ">",
            "color": "GREEN"
        }});
    }
    if (args[0] === "false") {
        let toggle = await client.db.get(`shooblog_${message.guild.id}`)
        if (!toggle || toggle === "null") return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Card-log is already `disabled` in this server",
            "color": "RED"
        }});
        await client.db.delete(`shooblog_${message.guild.id}`)
        await client.db.delete(`channel_${message.guild.id}`)
        return  message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Card-log has been disabled",
            "color": "GREEN"
        }});
    }
    if (args[0] === "disable") {
        let toggle = await client.db.get(`shooblog_${message.guild.id}`)
        if (!toggle || toggle === "null") return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Card-log is already `disabled` in this server",
            "color": "RED"
        }});
        await client.db.delete(`shooblog_${message.guild.id}`)
        await client.db.delete(`channel_${message.guild.id}`)
        return  message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Card-log has been disabled",
            "color": "GREEN"
        }});
    }

}
exports.help = {
    name: "cardlog",
    name2: "CardLog",
    description: "Set logs for card",
    usage: "cardlog enable <#channel>",
    example: "cardlog enable #card-logs"
  }
  
  exports.conf = {
    aliases: ["setlog", "slog"],
    cooldown: 10
  }