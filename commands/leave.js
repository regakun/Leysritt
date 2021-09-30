module.exports = {
    name: 'leave',
    description: 'this is leave command',
    execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        voiceChannel.leave();
        message.channel.send(' :david:  adeios amigo')
    }
}