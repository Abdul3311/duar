let handler = async (m, { conn }) => {
if (global.db.data.chats[m.chat].virtex == false && m.isGroup) return conn.sendButtonDoc(m.chat, '❗ 𝐕𝐈𝐑𝐓𝐄𝐗 𝐆𝐀 𝐀𝐊𝐓𝐈𝐅!!', botdate, 'ᴇɴᴀʙʟᴇ', '.on virtex' null, adReply)



let info = `
*${htki} VIRUS ${htka}*
          
 🔥BY Elaina🔥
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "😈Virtex 1", rowId: '.virtex1', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	    {title: "😈Virtex 2", rowId: '.virtex2', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 3", rowId: '.virtex3', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 4", rowId: '.virtex4', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 5", rowId: '.virtex5', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 6", rowId: '.virtex6', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
    {title: "😈Virtex 7", rowId: '.virtex7', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 8", rowId: '.virtex8', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 9", rowId: '.virtex9', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 10", rowId: '.virtex10', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 11", rowId: '.virtex11', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 12", rowId: '.virtex12', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 13", rowId: '.virtex13', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 14", rowId: '.virtex14', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
    {title: "😈Virtex 15", rowId: '.virtex15', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 16", rowId: '.virtex16', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 17", rowId: '.virtex17', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 18", rowId: '.virtex18', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
	{title: "😈Virtex 19", rowId: '.virtex19', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },
    {title: "😈Virtex 20", rowId: '.virtex20', description: '𝐍𝐚𝐝𝐞𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭' },

	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🔥Download WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    {title: "🔥Virus Troli", rowId: '.virustroli', description: 'Subs Yt 𝐀𝐫𝐢𝐟𝐳𝐲𝐧' },
	    {title: "🔥Virus Power", rowId: '.powerlist', description: 'Subs Yt 𝐀𝐫𝐢𝐟𝐳𝐲𝐧' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "👺GASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = false

export default handler