const Discord = require('discord.js')
const math = require('mathjs')

exports.run = async (client, message, args) => {

    const arg = args.join(" ")
    if (!args[0] || arg === "sin" || arg === "cos" || arg === "tan") return message.channel.send("Please provide a calculation!");
    if (arg.includes("config") || arg.includes(":")) return message.channel.send("Please provide a valid calculation!");

    let resp;
    
    try {
        resp = math.evaluate(args.join(' '));
        if (resp.length > 150) return message.channel.send("Oof, the result is to long.")
    } catch(e) {
        return message.channel.send("Please provide a valid calculation.")
    }

    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF33")
    .setTitle('Calculation result:')
    .addField('Input 📥', `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField('Output 📤', `\`\`\`js\n${resp}\`\`\``)
    message.channel.send(embed)
}

exports.help = {
    name: "calculator",
    name2: "Calculator",
    description: "Calculating number",
    usage: "calculator <calculation>",
    example: "calculator 1+1"
}

exports.conf = {
    aliases: ["calc", "math"],
    cooldown: 5
}