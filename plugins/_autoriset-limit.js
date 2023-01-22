const cooldown = 86400000

export async function before(m) {
	let bot = global.db.data.settings[this.user.jid]
	if (new Date - bot.timer <= cooldown) return !1
	let user = global.db.data.users
	for (let x of Object.keys(user)) {
		user[x].limit = 200
	}
	bot.timer = +new Date()
	return !0
}