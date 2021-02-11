module.exports = {
    name: "setmod",
    aliases: ["mod"],
    description: "this is a set Mod command!",
    execute(client, message, args, Discord) {
        let role = message.guild.roles.cache.find((r) => r.name === "Mod"); //This will find role's name and use it's id

        if (message.member.roles.cache.some((r) => r.name === "Mod")) {
            //If use has(id) we will need role's id, to use role's name using some()
            message.channel.send(
                "You have Mod role!, Let me try to remove it!"
            );
            message.member.roles.remove(role).catch(console.error);
        } else {
            message.channel.send(
                "You dont have Mod role!, Let me add it for you!"
            );
            message.member.roles.add(role).catch(console.error);
        }
    },
};
