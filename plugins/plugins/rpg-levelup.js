import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
╭═🔥═• 🏮•𝐍𝐈𝐕𝐄𝐋 𝐃𝐄 𝐄𝐗𝐏•🏮 •═🔥═╮
𓆩🍃𓆪 Nombre : *${name}*
𓆩🍃𓆪 Nivel : *${user.level}*
𓆩🍃𓆪 XP : *${user.exp - min}/${xp}*
╰═🔥═• 🏮•𝐍𝐈𝐕𝐄𝐋 𝐃𝐄 𝐄𝐗𝐏•🏮 •═🔥═╯
Te falta *${max - user.exp}* de *XP* para subir de nivel
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `🔥🎊 Bien hecho ${conn.getName(m.sender)}    Nivel:`
        let str = 卐`
╭═🔥═• 🏮•𝐅𝐄𝐋𝐈𝐂𝐈𝐃𝐀𝐃𝐄𝐒•🏮 •═🔥═╮
𓆩🍃𓆪 Nivel anterior : *${before}*
𓆩🍃𓆪 Nivel actual : *${user.level}*
╰═🔥═• 🏮•𝐅𝐄𝐋𝐈𝐂𝐈𝐃𝐀𝐃𝐄𝐒•🏮 •═🔥═╯
*_Cuanto más interactúes con los bots, mayor será tu nivel_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler