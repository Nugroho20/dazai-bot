module.exports = async(client, emsg) => {
  if (emsg.author.bot) return;
  client.editsnipe.set(emsg.channel.id, {
    content:emsg.content,
    author:emsg.author.tag,
    avatar:emsg.author.displayAvatarURL()
  })
}
