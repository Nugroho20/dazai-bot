const Discord = require('discord.js');
const moment = require('moment');
require("moment-duration-format");

exports.run = async (client, message, args) => {
    const active = await client.db.get(`activated.${message.guild.id}`);
    if(!active) return message.channel.send('Please activate first to use Shoob Category Commands');
    if(!message.guild.id.includes(active)) {
        return message.channel.send('Please activate first to use Shoob Category Commands');
    }
    const query = args.join(" ").toLowerCase();
    if (query.match("t1")) {
        const claimer = await client.db.get(`recentclaimt1_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt1_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t1:798846436593631252> __Tier 1__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#95A5A6")
            .setFooter(`There is no recent for Tier 1`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t1:798846436593631252> __Tier 1__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#95A5A6")
            .setFooter(`There is no recent for Tier 1`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt1_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
        
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t1:798846436593631252> __Tier 1__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#95A5A6")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    }) 
    }
    else if (query.match("tier 1")) {
        const claimer = await client.db.get(`recentclaimt1_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt1_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t1:798846436593631252> __Tier 1__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#95A5A6")
            .setFooter(`There is no recent for Tier 1`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t1:798846436593631252> __Tier 1__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#95A5A6")
            .setFooter(`There is no recent for Tier 1`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt1_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
    
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t1:798846436593631252> __Tier 1__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#95A5A6")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    }) 
    }
    else if (query.match("t2")) {
        const claimer = await client.db.get(`recentclaimt2_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt2_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t2:798846602101391380> __Tier 2__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#2ECC71")
            .setFooter(`There is no recent for Tier 2`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t2:798846602101391380> __Tier 2__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#2ECC71")
            .setFooter(`There is no recent for Tier 2`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt2_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
    
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t2:798846602101391380> __Tier 2__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#2ECC71")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    })
    }
    else if (query.match("tier 2")) {
        const claimer = await client.db.get(`recentclaimt2_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt2_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t2:798846602101391380> __Tier 2__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#2ECC71")
            .setFooter(`There is no recent for Tier 2`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t2:798846602101391380> __Tier 2__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#2ECC71")
            .setFooter(`There is no recent for Tier 2`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt2_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
    
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t2:798846602101391380> __Tier 2__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#2ECC71")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    })
    }
    else if (query.match("t3")) {
        const claimer = await client.db.get(`recentclaimt3_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt3_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t3:798846665414017075> __Tier 3__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#3498DB")
            .setFooter(`There is no recent for Tier 3`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t3:798846665414017075> __Tier 3__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#3498DB")
            .setFooter(`There is no recent for Tier 3`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt3_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
    
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t3:798846665414017075> __Tier 3__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#3498DB")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    })
    }
    else if (query.match("tier 3")) {
        const claimer = await client.db.get(`recentclaimt3_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt3_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t3:798846665414017075> __Tier 3__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#3498DB")
            .setFooter(`There is no recent for Tier 3`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t3:798846665414017075> __Tier 3__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#3498DB")
            .setFooter(`There is no recent for Tier 3`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt3_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
    
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t3:798846665414017075> __Tier 3__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#3498DB")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    })
    }
    else if (query.match("t4")) {
        const claimer = await client.db.get(`recentclaimt4_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt4_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t4:798846783119818753> __Tier 4__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#AE04D3")
            .setFooter(`There is no recent for Tier 4`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t4:798846783119818753> __Tier 4__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#AE04D3")
            .setFooter(`There is no recent for Tier 4`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt4_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
    
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t4:798846783119818753> __Tier 4__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#AE04D3")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    })
    }
    else if (query.match("tier 4")) {
        const claimer = await client.db.get(`recentclaimt4_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt4_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t4:798846783119818753> __Tier 4__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#AE04D3")
            .setFooter(`There is no recent for Tier 4`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t4:798846783119818753> __Tier 4__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#AE04D3")
            .setFooter(`There is no recent for Tier 4`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt4_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
    
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t4:798846783119818753> __Tier 4__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#AE04D3")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    })
    }
    else if (query.match("t5")) {
        const claimer = await client.db.get(`recentclaimt5_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt5_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t5:798846842334478336> __Tier 5__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#FADB03")
            .setFooter(`There is no recent for Tier 5`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t5:798846842334478336> __Tier 5__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#FADB03")
            .setFooter(`There is no recent for Tier 5`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt5_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
    
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t5:798846842334478336> __Tier 5__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#FADB03")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    })
    }
    else if (query.match("tier 5")) {
        const claimer = await client.db.get(`recentclaimt5_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt5_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t5:798846842334478336> __Tier 5__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#FADB03")
            .setFooter(`There is no recent for Tier 5`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t5:798846842334478336> __Tier 5__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#FADB03")
            .setFooter(`There is no recent for Tier 5`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt5_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
    
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t5:798846842334478336> __Tier 5__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#FADB03")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    })
    }
    else if (query.match("t6")) {
        const claimer = await client.db.get(`recentclaimt6_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt6_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t6:798846909006741545> __Tier 6__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#E74C3C")
            .setFooter(`There is no recent for Tier 6`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t6:798846909006741545> __Tier 6__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#E74C3C")
            .setFooter(`There is no recent for Tier 6`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt6_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
    
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t6:798846909006741545> __Tier 6__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#E74C3C")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    })
    }
    else if (query.match("tier 6")) {
        const claimer = await client.db.get(`recentclaimt6_${message.guild.id}`);
        const recentspawn = await client.db.get(`recentcardt6_${message.guild.id}`);
        if (!claimer) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t6:798846909006741545> __Tier 6__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#E74C3C")
            .setFooter(`There is no recent for Tier 6`)
             return message.channel.send({ embed })
        }
        if (!recentspawn) {
            const embed = new Discord.MessageEmbed()
            .setTitle("<:atr_t6:798846909006741545> __Tier 6__ | __Recent Cards__")
            .addField(`• __Card__`, `\`  -  \``, true)
            .addField(`• __Claimed by__`, `\`  -  \``, true)
            .setColor("#E74C3C")
            .setFooter(`There is no recent for Tier 6`)
             return message.channel.send({ embed })
        }
        const cards = recentspawn.join("\n");
        const Claimer = claimer.join("\n");
        const last = await client.db.get(`lastspawnt6_${message.guild.id}`);
        const parse = Date.parse(last);
        const lastspawn = Date.now() - parse;
        const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
        let End = recentspawn.length;
        let batas = End-6;
        const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
        const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
        const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
        const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
        const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
        const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""
    
        const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
        const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
        const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
        const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
        const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
        const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
        
        const embed = new Discord.MessageEmbed()
        .setTitle("<:atr_t6:798846909006741545> __Tier 6__ | __Recent Cards__")
        .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
        .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
        .setColor("#E74C3C")
        .setFooter(`Last spawn: ${LastSpawn} ago`)
         return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    })
    }
    else {
    const claimer = await client.db.get(`recentclaim_${message.guild.id}`);
    const recentspawn = await client.db.get(`recentcard_${message.guild.id}`);
	if (!claimer) {
            
             return message.channel.send("There is no recent card spawned on this server")
        }
        if (!recentspawn) {
         
             return message.channel.send("There is no recent card spawned on this server")
        }
    const cards = recentspawn.join("\n");
    const Claimer = claimer.join("\n");
    const last = await client.db.get(`lastspawn_${message.guild.id}`);
    const parse = Date.parse(last);
    const lastspawn = Date.now() - parse;
    const LastSpawn = moment.duration(lastspawn).format(" D [days], H [hours], m [minutes], s [seconds]");
    let End = recentspawn.length;
    let batas = End-6;
    const number1 = cards.split("\n")[batas+5] ? cards.split("\n")[batas+5] : ""
    const number2 = cards.split("\n")[batas+4] ? cards.split("\n")[batas+4] : ""
    const number3 = cards.split("\n")[batas+3] ? cards.split("\n")[batas+3] : ""
    const number4 = cards.split("\n")[batas+2] ? cards.split("\n")[batas+2] : ""
    const number5 = cards.split("\n")[batas+1] ? cards.split("\n")[batas+1] : ""
    const number6 = cards.split("\n")[batas] ? cards.split("\n")[batas] : ""

    const claimer1 = Claimer.split("\n")[batas+5] ? Claimer.split("\n")[batas+5] : ""
    const claimer2 = Claimer.split("\n")[batas+4] ? Claimer.split("\n")[batas+4] : ""
    const claimer3 = Claimer.split("\n")[batas+3] ? Claimer.split("\n")[batas+3] : ""
    const claimer4 = Claimer.split("\n")[batas+2] ? Claimer.split("\n")[batas+2] : ""
    const claimer5 = Claimer.split("\n")[batas+1] ? Claimer.split("\n")[batas+1] : ""
    const claimer6 = Claimer.split("\n")[batas] ? Claimer.split("\n")[batas] : ""
    
    const embed = new Discord.MessageEmbed()
    .setTitle("__Recent Cards__")
    .addField(`• __Card__`, `${number1}\n${number2}\n${number3}\n${number4}\n${number5}\n${number6}`, true)
    .addField(`• __Claimed by__`, `${claimer1}\n${claimer2}\n${claimer3}\n${claimer4}\n${claimer5}\n${claimer6}`, true)
    .setColor("RANDOM")
    .setFooter(`Last spawn: ${LastSpawn} ago`)
     return message.channel.send({ embed }).catch(err => {
    return message.channel.send("Error : " + err)
    })
    }
}
exports.help = {
    name: "recent",
    name2: "Recent",
    description: "Showing recent card spawned on the server",
    usage: "recent <tier>",
    example: "recent tier1"
  }
  
  exports.conf = {
    aliases: ["r"],
    cooldown: 3
  }
