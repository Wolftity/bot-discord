const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({
    fetchAllMembers: true,
    partials:['MESSAGE', 'REACTION']
});
client.commands = new Discord.Collection()
config = require('./config.json');

client.once('ready', () =>{
    console.log('Ready!');
});
 
client.login(process.env.TOKEN);



fs.readdir('./commands', (err , files) => {
    if(err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command =require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })

})

client.on('message', message => {
    if(message.type !== 'DEFAULT'|| message.author.bot) return

    const args = message.content.trim().split(/ +/)
    const commandName = args.shift().toLowerCase()
    if(!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if(!command) return
    command.run(message, args, client)
})

client.on('guildMemberAdd', member =>{
    member.guild.channels.cache.get(config.greeting.channel).send("bonjour 🖐️ et bienvenu à "+"<@"+ member.id +">"+" merci garce a toi nous somme "+"__**"+ member.guild.memberCount +"**__"+ " membre ✨\nn'hesite pas a lire  <#830121358142603285>")
    member.roles.add(config.greeting.role)
})
client.on('guildMemberRemove', member =>{
    member.guild.channels.cache.get(config.greeting.channel).send("<@"+ member.id +">" +" est partis 😭 a cause de lui on est plus que "+"__**"+ member.guild.memberCount +"**__"+ " membre 🚨")
})
client.on("message", message => {
    if(message.author.bot) return;

    if(message.content.startsWith("salut"))message.react("👋");
    //if(message.type =='DEFAULT')message.react("✅");
})

client.on('messageReactionAdd', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    console.log("if (!reaction.message.guild || user.bot) return")
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    console.log("const reactionRoleElem = config.reactionRole[reaction.message.id]")
    if (!reactionRoleElem) return
    console.log(" if (!reactionRoleElem) return")
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})

/*client.on('messageReactionRemove', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id = 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
})*/

 
