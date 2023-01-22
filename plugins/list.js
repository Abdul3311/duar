let handler = async (m, { conn, text, usedPrefix, command }) => {
	const sections = [
		{
			title: `━ ━ ━ ━ 『 Tes List 』 ━ ━ ━ ━`,
			rows: [{title: 'tes'}]
		}
	]
	const listMessage = {
		text: `tes list`,
		mentions: [m.sender],
		footer: 'Bot',
		title: `Tes List`,
		buttonText: `Tes List`,
		sections
	}
	await conn.sendMessage(m.chat, listMessage, { quoted : m })
}

handler.help = ['teslist']
handler.tags = ['tools']
handler.command = /^(teslist)$/i

export default handler