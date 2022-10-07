const { levelling } = '../lib/levelling.js'

import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {

let pp = './Menu2.jpg'

try {

} catch (e) {

} finally {

//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''

let name = await conn.getName(m.sender)

let str = `

*🔥⛩️Menu de acciones⛩️🔥*

𓆩🍃𓆪 Abrazo
𓆩🍃𓆪 Besar
𓆩🍃𓆪 Coger
𓆩🍃𓆪 Golpear
𓆩🍃𓆪 Manosear
𓆩🍃𓆪 Matar
𓆩🍃𓆪 Agarron del nalgas
𓆩🍃𓆪 Nalgada
𓆩🍃𓆪 Mamada
𓆩🍃𓆪 Venirse
𓆩🍃𓆪 Patada en los webos
`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/I3l2EB31ULP04msvlY2fmf', "🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂_𝗕𝗼𝘁🔥", null, null, [

['🏮𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻🏮', '/menu']

], m)

}}

handler.help = ['menu3', 'help3', '?3', 'menuaudiosfuridamu']

handler.tags = ['main']

handler.command = /^(acciones)$/i

handler.fail = null

export default  handler