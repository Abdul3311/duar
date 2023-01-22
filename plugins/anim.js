import { anime } from '../lib/anime.js'

let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukan Query Anime !'
let res = await anime(text)
for (var x of res.info) {
m.reply(`Type : ${x.type}\nResult : ${x.result}`)
}
}
handler.command = ['anim']

export default handler