let handler = async (m, { conn, command } => {
conn.reply(m.chat, `Berikut Github ${command}\n\n• https://github.com/ZansLord`, fkon)
}
handler.command =  /^(zanslord)$/i
export default handler