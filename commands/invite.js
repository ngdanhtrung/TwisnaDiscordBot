module.exports = {
    name: "invite",
    aliases: [],
    permissions: ["SEND_MESSAGES"],
    description: "send invte link of BOT",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#F4D18F")
            .setTitle("Hi! I'm Twisna Bot!")
            .setURL(
                "https://discord.com/oauth2/authorize?client_id=800473966116470834&scope=bot&permissions=8"
            )
            .setAuthor(
                "Twisna Bot!",
                "https://media.discordapp.net/attachments/811298966293577729/811298986635558912/tohru-drunk.jpg?width=676&height=676"
            )
            .setDescription(
                "Nice to meet you! Here is my [invite link](https://discord.com/oauth2/authorize?client_id=800473966116470834&scope=bot&permissions=8)"
            )
            .setThumbnail(
                "https://media.discordapp.net/attachments/811298966293577729/811298986635558912/tohru-drunk.jpg?width=676&height=676"
            );
        message.channel.send(newEmbed);
    },
};
