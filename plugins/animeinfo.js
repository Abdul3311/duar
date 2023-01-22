import { anime } from '../lib/anime.js'

let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukan Query Anime !'
let res = await anime(text)
let { title, image, trailer, synopsis, related, staff } = res 
let info = res.info
let caption = `*${title}\n\n`
for (let x of info) {
  caption += `${x.type} : ${x.result}\n`
}
conn.sendFile(m.chat, image, 'anime.jpg', caption + `\n*Trailer :* ${trailer}\n\n*Synopsis :* ${synopsis}`, m)
}
handler.help = ['anime', 'animeinfo'].map(v => v + ' <judul>')
handler.tags = ['animsearch']
handler.command = /^(anime|animeinfo)$/i

export default handler