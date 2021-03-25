module.exports = {
    name: "ping",
    aliases: [],
    permissions: ["SEND_MESSAGES"],
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord) {
        // message.channel.send("Pong!");
        // message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`);
        message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms\nAPI Latency is ${Math.round(client.ws.ping)}ms`);
    },
};
