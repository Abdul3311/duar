import { fbdl } from '../lib/fbdl.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw 'Masukan URL Facebook...'
if (!text.includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://fb.watch/g_OK0Ge3Vz/`)
let res = await fbdl(text)
m.reply('Wait Lagi Proses...')
conn.sendFile(m.chat, res.HD, 'fbdl.mp4', `Downloader Facebook By NadeshikoBot\n\n[-] Quality : Standar Distans`, m)
}
handler.help = ['fbhd', 'facebookhd']
handler.tags = ['downloader']
handler.command = /^(facebook|fb)hd$/i

handler.limit = true 

export default handler