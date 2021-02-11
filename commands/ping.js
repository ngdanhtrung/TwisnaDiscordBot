module.exports = {
    name: "ping",
    aliases: [],
    description: "this is a ping command!",
    execute(client, message, args) {
        message.channel.send("Pong!");
    },
};
