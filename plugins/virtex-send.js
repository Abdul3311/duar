import { ngazap } from '../virus/ngazap.js'

let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukan Nomor Yang Mau Di Send'
conn.sendMessage(text + '@s.whatsapp.net', { text: ngazap }, { quoted: m })
}
handler.command = /^(send)virus|virtex|ngazap$/i

handler.owner = true 

export default handler