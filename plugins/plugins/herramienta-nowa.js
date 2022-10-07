let handler = async (m, { conn, text, usedPrefix, command }) => {
let regex = /x/g
if (!text) throw '⚠️ Falto el número.'
if (!text.match(regex)) throw `*Ejemplo de uso: ${usedPrefix + command} 521999340434x*`
let random = text.match(regex).length, total = Math.pow(10, random), array = []
for (let i = 0; i < total; i++) {
let list = [...i.toString().padStart(random, '0')]
let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
let info = await conn.fetchStatus(result).catch(_ => {})
array.push({ exists: true, jid: result, ...info })
} else {
array.push({ exists: false, jid: result })
}}
let txt = '*╭═🏮══•🪀𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢𝗦🪀•══🏮═╮*\n\n' + array.filter(v => v.exists).map(v => `𓆩🍃𓆪Nro: wa.me/${v.jid.split('@')[0]}\n*𓆩🍃𓆪Bio:* ${v.status || 'Sin descripcion'}\n*𓆩🍃𓆪Fecha:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*╭═🏮══🪀𝗡𝗢 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢𝗦🪀•══🏮═╮*\n\n' + array.filter(v => !v.exists).map(v =>  v.jid.split('@')[0]).join('\n')
m.reply(txt)
}
handler.command = /^nowa$/i
export default handler
function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, { timeZone: 'Asia/Jakarta' })}