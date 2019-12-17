module.exports = (client, message) => {

    if (message.author.bot || !message.channel.guild) return;
    if (!message.content.startsWith(client.prefix)) return;

    let args = message.content.slice(client.prefix.length).trim().split(" ");
    let command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

    if (!cmd) return;

    cmd.run(client, message, args);

}
