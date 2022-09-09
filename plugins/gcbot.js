let fetch = require('node-fetch')
let teks = 'gcbot'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/c6d47e0aa9dca2263bee9.png'+ teks)).buffer(), `

*𝐇𝐚𝐥𝐨 𝐁𝐚𝐧𝐡 𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐉𝐨𝐢𝐧 && 𝐁𝐚𝐜𝐚 𝐑𝐮𝐥𝐞𝐬❗*
╔════════════════════
║ *Group Random*
╠════════════════════
║https://tinyurl.com/2h6gch82
╚════════════════════

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gc(bot|groupbot)$/i

module.exports = handler
