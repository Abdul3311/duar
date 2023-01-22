let handler  = async (m, { conn, usedPrefix: _p }) => {
let str = `
✧─────[ *Group Support* ]─────✧
☁️ Chill People :
https://chat.whatsapp.com/ER7mobRYZ33EBHcCE8YRUw
☁️ Random People :
https://chat.whatsapp.com/CVf4jyqdMZt56sSn9rH4BQ
☁️ MISHUE :
https://chat.whatsapp.com/LJsK2qecGOeKCfc97giQFB
✧──────────···──────────✧`
m.reply(str)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler