let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/a.mp3'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /ª|a|A/
handler.command = /^(a|ª|A?$)/
export default handler
