exports.run = async (client, message, args) => {
  if (!client.config.owners.includes(message.author.id)) return;

  await message.channel.send(`Restarting bot...`);
  process.exit();
};

exports.help = {
  name: "restart",
  name2: "Restart",
  description: "Restart"
};

exports.conf = {
  aliases: ["reboot"],
  cooldowns: 10
};