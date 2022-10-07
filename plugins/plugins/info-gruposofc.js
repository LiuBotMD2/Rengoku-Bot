let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*𝗛𝗢𝗟𝗔 𝗔𝗠𝗜𝗚𝗢/𝗔 🙂, 𝗧𝗘 𝗜𝗡𝗩𝗜𝗧𝗢 𝗔 𝗨𝗡𝗜𝗥𝗧𝗘 𝗔 𝗟𝗢𝗦 𝗚𝗥𝗨𝗣𝗢𝗦 𝗢𝗙𝗜𝗖𝗜𝗔𝗟𝗘𝗦 𝗗𝗘 𝗟𝗜𝗨𝗕𝗢𝗧-𝗠𝗗 - 𝗟𝗨𝗚𝗔𝗥𝗘𝗦 𝗣𝗔𝗥𝗔 𝗣𝗔𝗦𝗔𝗥 𝗨𝗡 𝗥𝗔𝗧𝗢 𝗖𝗢𝗡 𝗟𝗔 𝗖𝗢𝗠𝗨𝗡𝗜𝗗𝗔𝗗 :𝗗*

*➤ 𝙂𝙧𝙪𝙥𝙤𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 𝙙𝙚𝙡 𝘽𝙤𝙩:*
*𒊹︎➳* https://chat.whatsapp.com/KN9i1Xyi68A7Z8DMLSsLFh

*𒊹︎➳* https://chat.whatsapp.com/I3l2EB31ULP04msvlY2fmf

*𒊹︎➳* https://chat.whatsapp.com/HsX1dx36YYNKf25CGq87Sx

*𒊹︎➳* https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8

*𒊹︎➳* https://chat.whatsapp.com/EF0r89iyTWyDgQr7rNwvjr
`.trim(), wm, media, [['🌱 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 🌱', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler