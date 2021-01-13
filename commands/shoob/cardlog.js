

exports.run = async (client, message, args) => {
    const active = await client.db.get(`activated.${message.guild.id}`);
    if(!active) return message.channel.send('Please activate first to use Shoob Category Commands');
    if(!message.guild.id.includes(active)) {
        return message.channel.send('Please activate first to use Shoob Category Commands');
    }
    if(!message.member.permissions.any(["MANAGE_GUILD", "ADMINISTRATOR"])) {
        return message.channel.send(':red_circle: | You need **Manage Server** permission to perform this command!');
    }

    let toggling = ["disable", "enable", "false", "true"];
    if (!toggling.includes(args[0])) {
        return message.channel.send({ embed: {
            "description": ":red_circle: | Wrong Usage Nez!cardlog `true/false`",
            "color": "RED"
        }});
    }

    if (args[0] === "true") {
        let channel = message.mentions.channels.first()
        if (!channel) return message.channel.send({ embed: {
            "description": ":red_circle:| Please provide the channel that you want to make it as `card-log`",
            "color": "RED"
        }});

        await client.db.set(`channel_${message.guild.id}`, channel.id)
        await client.db.set(`shooblog_${message.guild.id}`, `true`)
        message.channel.send({ embed: {
            "description": ":white_circle:| Card Log now will be displayed in <#" + channel.id + ">",
            "color": "WHITE"
        }});
    }
    if (args[0] === "enable") {
        let channel = message.mentions.channels.first()
        if (!channel) return message.channel.send({ embed: {
            "description": ":white_circle:| Please provide the channel that you want to make it as `card-log`",
            "color": "RED"
        }});

        await client.db.set(`channel_${message.guild.id}`, channel.id)
        await client.db.set(`shooblog_${message.guild.id}`, `true`)
        message.channel.send({ embed: {
            "description": ":white_circle:| Card Log now will be displayed in <#" + channel.id + ">",
            "color": "WHITE"
        }});
    }
    if (args[0] === "false") {
        let toggle = await client.db.get(`shooblog_${message.guild.id}`)
        if (!toggle || toggle === "null") return message.channel.send({ embed: {
            "description": ":red_circle:| Card-log is already `disabled` in this server",
            "color": "RED"
        }});
        await client.db.delete(`shooblog_${message.guild.id}`)
        await client.db.delete(`channel_${message.guild.id}`)
        return  message.channel.send({ embed: {
            "description": ":white_circle:| Card-log has been disabled",
            "color": "WHITE"
        }});
    }
    if (args[0] === "disable") {
        let toggle = await client.db.get(`shooblog_${message.guild.id}`)
        if (!toggle || toggle === "null") return message.channel.send({ embed: {
            "description": ":red_circle:| Card-log is already `disabled` in this server",
            "color": "RED"
        }});
        await client.db.delete(`shooblog_${message.guild.id}`)
        await client.db.delete(`channel_${message.guild.id}`)
        return  message.channel.send({ embed: {
            "description": ":white_circle:| Card-log has been disabled",
            "color": "WHITE"
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
