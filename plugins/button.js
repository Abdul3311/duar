const {
    default: _makeWaSocket,
    makeWALegacySocket,
    proto,
    downloadContentFromMessage,
    jidDecode,
    areJidsSameUser,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    WAMessageStubType,
    extractMessageContent
} = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, usedPrefix, command, text }) => {
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
        hydratedTemplate: {
          locationMessage: { jpegThumbnail: 'https://telegra.ph/file/06c4e93a3d3f388b2642d.jpg' },
          hydratedContentText: text,
          hydratedFooterText: 'wm',
          hydratedButtons: [{
            urlButton: {
              displayText: 'My Website',
              url: 'https://lynk.id/ZansLord'
            }
          },
          {
            quickReplyButton: {
              displayText: 'Owner',
              id: '.owmer'
            }
          }]
        }
      }
    }), { userJid: conn.user.jid, quoted: m })
    return await conn.relayMessage(
      jid,
      template.message,
      { messageId: template.key.id }
    )
}
handler.command = ['buttonloc']


export default handler