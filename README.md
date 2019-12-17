# eris-bot
A simple discord bot written in Eris.

> Discord.JS Style

# Creating a Bot Account
**[Click Here](https://anidiots.guide/getting-started/getting-started-windows-tl-dr)**

# Installing the bot
- Download the project
- Open cmd/powershell on the project directory
- Run `npm install`
- Change the file name **DOTenv** to **.env**
- Put your bot token in .env file
> **Example:** BOT_TOKEN=YourBotToken
- Run `npm start` or `npm test` or `node index.js`

**🎉 Your bot is online! 🎉**

# Commands
- `avatar`
- `embed`
- `help`
- `ping`

# Creating embeds in message
```js
const Eris = require("eris");

const bot = new Eris("BOT_TOKEN");

bot.on("ready", () => {
    console.log("Ready!");
});

bot.on("messageCreate", (msg) => {
    if(msg.content === "!embed") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "I'm an embed!",
                description: "Here is some more info, with **awesome** formatting.\nPretty *neat*, huh?",
                author: {
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000,
                fields: [
                    {
                        name: "Some extra info.",
                        value: "Some extra value.",
                        inline: true
                    },
                    {
                        name: "Some more extra info.",
                        value: "Another extra value.",
                        inline: true
                    }
                ],
                footer: {
                    text: "Created with Eris."
                }
            }
        });
    }
});

bot.connect();
```

# Easy embed builder

- `npm i --save embedcord`

```js
const { DiscordEmbed } = require("embedcord");
const Eris = require("eris");

const bot = new Eris("BOT_TOKEN");

bot.on("ready", () => {
    console.log("Ready!");
});

bot.on("messageCreate", (message) => {

    if(message.content === "!embed") {
      
      const embed = new DiscordEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle("I'm an embed!")
        .setDescription("Here is some more info, with **awesome** formatting.\nPretty *neat*, huh?")
        .setColor(0x008000)
        .addField("Some extra info.", "Some extra value.", true)
        .addField("Some more extra info.", "Another extra value.", true)
        .setFooter("Created with Eris.")
      
      bot.createMessage(message.channel.id, { embed: embed.embed })
      
    } 
    
});

bot.connect();
```
