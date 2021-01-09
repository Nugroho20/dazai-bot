const {Client, Collection} = require("discord.js");
module.exports = class MayuriBot extends Client {
  constructor(options) {
    super(options)
    
    this.commands = new Collection();
    this.cooldowns = new Collection();
    this.aliases = new Collection();
    this.colors = require('../assets/colors.json');
    this.config = require('../config.json');
    this.snipes = new Map();
    this.editsnipe = new Map();
    this.db = require('quick.db');
  }
}
