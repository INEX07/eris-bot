const { DiscordEmbed } = require("embedcord");

module.exports.run = async (client, message, args) => {

    const embed = new DiscordEmbed()
        .setTitle("This is your title, it can hold 256 characters")
        .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
        .setColor("RANDOM") // Available: "RANDOM", "DEFAULT", "BLURPLE", "RED", "GREEN" & Color int
        .setDescription("This is the main body of text, it can hold 2048 characters.")
        .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
        .setImage("http://i.imgur.com/yVpymuV.png")
        .setThumbnail("http://i.imgur.com/p2qNFag.png")
        .setTimestamp("2019-12-17T11:07:34.652Z"/* enter custom timestamp or leave it blank */)
        .setURL("https://discord.gg")
        .addField("This is a field title, it can hold 256 characters", "This is a field value, it can hold 1024 characters.")
        .addBlankField() // blank field
        .addField("Inline Field", "They can also be inline.", true)
        .addField("Inline Field 2", "They can also be inline.", true)
        .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

    message.channel.createMessage({ content: "Embed created by Embedcord https://npmjs.com/package/embedcord [Embed builder for discord] to build embeds like discord.js. | Code & images taken from https://anidiots.guide/first-bot/using-embeds-in-messages#richembed-builder", embed: embed.embed });

}

module.exports.help = {
    name: 'embed',
    aliases: ['em']
}
