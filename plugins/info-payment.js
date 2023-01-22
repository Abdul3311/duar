let handler = async (m, { conn }) => {
let pay = 'https://telegra.ph/file/06c4e93a3d3f388b2642d.jpg'
let payy = `Payment/Pembayaran 

[-] Gopay : 085869074622
[-] Dana : 085869074622
[-] ShopeePay : 085869074622
[-] Saweria : -
[-] Website : https://lynk.id/ZansLord

Akun Belum Premium ? 
Bisa Scan Qris Di Atas 

Note : Jika Sudah Bayar Silahkan kirim Bukti Ke Owner !!`
conn.sendButtonImg(m.chat, pay, payy, author, 'Owner', '.owner', m)
}
handler.help = ['payment', 'pay']
handler.tags = ['info', 'store']
handler.command = /^(pay|payment)$/i

export default handler