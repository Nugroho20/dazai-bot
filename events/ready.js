module.exports = async (client) => {
    client.user.setActivity(`MAINTENANCE NOW XD`, {
    type: "PLAYING"
  })
  console.log(`${client.user.username} Is now Online !`)
}
