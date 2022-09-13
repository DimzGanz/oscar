let handler = async (m, { conn }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.qouted ? m.quoted.sender : ''
await conn.groupRemove(m.chat, [who || m.quoted.sender])
}
handler.help = ['kick @tag atau reply chat']
handler.tags = ['admin']
handler.command = /^(kick|k|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler
