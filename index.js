require("dotenv").config();
const disc = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
app.listen(3000)
const client = new disc.Client(
    { checkUpdate: false }
);

const ids = [
    // RobTop
    "290162530720940034",
    // km7dev (testing)
    "736377234885050541",

];

client.on('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', async (message) => {
    if (ids.includes(message.author.id)) {
        if (message.content.startsWith("____")) return;
        client.guilds.cache.get('1190931690844065902').channels.cache.get('1190931691305435227').send("____<@736377234885050541>\n`" + message.author.tag + "` sent:\n" + message.content);
    }
});

client.login(process.env.t1);

const client2 = new disc.Client(
    { checkUpdate: false }
);

client2.on('ready', () => {
    console.log('Ready 2!');
});

client2.on('messageCreate', async (message) => {
    if (message.author.id == "736377234885050541") {
        if (!message.content.startsWith("____")) return;
        client2.guilds.cache.get('1190931690844065902').channels.cache.get('1190931691305435227').send(message.content);
    }
});

client2.login(process.env.t2);

console.log("runnin")
