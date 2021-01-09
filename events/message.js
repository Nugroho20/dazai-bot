const Discord = require("discord.js"), cooldowns = new Discord.Collection();
const fs = require("fs");

module.exports = async (client, message) => {
  if (message.author.bot || message.author === client.user) return;

	const mentionRegex = RegExp(`^<@!${client.user.id}>$`);
  const mentionRegexPrefix = RegExp(`^<@!${client.user.id}> `);
  
  const mentionResp = `<@${client.user.id}>`
  
  let prefixes = JSON.parse(fs.readFileSync('./assets/prefixes.json', "utf8"))

  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: client.config.prefix
    };
  };

  const prefix = message.content.match(mentionResp) ? message.content.match(mentionResp)[0] : prefixes[message.guild.id].prefixes;
  
  if (message.content === mentionResp) message.channel.send(`My prefix for ${message.guild.name} is \`${prefixes[message.guild.id].prefixes}\`.`);
  
  if (!message.content.startsWith(prefix)) return;
  
  let msg = message.content.toLowerCase();
  let args = msg.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  
  let commandFile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (!commandFile) return; 

  if (!cooldowns.has(commandFile.help.name)) cooldowns.set(commandFile.help.name, new Discord.Collection());
  
 //blacklist system
  let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
  if (!blacklist[message.author.id]) {
   blacklist[message.author.id] = {state: false}
  };

  if (blacklist[message.author.id].state === true) return;
 //blacklist system

  const member = message.member,
        now = Date.now(),
        timestamps = cooldowns.get(commandFile.help.name),
        cooldownAmount = (commandFile.conf.cooldown || 3) * 1000;
  
  if (!timestamps.has(member.id)) {
    if (!client.config.owners.includes(message.author.id)) {

      timestamps.set(member.id, now);
    }
  } else {
    const expirationTime = timestamps.get(member.id) + cooldownAmount;
    
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.channel.send(`Too fast, please wait **${timeLeft.toFixed(1)}** seconds to try the command again.`);
    }
    
    timestamps.set(member.id, now);
    setTimeout(() => timestamps.delete(member.id), cooldownAmount); 
  }
  
  try {
    if (!commandFile) return;
    commandFile.run(client, message, args);
return 
  } catch (error) {
    console.log(error.message);
  }
}
