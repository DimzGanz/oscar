// Fitur By Zivsan And Haori Kasih Credits Dong Stah
const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Penggunaan .menfess nomor|pesan untuknya\nContoh : .menfess 628xxxxxxxxxx|hai owner', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/4189454f16526ee66e68d.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6289696764138?text=.chat 6289696764138|Hi Dimas Hehehe 🌹', body: 'DimzBot', thumbnail: await (await fetch('https://telegra.ph/file/4189454f16526ee66e68d.jpg')).buffer(),}}})
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/4189454f16526ee66e68d.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6289696764138?text=.chat 6289696764138|Hi Dimas Hehehe 🌹', body: 'DimzBot', thumbnail: await (await fetch('https://telegra.ph/file/4189454f16526ee66e68d.jpg')).buffer(),}}})
    if (text > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/4189454f16526ee66e68d.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6289696764138?text=.chat 6289696764138|Hi Dimas Hehehe 🌹', body: 'DimzBot', thumbnail: await (await fetch('https://telegra.ph/file/4189454f16526ee66e68d.jpg')).buffer(),}}})

    let chat = `${number}`
    var nomor = m.sender
    let chat1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)

⬡──⬡─────────⬡──⬡

💌 Pesan : ${pesan}

⬡──⬡─────────⬡──⬡

Maaf Anda Belum Bisa Membalas ke Pengirim`

let jarot = `▮PENGIRIM RAHASIA 」 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .menfess nomor|pesan untuknya

Contoh: #menfess 628xxxxxxxxxx|hai owner`

    conn.send2ButtonImg(chat + '@s.whatsapp.net', await(await fetch('https://telegra.ph/file/4189454f16526ee66e68d.jpg')).buffer(), chat1, jarot, 'Menu', '.menu', 'Donasi', '.donasi', m)
    
    let logs = `NOTE: DILARANG SPAM, CHAT ANEH ANEH, BERANTEM. JIKA ITU TERJADI MAKA BOT AKAN MEMBLOKIR KONTAKMU!!`

 let haori1 = `Sukses Mengirim Pesan
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

⬡──⬡─────────⬡──⬡

Isi Pesan : ${pesan}

⬡──⬡─────────⬡──⬡`
    conn.send2ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/4189454f16526ee66e68d.jpg')).buffer(), logs, haori1, 'Owner', '.owner', 'Donasi', '.donasi', m)
}
handler.help = ['menfess <nomor|pesan>']
handler.tags = ['main']
handler.command = /^(menfess)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
