let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Creator'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `*––––––『 INFO CREATOR 』––––––*
`
  conn.send2ButtonImg(m.chat, fla + teks, anu,wm, 'Nomor creator', '.owner', 'SosialMedia Creator', '.sosialmedia', m) 
}
handler.help = ['owner2']
handler.tags = ['info']
handler.command = /^(owner2|creator2)$/i

module.exports = handler
