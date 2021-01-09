module.exports = async(client, msg) => {
  if (msg.author.bot) return;
  client.snipes.set(msg.channel.id, {
    content:msg.content,
    author:msg.author.tag,
    avatar:msg.author.displayAvatarURL(),
    image:msg.attachments.first() ? msg.attachments.first().proxyURL : null
  })
}