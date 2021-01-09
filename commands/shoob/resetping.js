const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const active = await client.db.get(`activated.${message.guild.id}`);
    if(!active) return message.channel.send('Please activate first to use Shoob Category Commands');
    if(!message.guild.id.includes(active)) {
        return message.channel.send('Please activate first to use Shoob Category Commands');
    }
    const awal = args[0]
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<:Mayuri_Failed:772486728300101632>| You need ADMIN permission to perform this command!')

    if (awal == "T4") {
        await client.db.delete(`t4ping_${message.guild.id}`)
        await client.db.delete(`t4ping.${message.guild.id}`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `T4` card is now removed",
            "color": "GREEN"
        }})
    }
    else if (awal == "t4") {
        await client.db.delete(`t4ping_${message.guild.id}`)
        await client.db.delete(`t4ping.${message.guild.id}`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `T4` card is now removed",
            "color": "GREEN"
        }})
    }
    else if (awal == "T5") {
        await client.db.delete(`t5ping_${message.guild.id}`)
        await client.db.delete(`t5ping.${message.guild.id}`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `T5` card is now removed",
            "color": "GREEN"
        }})
    }
    else if (awal == "t5") {
        await client.db.delete(`t5ping_${message.guild.id}`)
        await client.db.delete(`t5ping.${message.guild.id}`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `T5` card is now removed",
            "color": "GREEN"
        }})
    }
    else if (awal == "T6") {
        await client.db.delete(`t6ping_${message.guild.id}`)
        await client.db.delete(`t6ping.${message.guild.id}`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `T6` card is now removed",
            "color": "GREEN"
        }})
    }
    else if (awal == "t6") {
        await client.db.delete(`t6ping_${message.guild.id}`)
        await client.db.delete(`t6ping.${message.guild.id}`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `T6` card is now removed",
            "color": "GREEN"
        }})
    }
    else {
        return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Wrong Usage m!resetping `T4/T5/T6`",
            "color": "RED"
        }})
    }
}
exports.help = {
    name: "resetping",
    name2: "ResetPing",
    description: "Reset ping for roles that setted up for shoob",
    usage: "resetping <tier>",
    example: "resetping T4"
  }
  
  exports.conf = {
    aliases: ["resetmention"],
    cooldown: 5
  }