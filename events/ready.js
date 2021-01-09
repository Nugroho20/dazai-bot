module.exports = async (client) => {
    client.user.setActivity(`Mayuri~desu | m!help`, {
    type: "COMPETING"
  })
  console.log(`${client.user.username} Is now Online !`)
}