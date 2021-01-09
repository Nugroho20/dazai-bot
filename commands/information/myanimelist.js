const malScraper = require('mal-scraper')
const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {

    if (!args[0]) return message.reply('<:Shrug:769943946092609566> | You need to input anime name');
    
    function shorten(text, maxLen = 2000) {
		return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
	}
    const query = args.join(' ');
    try {
		const data = await malScraper.getInfoFromName(query)
		if(data.rating.includes("Rx") && message.channel.nsfw !== true) return message.channel.send('This anime contain nsfw, please use this command on nsfw channel!');
        const user = message.author
		const embed = new Discord.MessageEmbed()
        .setColor('#FFFF33')
		.setThumbnail(data.picture)
		.setTitle(data.title + (data.japaneseTitle ? ` (${data.japaneseTitle})` : ''))
		.setURL(data.url)
		.addField('Synopsis:', data.synopsis.split('\n\n')[0])
        .setDescription(`\`\`\`YAML\n
❯ Type : ${data.type}
❯ Aired : ${data.aired}
❯ Status : ${data.status}
❯ Episodes : ${data.episodes} (${data.duration})
❯ Score : ${data.score} (${data.ranked})
❯ Popularity : ${data.popularity}
❯ Genre : ${data.genres.join(', ')}
❯ Rating : ${data.rating}
❯ Source : ${data.source}
❯ Studio : ${data.studios.join(', ')} \`\`\``)
        .setImage(data.image_url)
        .setFooter(`Powered by MyAnimeList`, 'https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png');
		return message.channel.send(embed);
	} catch (err) {
		return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
	}
};
exports.help = {
    name: "myanimelist",
    name2: "MyAnimeList",
    description: "Showing anime details",
    usage: "mal [title]",
    example: "mal Date a Live",
};

exports.conf = {
     aliases: ["mal", "anime"],
     cooldown: 10
};