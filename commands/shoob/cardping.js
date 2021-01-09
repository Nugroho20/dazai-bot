const Discord = require("discord.js");


exports.run = async (client, message, args) => {
    const active = await client.db.get(`activated.${message.guild.id}`);
    if(!active) return message.channel.send('Please activate first to use Shoob Category Commands');
    if(!message.guild.id.includes(active)) {
        return message.channel.send('Please activate first to use Shoob Category Commands');
    }
    if(!message.member.permissions.any(["MANAGE_GUILD", "ADMINISTRATOR"])) {
        return message.channel.send('<:Mayuri_Failed:772486728300101632>| You need **Manage Server** permission to perform this command!');
    }

    let tier = ["t4", "T4", "t5", "T5", "t6", "T6"];
    if (!tier.includes(args[0])) {
        return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Wrong Usage m!setping `T4/T5/T6 <@role>`",
            "color": "RED"
        }});
    }

    if (args[0] === "t4") {
        let roles = message.mentions.roles.first()
        if (!roles) return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Please Provide the role that you want to make it as `card-mention`",
            "color": "RED"
        }});

        await client.db.set(`t4ping_${message.guild.id}`, `<@&${roles.id}>`)
        await client.db.set(`t4ping.${message.guild.id}`, `on`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `T4` card is seted on role <@&" + roles.id + ">",
            "color": "GREEN"
        }});
    }
    if (args[0] === "T4") {
        let roles = message.mentions.roles.first()
        if (!roles) return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Please Provide the role that you want to make it as `card-mention`",
            "color": "RED"
        }});

        await client.db.set(`t4ping_${message.guild.id}`, `<@&${roles.id}>`)
        await client.db.set(`t4ping.${message.guild.id}`, `on`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `Tier 4` card is seted on role <@&" + roles.id + ">",
            "color": "GREEN"
        }});
    }
    if (args[0] === "t5") {
        let roles = message.mentions.roles.first()
        if (!roles) return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Please Provide the role that you want to make it as `card-mention`",
            "color": "RED"
        }});

        await client.db.set(`t5ping_${message.guild.id}`, `<@&${roles.id}>`)
        await client.db.set(`t5ping.${message.guild.id}`, `on`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `Tier 5` card is seted on role <@&" + roles.id + ">",
            "color": "GREEN"
        }});
    }
    if (args[0] === "T5") {
        let roles = message.mentions.roles.first()
        if (!roles) return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Please Provide the role that you want to make it as `card-mention`",
            "color": "RED"
        }});

        await client.db.set(`t5ping_${message.guild.id}`, `<@&${roles.id}>`)
        await client.db.set(`t5ping.${message.guild.id}`, `on`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `Tier 5` card is seted on role <@&" + roles.id + ">",
            "color": "GREEN"
        }});
    }
    if (args[0] === "t6") {
        let roles = message.mentions.roles.first()
        if (!roles) return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Please Provide the role that you want to make it as `card-mention`",
            "color": "RED"
        }});

        await client.db.set(`t6ping_${message.guild.id}`, `<@&${roles.id}>`)
        await client.db.set(`t6ping.${message.guild.id}`, `on`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `Tier 6` card is seted on role <@&" + roles.id + ">",
            "color": "GREEN"
        }});
    }
    if (args[0] === "T6") {
        let roles = message.mentions.roles.first()
        if (!roles) return message.channel.send({ embed: {
            "description": "<:Mayuri_Failed:772486728300101632>| Please Provide the role that you want to make it as `card-mention`",
            "color": "RED"
        }});

        await client.db.set(`t6ping_${message.guild.id}`, `<@&${roles.id}>`)
        await client.db.set(`t6ping.${message.guild.id}`, `on`)
        message.channel.send({ embed: {
            "description": "<:Mayuri_Success:772486748864249857>| Ping for `Tier 6` card is seted on role <@&" + roles.id + ">",
            "color": "GREEN"
        }});
    }
}
exports.help = {
    name: "cardping",
    name2: "CardPing",
    description: "Set mention when shoob spawn a card",
    usage: "cardping T4 <@role>",
    example: "cardping T4 @T4"
  }
  
  exports.conf = {
    aliases: ["setping"],
    cooldown: 5
  }