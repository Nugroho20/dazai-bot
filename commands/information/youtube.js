const fetch = require("node-superfetch"); 
const Discord = require("discord.js");
const { YTapi } = require(`${process.cwd()}/config.json`)

exports.run = async (client, message, args) => {
    let name = args.join(" ");
    if (!name) return message.channel.send("<:Mayuri_Failed:772486728300101632>| Unknown channel name.");
    const user = message.author

    const channel = await fetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=${YTapi}&maxResults=1&type=channel`)
    .catch(() => message.channel.send("<:Mayuri_Failed:772486728300101632>| Unknown channel error."));

    if (!channel.body.items[0]) return message.channel.send("<:Mayuri_Failed:772486728300101632>| No channel result. Try again.");

    const data = await fetch.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=${YTapi}`)
    .catch(() => message.channel.send("<:Mayuri_Failed:772486728300101632>| Unknown channel data error."));

    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF33")
    .setURL(`https://www.youtube.com/channel/${channel.body.items[0].id.channelId}`)
    .setTitle(channel.body.items[0].snippet.channelTitle)
    .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)
    .addField("Channel Description:", channel.body.items[0].snippet.description.replace(/<[^>]*>/g, '').split('\n'))
    .setDescription(`\`\`\`YAML\n
❯ Channel Name: ${channel.body.items[0].snippet.channelTitle}
❯ Subscriber Count: ${parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString()}
❯ Total Views: ${parseInt(data.body.items[0].statistics.viewCount).toLocaleString()}
❯ Total Videos: ${parseInt(data.body.items[0].statistics.videoCount).toLocaleString()}
❯ Date Created: ${new Date(channel.body.items[0].snippet.publishedAt).toDateString()}\`\`\``)
    .setFooter(`Replying to ${user.tag}`, user.displayAvatarURL())
    return message.channel.send({ embed }).catch(err => {
        return message.channel.send("Error : " + err)
        })
}

exports.help = {
    name: "youtube",
    name2: "Youtube",
    description: "Showing youtube channel information",
    usage: "youtube [channel name]",
    example: "youtube ShiroLine",
};

exports.conf = {
     aliases: ["ytstats"],
     cooldown: 5
};