const Discord = require('discord.js')
const ms = require('ms')

exports.run = async (client, message, args) => {
    let member = message.author
    let timeuser = args[0]
    let reason = args.slice(1).join(" ")
    
    if(!timeuser) return message.channel.send("Please enter the time!")
    if(!reason) return message.reply("Please enter a reason!")
    let usertime = ms(timeuser)

    if (usertime === undefined) return message.reply("Please enter a valid time!")
    let time = Date.now() + usertime
    message.channel.send(`${member}, I will reminds you in ${timeuser}.`)

    const interval = setInterval(function() {

        if(Date.now() > time){
            message.channel.send(`${member}, i remind you about: **${reason}**`)
            .catch(e => console.log(e))
            clearInterval(interval)
        }

    },1000)
}

exports.help = {
    name: "reminder",
    name2: "Reminder",
    description: "Reminds you",
    usage: "reminder <time> <reason>",
    example: "reminder 1h30m time to eat"
}

exports.conf = {
    aliases: ["remindme"],
    cooldown: 5
}