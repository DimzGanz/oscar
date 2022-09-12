let fetch = require('node-fetch')
let teks = 'gcbot'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/c6d47e0aa9dca2263bee9.png'+ teks)).buffer(), `

*Gwehj Gapunya Group* 

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gc(bot|groupbot)$/i

module.exports = handler
