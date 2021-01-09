const Discord = require("discord.js");
const fs = require('fs');

exports.run = async (client, message, args) => {
    let blacklist = JSON.parse(fs.readFileSync(`${process.cwd()}/blacklist.json`, "utf8"));
    let user = args[0];
    const amount = parseInt(user);

    if (!client.config.owners.includes(message.author.id)) return;

    if (isNaN(amount)) {
        return message.reply('<:Shrug:769943946092609566> | Please enter a valid UserID');
    }
    if (!user) return message.reply('You need to imput a User ID');
    if (args[0] === '456823870087888896') return message.reply("<:Angry:769139458204499974> | You can't blacklist ShiroLine..");

    if (!blacklist[user]) {
        blacklist[user] = {
          id: user,
          state: true
        }
        message.reply(`<:Woah:769139813226905611> | <@${user}> is now Blacklisted!`);    
        fs.writeFile(`${process.cwd()}/blacklist.json`, JSON.stringify(blacklist), err => {
            if(err) throw err;
          });
        
        client.guilds.forEach((guild) => {
        if(guild.ownerID === user) {
          message.guild.leave(guild.id)
        }
    })

    return;
    }
    if (blacklist[user].state === true) {
        message.reply("<:Smile:769139435978620948> | That user is already blacklisted");
    return;
    };

}
exports.help = {
    name: "blacklist",
    name2: "BlackList",
    description: "Blacklist someone from using bot command.",
    usage: "blacklist <@user>",
    example: "blacklist @ShiroLine"
  }
  
  exports.conf = {
    aliases: ["bl"],
    cooldown: 0
  }