import fetch from 'node-fetch' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `⚠️️ *_Masukkan tautan di sebelah perintah._*\n*_📌 Untuk mencari tautan jenis apkmod Anda:_* /searchmod *nombre*`
    if (!args[0].match(/rexdl.com/gi)) throw `❎ Link Salah`
   
    let res = await fetch(`https://api.akuari.my.id/downloader/dlmod2?link=${args[0]}`)
    let json = await res.json()
    let { title, version, size, updated } = json.respon
    let info = `*🐢 • Tittle :* ${title}\n*🎋 • Versi:* ${version}\n*🗓️ • Memperbarui:* ${updated}\n*📁 • Ukuran :* ${size}`
    await conn.sendNyanCat(m.chat, `${info}\n${global.wait}`, adnyancat, botname, me, script, m)
    
conn.sendMessage(m.chat, { document: { url: `${json.respon.download[0].url}` }, mimetype: 'application/videos.android.package-archive', fileName: `${title}.apk` }, { quoted: m })
}
handler.help = ['dlmodapk *<url>*']
handler.tags = ['downloader']
handler.command = ['dlmodapk', 'dlapkmod'] 
handler.register = true

handler.limit = true

export default handler