// const ytdl = require('ytdl-core')
// const ytSearch = require('yt-search')
// let queue = []
// let isPlaying = false

// async function playMusic(id){
//     const connection = await voiceChannel.join();
//     const stream = ytdl(queue[id], {filter: 'audioonly'})
//     message.reply(`:thumbsup: Now Playing ***${video.title}***`)
//     connection.play(stream, {seek: 0, volume: 1}).on('finish', () => {
//         let now = queue[0]
//         for (let i = 1; i < queue.length-1; i++) {
//             queue[i-1] = queue[i]
            
//         }
//         queue[queue.length] = now
//         playMusic(0)
//     })
// }

// module.exports = {
//     name: 'play',
//     description: 'Play a music from Youtube!',
//     async execute(message,args) {
//         const voiceChannel = message.member.voice.channel;
//         if (!voiceChannel) {
//             return message.channel.send('You need to be in a Voice Channel to execute this command!')
//         }

//         const permissions = voiceChannel.permissionsFor(message.client.user)
//         if (!permissions.has('CONNECT')) {
//             return message.channel.send('You Dont Have The Correct Permission :(')
//         }
//         if (!permissions.has('SPEAK')) {
//             return message.channel.send('You Dont Have The Correct Permission :(')
//         }

//         if (!args.length) {
//             return message.channel.send('You need to send the second argument!')
//         }

//         // const connection = await voiceChannel.join();
//         const videoFinder = async (query) => {
//             const videoResult = await ytSearch(query)
//             return (videoResult.videos.length > 1) ? videoResult.videos[0] : null
//         }
//         // console.log(queue)
//         // console.log(queue.length)
//         const video =  await videoFinder(args.join('    '))
//         if (video) {
//             if (queue.length == 0) {
//                 queue.push(video.url)
//                 if (isPlaying === false) {
//                     playMusic(0)
//                     isPlaying = true
//                     // const stream = ytdl(queue[0], {filter: 'audioonly'})
//                     // connection.play(stream, {seek: 0, volume: 1}).on('finish', () => {
//                     //     voiceChannel.leave()
//                     // })
//                     // await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
//                 }else{
//                     queue.push(video.url)
//                     await message.reply(`:thumbsup: ***${video.title}*** added to queue!`)
//                 }
//             }else{
//                 queue.push(video.url)
//                 await message.reply(`:thumbsup: ***${video.title}*** added to queue! 2`)
//             }

//         }else{
//             message.channel.send('No videos found')
//         }
//     }
// }


// module.exports = {
//     name: 'skip',
//     description: 'skip a queue!',
//     async execute(message,args) {
//         const voiceChannel = message.member.voice.channel;
//         if (!voiceChannel) {
//             return message.channel.send('You need to be in a Voice Channel to execute this command!')
//         }

//         const permissions = voiceChannel.permissionsFor(message.client.user)
//         if (!permissions.has('CONNECT')) {
//             return message.channel.send('You Dont Have The Correct Permission :(')
//         }
//         if (!permissions.has('SPEAK')) {
//             return message.channel.send('You Dont Have The Correct Permission :(')
//         }

//         if (!args.length) {
//             return message.channel.send('You need to send the second argument!')
//         }

//         if (queue.length == 0) {
//             if (isPlaying === false) {
//                 return message.channel.send('You dont even play a music, Master!')
//             }else{

//             }
//         }else{
//             return message.channel.send('You dont even have a music in playlist, Master!')
//         }
//     }
// }