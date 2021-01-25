module.exports = async (client) => {
    client.user.setActivity(`${client.guilds.cache.size} servers! With ${client.users.cache.size} members!`, {
    type: "COMPETING"
  })
  console.log(`${client.user.username} Is now Online !`)
}
