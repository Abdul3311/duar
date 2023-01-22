let handler = async (m, { conn }) => {
let url = 'https://api-arifzyn-dev.up.railway.app/api/nsfw/hentai?apikey=elaina'
conn.sendFile(m.chat, url, '', 'Nih Hentai', m)
}
handler.command = /^(hemtai)$/i

export default handler