require('dotenv').config() // for process.env

const Eris = require("eris"); // Eris discord lib.
const client = new Eris(process.env.BOT_TOKEN, { getAllUsers: true, disableEveryone: true }); // Token & options

// for commands
const fs = require("fs");
const Enmap = require("enmap");
client.commands = new Enmap();
client.aliases = new Enmap();

// bot prefix
client.prefix = "?";

// commands
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading ${commandName}.js....`);
        client.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

// events
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.connect(); // login to discord
