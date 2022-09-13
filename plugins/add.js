let handler = async (m, { conn, text, participants }) => {
if(!text && !m.quoted) throw 'masukkan nomor yang ingin di tambahkan'

let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

await conn.groupParticipantsUpdate(m.chat, [users], 'add').catch(console.log)
}
handler.help = ['add','+'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(add|+)$/i

handler.owner = false
handler.group = true
handler.botAdmin = true


module.exports = handler



/*let handler = async (m, { conn, text, participants }) => {
    let _participants = participants.map(user => user.id)
    let users = (await Promise.all(
        text.split(',')
            .map(v => v.replace(/[^0-9]/g, ''))
            .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async v => [
                v,
                await conn.onWhatsApp(v + '@s.whatsapp.net')
            ])
    )).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
    const response = await conn.groupParticipantsUpdate(m.chat, users, 'add')
    m.reply(`Succes add person`, null, { mentions: response })
}
handler.help = ['add 628xx']
handler.tags = ['group']
handler.command = /^(add)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

module.exports = handler
*/
