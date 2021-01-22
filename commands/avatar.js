module.exports = {
    name: 'avatar',
    description: "this is a avatar command!",
    execute(message, args, Discord) {
        const member = message.mentions.users.first() || message.author;
        const avatarURL = member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
        const UserName = member.tag;
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle(UserName)
            .setURL(avatarURL)
            .setImage(avatarURL);
        message.channel.send(newEmbed);
    }
}