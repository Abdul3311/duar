import store from '../lib/store.js'

let handler = async (m, { conn, args }) => {
	let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), conn.user.jid]
                    conn.reply(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })

}
handler.help = ['here','listonline']
handler.tags = ['group']
handler.command = /^(here|(list)?online)$/i

handler.group = true

handler.fail = null

export default handler