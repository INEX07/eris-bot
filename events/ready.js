module.exports = (client) => {

    console.log(`${client.user.username}#${client.user.discriminator} is online!`); // print text when bot is ready

    // set discord status
    client.editStatus('status', {
        name: 'Minecraft', // game name
        type: 0 // game type: 0 - playing, 1 - streaming, 2 - listening, 3 - watching
    });

}
