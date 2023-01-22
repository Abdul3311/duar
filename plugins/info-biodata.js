let handler = async (m, { conn }) => {
let caption = `––––––『 *BIODATA* 』––––––
⫹⫺ *💌 Nama* : 𝒁𝒂𝒏𝒔𝑳𝒐𝒓𝒅
⫹⫺ *✉️ Nama RL* : 𝑨𝒃𝒅𝒖𝒍 𝑴𝒂𝒍𝒊𝒌
⫹⫺ *♂️ Gender* : 𝑩𝒐𝒚𝒔
⫹⫺ *🕉 Agama* : 𝑰𝒔𝒍𝒂𝒎
⫹⫺ *⏰ Tanggal lahir* : 04 07 2008 
⫹⫺ *🎨 Umur* : 14
⫹⫺ *🧮 Kelas* : 8
⫹⫺ *🧩 Hobby* : 𝑵𝒈𝒐𝒎𝒊𝒌, 𝑨𝒏𝒅 𝑹𝒆𝒄𝒐𝒅𝒆
⫹⫺ *💬 Sifat* : 𝐒𝗼 𝑨𝒔𝒊𝒌
⫹⫺ *🗺️ Tinggal* : 𝑰𝒏𝒅𝒐, 𝑱𝒂𝒘𝒂 𝑩𝒂𝒓𝒂𝒕, 𝑩𝒂𝒏𝒅𝒖𝒏𝒈

⫹⫺ *📷 ɪɴsᴛᴀɢʀᴀᴍ* : https://instagram.com/abdulmalik_4342
⫹⫺ *🐈 ɢɪᴛʜᴜʙ:* https://github.com/ZansLord
•·––––––––––––––––––––––––––·•
`
conn.sendButtonDoc(m.chat, caption, author, 'Menu', `#menu`, fgif, adReply)
}
handler.help = ['biodata']
handler.tags = ['info']
handler.command = /^(biodata|arif|bioowner)$/i

export default handler