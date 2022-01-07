module.exports = {
    run : message =>{
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('BIENVENUE SUR LE DISCORD DE MYTHOLOGIA')
            //.setDescription("Merci de bien vouloir respecter les règles ci-dessous\nVous pouvez en cas de problème contacter les staffs\n\nRÈGLEMENT GÉNÉRAL\n1. Le spam et toute forme de flood sont interdits\n2. Les propos violents ou offensants sont interdits\n3. La publicité impertinente est strictement interdite\n4. La contestation de sanction en public est interdite\n5. RESPECTEZ tout simplement les joueurs")
            .setDescription(`Merci de bien vouloir respecter les règles ci-dessous
            Vous pouvez en cas de problème contacter les staffs
            
            RÈGLEMENT GÉNÉRAL
            1. Le spam et toute forme de flood sont interdits
            2. Les propos violents ou offensants sont interdits
            3. La publicité impertinente est strictement interdite
            4. La contestation de sanction en public est interdite
            5. RESPECTEZ tout simplement les joueurs`)
            .setColor("#00ff00")
            //.setAuthor('Staff de Mythologia','https://cdn.discordapp.com/attachments/830045016087855135/831527010622767164/Mythologia.png')
            .setImage('https://cdn.discordapp.com/attachments/830045016087855135/831519935523192843/Mythologia.gif')
            .setThumbnail('https://cdn.discordapp.com/attachments/829811582959616011/831541897830465587/SPOILER_Sans_titre_2.png')
            .setFooter('MYTHOLOGIA','https://cdn.discordapp.com/attachments/830045016087855135/831527010622767164/Mythologia.png'))
    },
    name : 'embedrules'
}