const { MessageEmbed } = require("discord.js");
const moment = require('moment');
const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};
const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: 'High',
	VERY_HIGH: 'Highest'
};

exports.run = (client, message, args) => {
    const user = message.author
    let BannerURL = message.channel.guild.bannerURL({ dynamic: true, format: "png", size: 1024 })
    const vanity = message.guild.vanityURLCode ? message.guild.vanityURLCode : "Not Supported VanityURL"
    const embed = new MessageEmbed()
    .setColor('#FFFF33')
    .setDescription(`\`\`\`YAML\n
• Name      : ${message.guild.name}
• Owner     : ${message.guild.owner.user.tag}
• Channels  : ${message.guild.channels.cache.filter(channel => channel.type !== 'category').size}
• Members   : ${message.guild.memberCount}
• Roles     : ${message.guild.roles.cache.size}
• Emojis    : ${message.guild.emojis.cache.size}
• Region    : ${message.guild.region.toUpperCase()}
• CreatedAt : ${moment.utc(message.guild.createdAt).format('MM/DD/YYYY h:mm A')}
• Boosts    : ${message.guild.premiumSubscriptionCount} (Level: ${message.guild.premiumTier})
• VanityURL : ${vanity}\`\`\``)
    .setImage(BannerURL)
    .setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png' }))
    .setFooter(`Replying to ${user.tag}`, user.displayAvatarURL())
    message.channel.send({ embed });
};


exports.help = {
    name: "serverinfo",
    name2: "ServerInfo",
    description: "Showing server info",
    usage: "serverinfo"
};

exports.conf = {
     aliases: [],
     cooldown: 5
};