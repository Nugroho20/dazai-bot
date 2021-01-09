const { MessageEmbed } = require("discord.js")
const moment = require("moment")

exports.run = async (client, message, args) => {
    let user;

    if (!args[0]) {
      user = message.member;
    } else {
      user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(err => { return message.channel.send("<:Shrug:769943946092609566> | Unable to find this Person") })
    }

    if (!user) {
      return message.channel.send("<:Shrug:769943946092609566> | Unable to find this person!")
    }
    
    let permissions = [];
    if (user.hasPermission("KICK_MEMBERS")) {
      permissions.push("Kick Members");
  }
  if (user.hasPermission("BAN_MEMBERS")) {
      permissions.push("Ban Members");
  }
  if (user.hasPermission("ADMINISTRATOR")) {
      permissions.push("Administrator");
  }
  if (user.hasPermission("MANAGE_MESSAGES")) {
      permissions.push("Manage Messages");
  }
  if (user.hasPermission("MANAGE_CHANNELS")) {
      permissions.push("Manage Channels");
  }
  if (user.hasPermission("MENTION_EVERYONE")) {
      permissions.push("Mention Everyone");
  }
  if (user.hasPermission("MANAGE_NICKNAMES")) {
      permissions.push("Manage Nicknames");
  }
  if (user.hasPermission("MANAGE_ROLES")) {
      permissions.push("Manage Roles");
  }
  if (user.hasPermission("MANAGE_WEBHOOKS")) {
      permissions.push("Manage Webhooks");
  }
  if (user.hasPermission("MANAGE_EMOJIS")) {
      permissions.push("Manage Emojis");
  }
  if (permissions.length == 0) {
      permissions.push("`No Key Permissions Found`");
  }

    //OPTIONS FOR STATUS 

    let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }

    // OPTIONS FOR BADGE

    const flags = {
        DISCORD_EMPLOYEE: 'Discord Employee',
        DISCORD_PARTNER: 'Discord Partner',
        BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
        BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
        HYPESQUAD_EVENTS: 'HypeSquad Events',
        HOUSE_BRAVERY: 'House of Bravery',
        HOUSE_BRILLIANCE: 'House of Brilliance',
        HOUSE_BALANCE: 'House of Balance',
        EARLY_SUPPORTER: 'Early Supporter',
        TEAM_USER: 'Team User',
        SYSTEM: 'System',
        VERIFIED_BOT: 'Verified Bot',
        VERIFIED_DEVELOPER: 'Verified Bot Developer'
    }

    //NOW BADGES
    const badges = user.user.flags.toArray()

    // function for array

    function trimArray(arr, maxLen = 10) {
		if (arr.length > maxLen) {
			const len = arr.length - maxLen
			arr = arr.slice(0, maxLen)
			arr.push(`${len} more...`)
		}
		return arr
    }
    
    // role
    const roles = user.roles.cache
        .sort((a, b) => b.position - a.position)
        .map(role => role.toString())
        .slice(0, -1)

    let embed = new MessageEmbed()
    .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
    .addField(`User Info:`, `\`\`\`YAML\n
• Username : ${user.user.username}
• Discriminator : ${user.user.discriminator}
• ID : ${user.user.id}
• Bot : ${user.user.bot}
• Joined Server At: ${moment(user.user.joinedAt).format("LLLL")}
• Created At : ${moment(user.user.createdAt).format("LLLL")}
• Badges : ${badges.length ? badges.map(flag => flags[flag]).join(', ') : 'None'}\`\`\``)
    .addField(`**Server Roles [${roles.length}]**`, `${roles.length < 10 ? roles.join(' **|** ') : roles.length > 10 ? trimArray(roles).join(' **|** ') : 'No roles'}`, true)
    .addField("**Permissions** ", `${permissions.join(', ')}`)
    .setFooter(user.user.presence.status, stat[user.user.presence.status])
    .setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)
    message.channel.send(embed)
}

exports.help = {
    name: "userinfo",
    name2: "UserInfo",
    description: "Showing user information",
    usage: "userinfo <@user>",
    example: "userinfo @ShiroLine"
};

exports.conf = {
     aliases: ["user", "info", "whois"],
     cooldown: 5
};