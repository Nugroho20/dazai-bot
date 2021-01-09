const Discord = require("discord.js");
const fs = require('fs');

exports.run = async (client, message, args) => {
    let blacklist = JSON.parse(fs.readFileSync(`${process.cwd()}/blacklist.json`, "utf8"));
    let user = args[0];
    if (!client.config.owners.includes(message.author.id)) return;

    if (!user) return message.reply('<:Shrug:769943946092609566> | You need to input a User ID');
    
    if (!blacklist[user]) {
        message.reply("<:Shrug:769943946092609566> | That user is already whitelisted");
        return;
    };
    
    if (blacklist[user].state === false) {
        message.reply("<:Shrug:769943946092609566> | That user is already whitelisted");
        return;
    };

    if (blacklist[user].state === true) {
        blacklist[user] = {
            state: false
        }
    message.reply("That user is now whitelisted");
    fs.writeFile(`${process.cwd()}/blacklist.json`, JSON.stringify(blacklist), err => {
        if(err) throw err;
        return;
    });
    }
    
}
exports.help = {
    name: "whitelist",
    name2: "WhiteList",
    description: "",
    usage: "whitelist <@user>",
    example: "whitelist @ShiroLine"
  }
  
  exports.conf = {
    aliases: ["wl"],
    cooldown: 0
  }