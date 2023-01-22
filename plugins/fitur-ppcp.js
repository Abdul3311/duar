import fs from 'fs'

let handler = async (m, { conn }) => {
let couple = JSON.parse(fs.readFileSync('./json/ppcouple.json'))
let res = couple.getRandom()
await conn.sendFile(m.chat, res.cowo, 'couple.jpg', 'Boys', m)
await conn.sendFile(m.chat, res.cewe, 'couple.jpg', 'Girls', m)
}
handler.help = ['ppcp', 'ppcouple', 'profilecouple']
handler.tags = ['fun', 'image']
handler.command = /^(ppcp|ppcouple|profilecouple)$/i

handler.limit = 2 

export default handler