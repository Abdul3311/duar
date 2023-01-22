import { character } from '../lib/anime.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix + command} Miku`
    let result = await character(text)
    let charaa = result.voice_actor
    let res = charaa.getRandom()
let gambar = await(await fetch(res.image).buffer()
await conn.sendFile(m.chat, gambar, 'chara.jpg', 'nih ' + text, m)
}
handler.help = ['chara']
handler.tags = ['anime']
handler.command = /^(chara)$/i

export default handler