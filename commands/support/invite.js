
exports.run = async (client, message, args) => {
    message.channel.send({ embed: {
        "description": "<:Woah:769139813226905611>** | Want to invite " + client.user.username + " to your server? [Click Me!](https://discord.com/api/oauth2/authorize?client_id=768994833808359444&permissions=1812462657&scope=bot)**\n*Join Mayuri Support Server?* **[Click Me!](https://discord.gg/JwnPkVrh7f)**",
        "color": "#FFFF33",
    }})
}
exports.help = {
    name: "invite",
    name2: "Invite",
    description: "Showing bot invite link",
    usage: "invite"
};

exports.conf = {
     aliases: [],
     cooldown: 5
};