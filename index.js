require("dotenv").config();
require('console-stamp')(console);
const { Client, Intents, MessageEmbed } = require("discord.js");
const config = require('./config.json');
const { reloadRequest } = require('./request.js');
const fs = require('fs');

// Get the embed message
let rawEmbedMessage = fs.readFileSync('embed.json');
let embedMessage = JSON.parse(rawEmbedMessage);

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});


client.once("ready", () => {
    console.log("Quest Rescan bot is ready.");
});

client.on("messageCreate", message => {
    if (message.author.bot && message.author.username == config.authorTriggerName && message.receiveChannelID == config.channelID) {
        console.log("Message received from " + config.authorTriggerName + " bot");

        sendChannel = client.channels.cache.get(config.sendChannelID);

        // Start rescan
        reloadRequest().then(
            res => {
                if (res == 200) {
                    console.log("Succesfully start rescan quests");
                    sendChannel.send({ content: config.contentMessage, embeds: [embedMessage], ephemeral: false, components: [] });
                }
                else {
                    console.error("ERROR - Starting Rescan quest");
                    const embed = new MessageEmbed().setDescription('ERROR in starting rescan quests').setColor('RED');
                    message.reply({ content: "<@&" + config.adminRoleID +">", embeds: [embed], ephemeral: false, components: [] });
                }
            },
        );
    }
});

client.login(config.token);