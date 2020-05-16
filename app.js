var Discord = require("discord.js");
var prefix = "-";
var client = new Discord.Client();
client.on("ready", () => {
});

var bannedwords = "https://discord.gg/, https://discord.gg".split(",");

client.on("msg", msg => {
  if (msg.guild === null) return;

  for (i=0;i<bannedwords.length;i++) {
    if (msg.content.toLowerCase().includes(bannedwords[i])) {
      msg.delete();
      msg.reply("NO ADS!")
      console.log("Someone Used A Word That Is Banned!")
      return;
    }
  }



  
  if (msg.author.bot) return;
  if (!msg.member.hasPermission("BAN_MEMBERS")) return;

  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(mem.displayName + " has been kicked by " + msg.author.username + "!");
      console.log("Member Has Been Kicked!")
    }).catch(e => {
      msg.channel.send("An error occured!");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " has been banned by " + msg.author.username + " for " + mc + " days!");
      console.log("Member Has Been Banned!")
    }).catch(e => {
      msg.channel.send("An error occured!");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been muted!");
      }).catch(e => {
        msg.channel.send("An error occured!");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been unmuted!");
      }).catch(e => {
        msg.channel.send("An error occured!");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "del")) {
    var mc = msg.content.split(" ")[1];
    msg.channel.bulkDelete(mc);
}
if (msg.content.toLowerCase().startsWith(prefix + "slow")) {
  client.channels.cache.get('703505217353809994').setRateLimitPerUser(2560);
  client.channels.cache.get('703196055457628183').setRateLimitPerUser(2560);
  client.channels.cache.get('703505234865029240').setRateLimitPerUser(2560);
  client.channels.cache.get('703505322379182103').setRateLimitPerUser(2560);
  client.channels.cache.get('706913142684516402').setRateLimitPerUser(2560);
  client.channels.cache.get('708306909198942220').setRateLimitPerUser(2560);
  client.channels.cache.get('708306958800781332').setRateLimitPerUser(2560);
  client.channels.cache.get('703506582331195393').setRateLimitPerUser(2560);
  msg.channel.send("Channel's Have been slowed :white_check_mark:")
  return;
}
if (msg.content.toLowerCase().startsWith(prefix + "created")) {
  msg.channel.send("This bot was co-created by `**@bradyntremmel#0999**` and made by `**@Battery Productions(Cupcakes)#6381**` ")
  return;


}
if (msg.content.toLowerCase().startsWith(prefix + "sl")) {
  client.channels.cache.get('703505217353809994').setRateLimitPerUser(0);
  client.channels.cache.get('703196055457628183').setRateLimitPerUser(0);
  client.channels.cache.get('703505234865029240').setRateLimitPerUser(0);
  client.channels.cache.get('703505322379182103').setRateLimitPerUser(0);
  client.channels.cache.get('706913142684516402').setRateLimitPerUser(0);
  client.channels.cache.get('708306909198942220').setRateLimitPerUser(0);
  client.channels.cache.get('708306958800781332').setRateLimitPerUser(0);
msg.channel.send("slowdown reset :ok_hand:")
return;
}
});
client.on("msg", msg => {
  if (msg.content.startsWith(prefix+"hook")) {
      const hook = new Discord.WebhookClient('708104169118105601','87yXwSH9YeGzn_-Vvj4fKn4LvH0jn1Gn7XTs7sVSHRC_Xv7iWtKq7lzZ7N-XCzZbPMsJ');
      const args = msg.content.split(" ").slice(1);
       let string = args.join(" ");
      try {   
          hook.send(string)
      } catch (err) {
          console.log(err)
          msg.react("❌")
      }
      msg.react("✅")
    }
    });
    var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' , '+time;
//modlog
    //Joined
client.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(ch => ch.name === 'modlog');
    if (!channel) return;
    channel.send(`✅**\`[${dateTime}]\` \`${member.user.tag}\` has joined the server.**
    **Total Members:\`${member.guild.memberCount}\`**`);
})
    //Left
client.on('guildMemberRemove', member =>{
    const channel = member.guild.channels.cache.find(ch => ch.name === 'modlog');
    if (!channel) return;
    channel.send(`❌**\`${dateTime}\` \`${member.user.tag}\` has left the server.** 
    **Total Members:\`${member.guild.memberCount}\`**`);
});
    //msg Delete
client.on('msgDelete', msg =>{
    const channel = msg.member.guild.channels.cache.find(ch => ch.name === 'modlog');
    if (!channel) return;
    channel.send(`🗑️**\`[${dateTime}]\` A msg by \`${msg.author.tag}\` was deleted.**
    **msg Deleted:\`${msg.content}\`**`);
});
    //msg Edit
client.on('msgUpdate', async(oldmsg, newmsg) =>{
    const channel = newmsg.member.guild.channels.cache.find(ch => ch.name === 'modlog');
    if (!channel) return;
    if(oldmsg !== newmsg) return
    channel.send(`✏️**\`[${dateTime}]\` A msg by \`${newmsg.author.tag}\` edited.**
    **Before:\`${oldmsg.content}\`**
    **After:\`${newmsg.content}\`**`);
});
client.on("msg", msg=> {
if (message.content.startsWith(prefix+"warn")) {
  try{
  if(message.author.id !== owner) return message.react("❌")
  let args = message.content.slice(prefix.length).split(/ +/);
  let reason = args.slice(2).join(' ')
  let user = message.mentions.users.first()
  const channel = message.member.guild.channels.cache.find(ch => ch.name === 'modlog');
  if (!channel) return;
  if (!reason) return message.react("‼️")
  if (message.mentions.users.size < 1) return message.react("❔")
  var warninglog = new Discord.MessageEmbed()
  .setAuthor("Warning ⚠️")
  .addField('Username:', user.tag, false)
  .addField('Reason:', reason, false)
  .addField('Warned by:', message.author.tag, false)
  .setFooter(dateTime)
  channel.send(warninglog)
  } catch (err) {
      console.log(err)
      message.react("❌")  
  }
  message.react("✅")
}
});

   client.login("");
