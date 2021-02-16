module.exports = {
    name: "invite",
    aliases: [],
    permissions: ["SEND_MESSAGES"],
    description: "send invte link of BOT",
    execute(client, message, args, Discord) {
        const avatarURL = client.user.displayAvatarURL({
            format: "png",
            dynamic: true,
            size: 1024,
        });
        const inviteURL = "https://discord.com/oauth2/authorize?client_id=800473966116470834&scope=bot&permissions=8";
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#F4D18F")
            .setTitle("Hi! I'm Twisna Bot!")
            .setURL(
                inviteURL
            )
            .setAuthor(
                "Twisna Bot!",
                avatarURL
            )
            .setDescription(
                `Nice to meet you! Here is my [invite link](${inviteURL})`
            )
            .setThumbnail(
                avatarURL
            );
        message.channel.send(newEmbed);
    },
};
