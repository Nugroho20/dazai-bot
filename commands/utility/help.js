const Discord = require("discord.js");
const fs = require('fs')

exports.run = async (client, message, args) => {
  let prefixes = JSON.parse(fs.readFileSync('./assets/prefixes.json', "utf8"))

  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: client.config.prefix
    };
  };

  let prefix = prefixes[message.guild.id].prefixes
  
  if (!args[0]) {
    // This will turn the folder (category) into array.
    let module = client.helps.array();
    let av = client.users.cache.get("730482846531059763")
    // This will hide a folder from display that includes "hide: true" in their module.json
    if (!client.config.owners.includes(message.author.id)) module = client.helps.array().filter(x => !x.hide);
    const embed = new Discord.MessageEmbed()
    .setColor(client.colors.theme)
    .setDescription(`Use \`${prefix}help [command]\` to get more command information!\nExample: \`${prefix}help avatar\``)
    .setAuthor("Help Menu | " + message.guild.name, message.guild.iconURL())
    .setFooter('Developer ' + av.tag, av.displayAvatarURL())
    .setTimestamp();
    
    for (const mod of module) {
      // You can change the .join(", ") to dots or every symbol.
      embed.addField(`${mod.name}`, mod.cmds.map(x => `\`${x}\``).join(", "));
    }
    
    return message.channel.send(embed);
  } else {
    let cmd = args[0];
    
    // If the user type the [command], also with the aliases.
    if (client.commands.has(cmd) || client.commands.get(client.aliases.get(cmd))) {
      let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
      let name = command.help.name; // The command name.
      let name2 = command.help.name2;
      let desc = command.help.description; // The command description.
      let cooldown = command.conf.cooldown; // The command cooldown.
      let aliases = command.conf.aliases.join(", ") ? command.conf.aliases.join(", ") : "No aliases provided.";
      let usage = command.help.usage ? `${prefix}${command.help.usage}` : "No usage provided.";
      let example = command.help.example ? `${prefix}${command.help.example}` : "No example provided.";
      
      let embed = new Discord.MessageEmbed()
      .setColor(client.colors.theme)
      .setAuthor("Help: " + name2 + " | " + message.guild.name + "", message.guild.iconURL())
      .setDescription('**Command Name**: `' + name2 + '`\n**Command Aliases**: `' + aliases + '`\n**Command Cooldown**: `' + cooldown + 's`\n**Command Description**: ' + desc + '.\n**Command Usage**: `' + usage + '`\n**Command Examples**:\n ```' + example + '```')
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Syntax: [required] : <optional>")
      return message.channel.send(embed);
    } else {
      // If the user type the wrong command.
      return message.channel.send({embed: {color: client.colors.failed, description: "Unknown command.\n`" + args.join(' ').toUpperCase() + "` Command not found."}});
    }
  }
}

exports.help = {
  name: "help",
  name2: "Help",
  description: "Showing command list",
  usage: "help <command>",
  example: "help ping"
}

exports.conf = {
  aliases: ["?"],
  cooldown: 15
}
