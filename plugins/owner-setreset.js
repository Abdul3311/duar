let handler = async (m, { conn }) => {
	let bot = global.db.data.settings[conn.user.jid]
	bot.timer = +new Date()
	let date = new Date(bot.timer)
	m.reply(`Reset limit setiap pukul ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

handler.menuanime = ['setreset']
handler.tagsanime = ['search']
handler.command = /^(setreset)$/i

handler.owner = true

export default handler