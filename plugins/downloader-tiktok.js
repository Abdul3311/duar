import { tiktok } from '../lib/tiktok.js'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
try {
   let res = await tiktok(args[0])
   let cap = `${res.title}

*[-] Author :* ${res.author}
*[-] Creator :* Elaina`
conn.sendHydrated(m.chat, cap, author, res.nowm, args[0], 'URL', null, null, [
   ['Get Audio', '.get ' + res.audio],
   ['With Watermark', '.get ' + res.wm],
   [null, null]
   ], m)
} catch (e) {
console.log(e)
m.reply('Maap Sepertinya Ada Yang Error')
}
} 
handler.command = /^(tt|tiktok)$/i
handler.help = ['tiktok', 'tt']
handler.tags = ['downloader']

export default handler