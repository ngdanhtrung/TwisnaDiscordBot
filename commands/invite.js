module.exports = {
    name: "invite",
    aliases: [],
    permissions: ["SEND_MESSAGES"],
    description: "send invte link of BOT",
    async execute(client, message, args, Discord) {
        const avatarURL = client.user.displayAvatarURL({
            format: "png",
            dynamic: true,
            size: 1024,
        });
        const inviteURL = await client.generateInvite({
            permissions: ["ADMINISTRATOR"],
        });
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
