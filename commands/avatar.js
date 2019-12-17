const { DiscordEmbed } = require("embedcord");

module.exports.run = async (client, message, args) => {

    let user = message.mentions[0] || message.author;
    let avatar = user.dynamicAvatarURL("png", 1024); 
    // let displayAvatarURL = user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?size=1024`: `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`;
    let defaultAvatar = `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`;

    const em = new DiscordEmbed()
        .setTitle("Avatar of " + user.username + "#" + user.discriminator)
        .setURL(avatar)
        .setImage(avatar)
        .setThumbnail(defaultAvatar)
        .addField("Default Avatar", "This ➡")
        .addField("Display Avatar", "This ⤵")
        .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL)
        .setTimestamp()
        .setColor("RANDOM")
    message.channel.createMessage({ embed: em.embed });

}

module.exports.help = {
    name: 'avatar',
    aliases: ['av', 'pfp']
}
