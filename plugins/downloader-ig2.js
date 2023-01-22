import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'

  await conn.reply(m.chat, `ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴍᴇᴅɪᴀ ғʀᴏᴍ ɪɴsᴛᴀɢʀᴀᴍ`, 0, {
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        mediaUrl: '',
        mediaType: 2,
        description: sgc,
        title: global.wm,
        body: 'Nih Kak', //`${fileSizeH}`,
        sourceUrl: snh,
        thumbnail: fs.readFileSync('./thumbnail.jpg')
      }
    }
  })
  let url  = await fetch(`https://vamses-rest-api.chonix2.repl.co/api/download/instagram?apikey=Alphabot&url=${args[0]}`)
  let anu = await url.json()
for (let i of anu.result) {
await conn.sendFile(m.chat, i.url, 'ig.mp4', 'Nih', m)
}
}
handler.tags = ['downloader']
handler.command = /^(ig2)?$/i

handler.limit = true

export default handler