module.exports = async (client) => {
    client.user.setActivity(`Hey, do you want to kill yourself with me? XD`, {
    type: "PLAYING"
  })
  console.log(`${client.user.username} Is now Online !`)
}
