const Discord = require('discord.js')
const DisTube = require('distube')
require('dotenv').config()
const fs = require('fs') 
const client = new Discord.Client()
const prefix = '-'

const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });


client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.once('ready',() => {
    console.log('Leysritt at your service')
})

client.on('message', async (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (command == 'ping') {
        client.commands.get('ping').execute(message, args)
    }
    // else if(command == 'play' || command == 'p') {
    //     client.commands.get('play').execute(message, args)
    // }
    else if(command == 'leave' || command == 'dc') {
        client.commands.get('leave').execute(message, args)
    }

    else if(command == 'lyrics') {
        client.commands.get('lyrics').execute(message, args)
    }

    else if (command == "play" || command == 'p' )
    distube.play(message, args.join(" "));

    else if (["repeat", "loop"].includes(command))
        distube.setRepeatMode(message, parseInt(args[0]));

    else if (command == "stop") {
        distube.stop(message);
        message.channel.send("Stopped the music!");
    }

    else if (command == "skip" || command == 's')
        distube.skip(message);

    else if (command == "queue" || command == 'q') {
        let queue = distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }

    else if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = distube.setFilter(message, command);
        message.channel.send("Current queue filter: " + (filter || "Off"));
    }

    else if (command == 'help') {
        message.channel.send("Im sorry master, all i can do is just ```play, stop, skip, queue, leave and ping``` command")
    }
});

    // Queue status template
    const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

    // DisTube event listeners, more in the documentation page
    distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    ))
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("An error encountered: " + e);
    });

// })

























client.login(process.env.TOKEN)