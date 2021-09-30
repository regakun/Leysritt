module.exports = {
    name: 'clear',
    description: 'this is clear command',
    execute(message, args) {
        message.channel.send('何だ？')
    }
}