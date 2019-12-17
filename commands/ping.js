const { DiscordEmbed } = require("embedcord");

module.exports.run = async (client, message, args) => {

    message.channel.createMessage("Pinging...").then(m => {

        const embed = new DiscordEmbed()
            .setAuthor(`Pong!`, message.channel.guild.iconURL)
            .addField("Bot Latency", `\`${m.timestamp - message.timestamp}ms\``)
            .addField("API Latency", `\`${Math.floor(client.shards.get(client.guildShardMap[message.channel.guild.id]).latency)}ms\``)
            .setFooter(`${client.user.username}`, client.user.dynamicAvatarURL("png", 1024))
            .setTimestamp()
            .setColor("BLURPLE")
        m.edit({ content: "Pong!", embed: embed.embed });
    })
}

module.exports.help = {
    name: 'ping',
    aliases: ['pong', 'latency']
}
