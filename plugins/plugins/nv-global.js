let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^hola|wenas|holis|ola$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/KN9i1Xyi68A7Z8DMLSsLFh`, "showAdAttribution": true}}, seconds: '54321', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^xdd|momento$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Momento equisde.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4444', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^tumbar|mano$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/mano.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '3960', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^No digas eso papu|:'v$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/No digas eso papu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '3960', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^🥲|🫠|tesla$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/UnU.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '3960', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^arabe|arab$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Arabe.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4444', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^que paso|paso|sabes|que$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Que paso.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4444', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^Rusia|rus|🇷🇺|ruso$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Rusia.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4444', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^unu|😔|😭$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Nostalgia.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4444', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^temazo|temaso|quedate$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/temazo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4444', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })} 
    
 if (/^rengoku|rengoku bot|botsito$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Rengoku.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '65432', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
 if (/^bien|listo|god$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/bien-pensado-woody.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}   
    
 if (/^no se habla|no no no|bruno$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/bruno.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}    
    
 if (/^pajin|paja|😏|pajines$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Pajin.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
  if (/^siento|mía|mia$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/te siento mía.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^araara|ara ara$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Ara.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}

if (/^oni-chan|onichan|o-onichan$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Onichan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/HsX1dx36YYNKf25CGq87Sx`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^norteño|norteños|🤠|norteña$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/norteños.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/HsX1dx36YYNKf25CGq87Sx`, "showAdAttribution": true}}, seconds: '4140', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^bff|mi bb|bb|fiu|bebito|fiu fiu$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/bff.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/HsX1dx36YYNKf25CGq87Sx`, "showAdAttribution": true}}, seconds: '4140', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })} 
    
    if (/^insultar|callate|hdp|carajo$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/insulto.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/KN9i1Xyi68A7Z8DMLSsLFh`, "showAdAttribution": true}}, seconds: '9960', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^metete|😡|culo$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/metete.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4444', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^pendejo|pendeja|pndj$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/pendejo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '3960', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^vegeta|vegeta canta$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Vegeta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '4444', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (/^pan|🍞|🥪$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Pan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂-𝗕𝗼𝘁🔥`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://chat.whatsapp.com/EleG2rWWM8s5U5qqtqzrF8`, "showAdAttribution": true}}, seconds: '5000', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
    
if (chat.audios && m.text.match(/(anadieleimporta|a nadie le importa)/gi)) {
let vn = './media/dylan1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(miarda de bot|mierda de bot|mearda de bot|Miarda de Bot|Mierda de Bot|Mearda de Bot)/gi)) {    
let vn = './media/insultar.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (chat.audios && m.text.match(/(bañate|Bañate)/gi)) {    
let vn = './media/Banate.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (chat.audios && m.text.match(/(baneado|Baneado)/gi)) {    
let vn = './media/baneado.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   
    
if (chat.audios && m.text.match(/(buenas noches|Buenas noches|Boanoite|boanoite)/gi)) {    
let vn = './media/boanoite.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(buenas tardes|Buenas tardes|boatarde|Boatarde)/gi)) {    
let vn = './media/boatarde.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(buenos dias|Buenos dias|buenos días|Buenos días)/gi)) {    
let vn = './media/Buenos-dias-2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(chica lgante|Chica lgante|Chicalgante|chicalgante|chical gante|Chical gante)/gi)) {    
let vn = './media/chica lgante.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(giagnosticadocongay|diagnosticado con gay|diagnosticado gay|te diagnóstico con gay|diagnóstico gay|te diagnostico con gay|te diagnóstico con gay|te diagnosticó con gay|te diagnostico con gay)/gi)) {    
let vn = './media/DiagnosticadoConGay.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(es puto|eeesss putoo|es putoo|esputoo)/gi)) {    
let vn = './media/Es putoo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(feliz cumpleaños|felizcumpleaños|happy birthday)/gi)) {    
let vn = './media/Feliz cumple.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(movistar|cambiate|cambia)/gi)) {    
let vn = './media/Cambiate a Movistar.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Fiesta del admin|fiesta del admin)/gi)) {    
let vn = './media/admin.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(fiesta del administrador)/gi)) {    
let vn = './media/fiesta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(fiesta del admin 3|atención grupo|atencion grupo|aviso importante|fiestadeladmin3)/gi)) {    
let vn = './media/Fiesta1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(gemidos|gemime|gime|gemime|gemi2)/gi)) {    
let vn = './media/gemi2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(audio hentai|Audio hentai|audiohentai|Audiohentai)/gi)) {    
let vn = './media/hentai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(sexo|Sexo|Hora de sexo|hora de sexo)/gi)) {    
let vn = './media/maau1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(laoracion|La biblia|La oración|La biblia|La oración|la biblia|La Biblia)/gi)) {    
let vn = './media/ora.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Marica tu|cancion1|Marica quien)/gi)) {    
let vn = './media/cancion.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Murió el grupo|Murio el grupo|murio el grupo|murió el grupo|Grupo muerto|grupo muerto)/gi)) {    
let vn = './media/Murio.m4a'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Feliz navidad|feliz navidad|Merry Christmas|merry chritmas)/gi)) {    
let vn = './media/navidad.m4a'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(noche de paz|Noche de paz|Noche de amor|noche de amor|Noche de Paz)/gi)) {    
let vn = './media/Noche.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Nyapasu|Nyanpasu|nyapasu|Nyapasu|Gambure|Yabure)/gi)) {    
let vn = './media/otaku.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(ho me vengo|oh me vengo|o me vengo|Ho me vengo|Oh me vengo|O me vengo)/gi)) {    
let vn = './media/vengo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Pasa pack|vendes tu nudes|pasa video hot|pasa tu pack|pasa fotos hot|vendes tu pack|Vendes tu pack|Vendes tu pack?|vendes tu pack|Pasa Pack Bot|pasa pack Bot|pasa tu pack Bot|Pásame tus fotos desnudas|pásame tu pack|me pasas tu pak|me pasas tu pack|pasa pack)/gi)) {    
let vn = './media/Elmo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Quién es tu senpai botsito 7u7|Quien es tu senpai botsito 7u7|Quién es tu sempai botsito 7u7|Quien es tu sempai botsito 7u7|Quién es tu senpai botsito 7w7|Quien es tu senpai botsito 7w7|quién es tu senpai botsito 7u7|quien es tu senpai botsito 7u7|Quién es tu sempai botsito 7w7|Quien es tu sempai botsito 7w7|Quién es tu senpai botsito|Quien es tu senpai botsito|Quién es tu sempai botsito|Quien es tu sempai botsito|Quién es tu senpai botsito|Quien es tu senpai botsito|quién es tu senpai botsito|quien es tu senpai botsito|Quién es tu sempai botsito|Quien es tu sempai botsito)/gi)) {    
let vn = './media/Tu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(rawr|Rawr|RAWR|raawwr|rraawr|rawwr)/gi)) {    
let vn = './media/rawr.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(siu|siiuu|ssiiuu|siuuu|siiuuu|siiiuuuu|siuuuu|siiiiuuuuu|siu|SIIIIUUU)/gi)) {    
let vn = './media/siu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(te amo|teamo)/gi)) {    
let vn = './media/Te-amo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(ooo tio|tio que rico)/gi)) {    
let vn = './media/oh_tio.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(un Pato| un pato|un pato que va caminando alegremente|Un pato|Un Pato)/gi)) {    
let vn = './media/pato.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(UwU|uwu|Uwu|uwU|UWU)/gi)) {    
let vn = './media/UwU.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(vetealavrg|vete a la vrg|vete a la verga)/gi)) {    
let vn = './media/vete a la verga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(fiesta viernes|viernes|Viernes|viernes fiesta)/gi)) {    
let vn = './media/viernes.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(vivan!!|vivan los novios|vivanlosnovios)/gi)) {    
let vn = './media/vivan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Mamahuevo|mmgvo|mamahuevo)/gi)) {    
let vn = './media/mamahuevo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Timmy)/gi)) {    

let vn = './media/Timmy.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Mamar|amanecimos con ganas de?)/gi)) {    

let vn = './media/Mamar.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Recuerden amigos)/gi)) {    

let vn = './media/Recuerden.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Cuca y rial|cuca y rial)/gi)) {    

let vn = './media/cuca y rial.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Deja de llorar)/gi)) {    

let vn = './media/Deja de llorar.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(El diablo)/gi)) {    

let vn = './media/Eldiablo.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(No digas mamadas)/gi)) {    

let vn = './media/No digas.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Me difaman)/gi)) {    

let vn = './media/Por atras.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Por la costilla)/gi)) {    

let vn = './media/Por la costilla.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Si caben|morras)/gi)) {    

let vn = './media/Si caben.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Ese webo es mio)/gi)) {    

let vn = './media/Webo.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Llanero)/gi)) {    

let vn = './media/Llanero.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Pou|ño)/gi)) {    

let vn = './media/Pou.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Lucy1)/gi)) {    

let vn = './media/Lucy_que.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Lucy2)/gi)) {    

let vn = './media/Lucy_Ara.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Lucy3)/gi)) {    

let vn = './media/Lucy_calla.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Lucy4)/gi)) {    

let vn = './media/Lucy_mientes.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Lucy5)/gi)) {    

let vn = './media/Lucy5.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Lucy6)/gi)) {    

let vn = './media/Lucy6.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Lucy7)/gi)) {    

let vn = './media/Lucy7.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Lucy8)/gi)) {    

let vn = './media/Lucy8.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Lucy9)/gi)) {    

let vn = './media/Lucy9.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Mika1)/gi)) {    

let vn = './media/Mika1.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Kya1)/gi)) {    

let vn = './media/Kya1.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Kya2)/gi)) {    

let vn = './media/Kya2.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Vas a llorar?)/gi)) {    

let vn = './media/Llorar.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(patria|Patria)/gi)) {    

let vn = './media/patria.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Mamawebaso|Mamawebazo)/gi)) {    

let vn = './media/Mamawebaso.mp3'

this.sendPresenceUpdate('recording', m.chat)   

this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
return !0 }
export default handler

