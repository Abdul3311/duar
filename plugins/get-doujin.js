import { NHentai } from '@shineiichijo/nhentai-ts'
const nhentai = new NHentai()

let handler = async (m, { conn, text }) => {
if (db.data.users[m.sender].premiumTime < 1) return m.reply('KHUSUS PREMIUM USER')
if (!text) throw 'Masukan Query'
const { data } = await nhentai.search('loli', { page: 1 })
const doujin = data[0]
const { images } = await doujin.getContents()
m.reply(`Mengirim ${images.pages.length}, Wait Proses`)
for(var media of images.pages) {
conn.sendFile(m.chat, media, 'doujin.jpg', '', m)
await sleep(3000)
}
}
handler.help = ['doujin <Query>']
handler.tags = ['nsfw']
handler.command = ['doujin']

export default handler 

async function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}