import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let datee = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let pp = hwaifu.getRandom()
    let thum = thumbnailUrl.getRandom()
    let name = await conn.getName(who)
    let pepe = await conn.resize(pp, 350, 400)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let sapa = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann'].getRandom()

    let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
  
  let anjay = await conn.profilePictureUrl(m.sender, 'image').catch(_=> readFileSync('./src/avatar_contact.png'))  // 'https://telegra.ph/file/e9f89098231bdf17dda53.jpg'
  let arif = await conn.resize(anjay, 300, 150)
  let cap = `${sapa} ${name}, ${ucapan} 
  
➥ *𝐈𝐍𝐅𝐎 USER*
  ◉ 𝐍𝐚𝗺𝐚 : ${name}
  ◉ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${who.premiumTime > 0 ? 'Premium' : 'Free'}
  ◉ L𝐢𝗺𝐢𝐭 : ${limit}
  ◉ S𝐚𝐥𝐝𝗼 : R𝐩 ${money}
  ◉ 𝐄𝐱𝐩 : ${exp}
  ◉ 𝐑𝗼𝐥𝐞 : ${role}
  ◉ 𝐀𝐠𝐞 : ${age}
${readMore}
➥ *𝐈𝐍𝐅𝐎 𝐁𝐎𝐓*
  ◉ R𝐮𝐧𝐧𝐢𝐧𝐠 O𝐧 : linuk
  ◉ M𝗼𝐝𝐞 : Public
  ◉ 𝐓𝐢𝗺𝐞 : ${time} ﹙ɢᴍᴛ +5:30﹚
  ◉ 𝐓𝗼𝐭𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 : ${totalf.length}
  ◉ 𝐔𝐬𝐞𝐫 𝐁𝐚𝐧𝐧𝐞𝐝 : ${users.length}
  ◉ 𝐉𝐚𝐦 : ${wktuwib}
  ◉ 𝐓𝐚𝐧𝐠𝐠𝐚𝐥 : ${week} ${datee}
  `
let tqto = `Thanks To :
Aldi 
Syahrul
Rizki
ZansLord
Arifzyn`

/* await conn.sendButton(m.chat, cap, '© 𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝘽𝙮 ' + wm, Buffer.alloc(0), [['List Menu', '.tesm'], ['All Menu', '/allmenu']], fakes, { mimetype: "text/rtf", fileName: '𝑺𝒊𝒎𝒑𝒍𝒆 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝑩𝒚 ' + nameown1, pageCount: 90000, fileLength: 90000, seconds: 90000, jpegThumbnail: pepe,
          contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© Miko𝐁𝗼𝐭',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© Miko𝐁𝗼𝐭',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'Hai, ' + name
				}
	  }
})*/

conn.sendHydrated2(m.chat, cap, author, arif, sgc, 'My Group', 'https://wa.me/6285869074622', 'My Creator', [
['List Menu', '.tesm'],
['All menu', '.allmenu'],
['Support Me', '.donasi']
], m, { mentions: await conn.parseMention(cap), asLocation: true })
}

handler.command = /^(menu|help)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
  
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)