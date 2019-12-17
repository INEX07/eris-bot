const { DiscordEmbed } = require("embedcord");

module.exports.run = async (client, message, args) => {

    const embed = new DiscordEmbed()
        .setAuthor(`Bot Commands`, client.user.dynamicAvatarURL("png", 1024))
        .addField(`Total Commands`, client.commands.size)
        .addField("Prefix", client.prefix)
        .setColor("RED")
        .setTimestamp()
        .setThumbnail(client.user.dynamicAvatarURL("png", 1024))
        .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);

    client.commands.forEach(c => {
        embed.addField(`${c.help.name}`, `Aliases: \`${c.help.aliases.join(", ")}\``);
    })

    return message.channel.createMessage({ embed: embed.embed });

}

module.exports.help = {
    name: 'help',
    aliases: ['commands', 'cmds', 'h']
}
