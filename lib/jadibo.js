// Created By Lexxy Official
// Jangan Lu Jual Ya Tod

import baileys from '@adiwajshing/baileys'
import boom from '@hapi/boom'
import chalk from 'chalk'
import fs from 'fs' 
import path from 'path'
import process from 'process'
const { Boom } = boom
const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = baileys
import { color, bgcolor } = import './console'
const logg = (pino = await import("pino"));
import qrcode from 'qrcode'
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.listJadibot instanceof Array) console.log()
else global.listJadibot = []

async function jadibot(conn, m) {
const { sendMessage } = conn;
const { reply, sender } = m;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./database/jadibot/${sender.split("@")[0]}`), logg({ level: "silent" }));
try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const conn = await makeWaSocket({
auth: state,
printQRInTerminal: true,
browser: ['Bot Numpang', "Chrome", "1.0.0"],
logger: logg({ level: "silent" }),
version,
})

conn.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!conn.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
} catch (err) {
console.log(err)}
})

store.bind(conn.ev);
conn.ev.on("creds.update", saveCreds);
conn.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to jadibot..")
}
if (up.qr) await conn.sendFile(m.chat, await qrcode.toDataURL(up.qr,{scale : 8}), 'qr.jpg', 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik 3 di pojok kanan atas\n2. Klik Perangkat Tertaut\n3. Scan QR ini \nQR Expired dalam 30 detik', m)
console.log(connection)
if (connection == "open") {
conn.id = conn.decodeJid(conn.user.id)
conn.time = Date.now()
global.listJadibot.push(conn)
await reply(`*Connected to Whatsapp - Bot*\n\n*User :*\n _*× ID : ${conn.decodeJid(conn.user.id)}*_`)
let user = `${conn.decodeJid(conn.user.id)}`
let txt = `*Terdeteksi menumpang Jadibot*\n\n _× User : @${user.split("@")[0]}_`
conn.sendMessage('6282112309624@s.whatsapp.net', {text: txt, mentions : [user]})
}

if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Bad Session File, Please Delete Session and Scan Again`); conn.logout(); }
else if (reason === DisconnectReason.connectionClosed) { 
console.log("Connection closed, reconnecting...."); start(); }
else if (reason === DisconnectReason.connectionLost) { 
console.log("Connection Lost from Server, reconnecting..."); start(); }
else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); conn.logout(); }
else if (reason === DisconnectReason.loggedOut) { 
console.log(`Device Logged Out, Please Scan Again And Run.`); conn.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log("Restart Required, Restarting..."); start(); }
else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); start(); }
else conn.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})

conn.decodeJid = (jid) {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })

}
start()
} catch (e) {
console.log(e)
}
}

export { jadibot, listJadibot }