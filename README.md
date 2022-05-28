# QuestRescan
 
## Setting up

- Clone from github
- Jump into directory
- Copy config en embed file ``cp config.example.json config.json && cp embed.example.json embed.json``
- Change config.json and example.json
- ``npm install``

### config.json

- token: ID of your discord bot
- guildID: ID of your discord server
- receiveChannelID: In which channel do you receive the message to start a rescan
- sendChannelID: In which channel do you want to inform your users
- adminRoleID: If there is an error in starting rescan, this role will be mention
- authorTriggerName: The name of the bot which will send the message in receiveChannelID
- mad_url: The url of your MAD server
- mad_username: MAD username
- mad_password: MAD Password
- contentMessage: If you want to put extra info in your message like mention (embed will not work with mentions)

### embed.json

Create a json file to send an embed message. This is the message to inform the users.
See also: https://discordjs.guide/popular-topics/embeds.html#using-an-embed-object


### Start bot
