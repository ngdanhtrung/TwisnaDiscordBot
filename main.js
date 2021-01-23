const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

const config = require('./config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('TwisnaBot is online!');
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        //message.channel.send('Pong!');
        client.commands.get('ping').execute(message, args);
    } else if (command === 'setmod') {
        //message.channel.send('this is a set Mod command!');
        client.commands.get('setMod').execute(message, args);
    } else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args, Discord);
    }
})







client.login(config.token);