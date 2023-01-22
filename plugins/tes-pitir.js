import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
    let anu = await fetch(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=SGWN`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.send2ButtonLoc(m.chat, fimgb, 'random', author, 'next', '.meks' m)

}

handler.help = ['memeindo']
handler.tags = ['randompic']
handler.command = /^(memeindo)$/i

export default handler