const store = db.data.datas.store

let handler = async (m, { conn, text, usedPrefix, command }) => {
	text = text.split('||')
	if (store.length == 0) throw `[ ! ] Belum ada list di bot ini.`
	try {
		if (!text[1]) {
			let array = [], j = 0
			store.forEach(function(i) {
				array.push({
					title: i.title,
					rowId: usedPrefix + command + ` ||${j}`,
					description: `key_number : ${i.key}`
				});
				j++
			});
			const sections = [
				{
					title: `━ ━ ━ ━ 『 Store List 』 ━ ━ ━ ━`,
					rows: array
				}
			]
			const listMessage = {
				text: `*Request From :* @${m.sender.split`@`[0]}\n\n*Found :* ${store.length} List`,
				mentions: [m.sender],
				footer: packname + ' - ' + author,
				title: `━ ━ 『 *STORE LIST* 』 ━ ━`,
				buttonText: `List Store`,
				sections
			}
			await conn.sendMessage(m.chat, listMessage, { quoted : m })
		} else {
			await conn.sendMessage(m.chat, { text: `*${store[text[1]].title}*\n\n${store[text[1]].detail}` }, { quoted: m })
		}
	} catch (e) {
		console.log(e)
		m.reply(`[ ! ] key_number tidak valid.`)
	}
}

handler.menustore = ['list']
handler.tagsstore = ['customer']
handler.command = /^(list(store)?|(store)?list|store(list)?|(list)?store)$/i

export default handler