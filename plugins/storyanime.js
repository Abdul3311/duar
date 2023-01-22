import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let res = await fetch('https://api.lolhuman.xyz/api/storynime?apikey=SGWN')
let res2 = await res.json()
conn.sendFile(m.chat, res2.result, 'story.mp4', 'Story Anime\n\nBy © ZansLord', m)
}
handler.help = ['storyanime']
handler.tags = ['fun']
handler.command = ['storyanime']

export default handler