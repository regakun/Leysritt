const Genius = require("genius-lyrics");
const Client = new Genius.Client("NkVoH4f7KGxfWcFlmSEuTt-sP5_yDo_85XxBK9iP_n-3gIIR4bdHJBUPS-nomxZ9");
const qqMusic = require('qq-music-api');
const lyricsFinder = require('lyrics-finder');


module.exports = {
    name: 'lyrics',
    description: 'Search a lyrics',
    async execute(message, args) {
        message.channel.send('Im Sorry Master, Im Currently Learning that!')
        // console.log(args)
        // let cmd = message.content.slice(7).split('-')
        // console.log(cmd)
        // let artist = cmd[0].split('-')[0]
        // let title = cmd[1]
        // console.log(artist)
        // console.log(title)
        // let lyrics = await lyricsFinder(artist, title);
        // console.log(lyrics,'lyrics');
        // const searches = await Client.songs.search('starlog');
        // console.log(searches);
        // message.channel.send('')


        // 部分接口依赖 cookie, 这里穿参可以使用字符串或对象
        // qqMusic.setCookie('xxx=xxx; xxx=xxx;');
        // or
        // qqMusic.setCookie({ a: 'xxx', b: 'xxx' });

        // qqMusic.api('search', { key: args })
        //     .then(res => console.log(res.data,' ini aaa'))
        //     .catch(err => console.log('error'))

        // qqMusic.api('search', { key: '周杰伦' })
        //     .then((res) => console.log('搜索周杰伦：', res))
        //     .catch(err => console.log('接口调用出错'))

        // qqMusic.api('search/hot')
        //     .then((res) => console.log('热搜词：', res))
        //     .catch(err => console.log('接口调用出错'))//

        // 刷新登陆
        // qqMusic.api('user/refresh')

    }
}