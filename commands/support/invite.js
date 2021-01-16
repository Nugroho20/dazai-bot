
exports.run = async (client, message, args) => {
    message.channel.send({ embed: {
        "description": "<a:atr_filoblink:799943089103962153> Want to invite " + client.user.username + " to your server? [Click Here :D](https://discord.com/api/oauth2/authorize?client_id=779533217803141131&permissions=2147483639&scope=bot)\nJoin My Server? [Click Here :D](https://discord.io/Imajinasi)",
        "color": "BLACK",
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
