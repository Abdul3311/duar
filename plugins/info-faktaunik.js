import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
 
    let anu = await fetch('https://api.lolhuman.xyz/api/random/faktaunik?apikey=SGWN')
   let anu2 = await anu.json()
   let { result } = anu2
   let cap = `
◎ *Fakta unik:* 
      ➥ *${result}*
`
conn.sendButtonDoc(m.chat, cap, '𝐅𝐚𝐤𝐭𝐚 𝐔𝐧𝐢𝐤', '𝐍𝐄𝐗𝐓', `${usedPrefix + command}`, m, adReply)
}
handler.command = /^(faktaunik)$/i

export default handler