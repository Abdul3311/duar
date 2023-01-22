let handler = async (m, { conn }) => {
let grup = Object.keys(await conn.groupFetchAllParticipating())
let chat = global.db.data.chats
for (let x of grup) {
chat[x].isBanned = true 
}
conn.reply(m.chat, 'Sukses', m)
}
handler.command = ['bncall']

export default handler