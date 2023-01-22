import baileys from '@adiwajshing/baileys'
const { WAConnection, MessageType, Mimetype} = baileys 
import qrcode from 'qrcode'
import fs from 'fs'

listjadibot = [];

async function jadibot dari(m,conn,id) {
	conn = new WAConnection()
    conn.logger.level = 'warn'
    conn.version = [2, 2143, 3]
    conn.browserDescription = [ 'Numpang', '', '3.5' ]
    conn.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await conn.sendMessage(id,buffer,MessageType.image,{caption:'Scan QR Untuk menjadi bot\n*Rules:*\nQR akan diganti setiap 30 detik'})
    	setTimeout(() => {
       	conn.deleteMessage(id, bot.key)
       },30000)
    })
    conn.on('connecting', () => {
    })
    conn.on('open', () => {
    	m.reply(`Sukses Jadi BOT\n\n*Device*:\n\n ${JSON.stringify(conn.user,null,2)}`)
    })
    await conn.connect({timeoutMs: 30 * 1000})
    listjadibot.push(conn.user)
    conn.on('chat-update', async (message) => {
        import('../main.js')(conn, message)
    })
}

async function stopjadibot(m) {
	conn = new WAConnection();
	conn.close()
	m.reply('Sukses stop jadibot')
}

export {
	jadibot,
	stopjadibot,
	listjadibot
}