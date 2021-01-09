const Discord = require("discord.js"), { post } = require("node-superfetch");

exports.run = async (client, message, args) => {
  if (!client.config.owners.includes(message.author.id)) return;

  const length = args.join(" ").length
  const panjang = message.content.length -length
  const code = message.content.slice(panjang)
  
  const embed = new Discord.MessageEmbed()
  .addField("Input 📥", "```js\n" + code + "```");
  
  try {

    if (!code) return message.channel.send("Please include the code.");
    let evaled;
    
    // This method is to prevent someone that you trust, open the secret shit here.
    if (code.toLowerCase().includes(`secret`) || code.toLowerCase().includes(`config`) || code.toLowerCase().includes(`token`) || code.toLowerCase().includes("process.env")) {
      evaled = "No!";
    } else {
      evaled = eval(code);
    }
    
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled, {depth: 0});
    
    let output = clean(evaled);
    if (output.length > 1024) {
      // If the output was more than 1024 characters, we're gonna export them into the hastebin.
      const {body} = await post("https://hastebin.com/documents").send(output);
      embed.addField("Output 📤", `https://hastebin.com/${body.key}.js`).setColor(0x7289DA);
      // Sometimes, the body.key will turn into undefined. It might be the API is under maintenance or broken.
    } else {
      embed.addField("Output 📤", "```js\n" + output + "```").setColor(0x7289DA)
    }
    
    message.channel.send(embed);
    
  } catch (error) {
    let err = clean(error);
    if (err.length > 1024) {
      // Do the same like above if the error output was more than 1024 characters.
      const {body} = await post("https://hastebin.com/documents").send(err);
      embed.addField("Output 📤", `https://hastebin.com/${body.key}.js`).setColor("RED");
    } else {
      embed.addField("Output 📤", "```js\n" + err + "```").setColor("RED");
    }
    
    message.channel.send(embed);
  }
}

exports.help = {
  name: "eval",
  name2: "Eval",
  description: "Evaluate some code.",
  usage: "eval <code>"
}

exports.conf = {
  aliases: ["ev"],
  cooldown: 5
}

function clean(string) {
  if (typeof text === "string") {
    return string.replace(/`/g, "`" + String.fromCharCode(8203))
    .replace(/@/g, "@" + String.fromCharCode(8203))
  } else {
    return string;
  }
}