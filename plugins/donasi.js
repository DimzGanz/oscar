let fetch = require('node-fetch')
let teks = 'Donasi'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/c6d47e0aa9dca2263bee9.png'+ teks)).buffer(), `

*𝐇𝐚𝐥𝐨 𝐁𝐚𝐧𝐡 𝐃𝐨𝐧𝐚𝐬𝐢 𝐲𝐮𝐤 𝐁𝐢𝐚𝐫 𝐁𝐨𝐭 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐥𝐚𝐥𝐮👋*
╔═══════════════════
║ _*DONASI UNTUK*_  Owner ×͜×
╠═══════════════════
║          ❉ 〔 *DONASI* 〕 ❉
║➸ *DANA* : 
║➸ 089696764138
║➸ *PULSA
║➸ 089696764138
║➸ *Ovo*:
║➸ 089696764138
╰═══════════════════
╔════════════════════
║ *Donasi Via Ikuti Sosial media*
╠════════════════════
║     ❉ 〔 *Sosial Media Owner* 〕 ❉
║➸ *Instasgram*
║ http://www.instagram.com/dimzex
║➸ *Github*
║ https://github.com/DimzGanz
╚════════════════════

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
