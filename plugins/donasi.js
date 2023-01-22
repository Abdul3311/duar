import fetch from 'node-fetch'
import { sendArifMessage } from '../lib/message.js'

let handler  = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/e9e090fe7189b8a93a0bb.jpg'
let thum = await conn.resize(pp, 300, 300)
let name = await conn.getName(m.sender)
let donasi = `Hai ${name}, Ingin Donasi ?

Dana : 0895347198105
Gopay : 082112309624

Atau Scan Qr Di Atas Untuk Payment

Note : Jika Sudah Donasi Silahkan
Kirim Bukti Ke Ke Owner !

My Owner : https://w.me/6285838225041`
sendArifMessage(m.chat,  { 
text: donasi,
mentions:[m.sender],
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": 'Support Me', 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": thum,
"sourceUrl": 'https://chat.whatsapp.com/JB8MQZXiGI4059lnmUawZt'
}
}
})
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler