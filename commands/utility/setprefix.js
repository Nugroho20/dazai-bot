const fs = require('fs')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<:Mayuri_Failed:772486728300101632>| You need ADMIN permission to perform this command!')

    if (!args[0]) return message.channel.send("You need provide a new prefix!")

    let prefixes = JSON.parse(fs.readFileSync('./assets/prefixes.json', 'utf8'));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile('./assets/prefixes.json', JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let sEmbed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`<:Mayuri_Success:772486748864249857>| Successfull set prefix to \`${args[0]}\``)

    message.channel.send(sEmbed);

}

exports.help = {
    name: "setprefix",
    name2: "Setprefix",
    description: "Set a new prefix for a guild",
    usage: "setprefix <arguments>",
    example: "setprefix m."
}

exports.conf = {
    aliases: [],
    cooldown: 10
}