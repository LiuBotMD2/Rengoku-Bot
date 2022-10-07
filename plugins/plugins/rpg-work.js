// creditos a https://github.com/FG98F
let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 90000)
let time = global.db.data.users[m.sender].lastwork + 600000
if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `*🥱𝙴𝚜𝚝𝚊𝚜 𝚌𝚊𝚗𝚜𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚜 𝚍𝚎𝚜𝚌𝚊𝚗𝚜𝚊𝚛 𝚌𝚘𝚖𝚘 𝚖𝚒𝚗𝚒𝚖𝚘 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 𝚝𝚛𝚊𝚋𝚊𝚓𝚊𝚛!🥱*`

m.reply(`${pickRandom(global.work)} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['work']
handler.tags = ['xp']
handler.command = ['work', 'trabajar']
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 10000) / 1000),
seconds = Math.floor((duration / 10000) % 600),
minutes = Math.floor((duration / (10000 * 600)) % 60),
hours = Math.floor((duration / (10000 * 600 * 600)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

global.work = ["Le diste una buen mamada al admin, el admin agradece la mamada, Toma", "Ayudas a animar el grupo, por tu cooperacion el admin te da", "Diseñas un buen hentai para la comunidad, por tu aporte los papus te damos", "Tratas de enamorar a la admin, pero te manda a frienzone, por tu esfuerzo te damos😂👉", "Llevas lolis al hotel por", 
"¿Por qué este comando se llama trabajo? Ni siquiera estás haciendo nada relacionado con el trabajo. Sin embargo, ganas", "Trabajaste en la oficina horas extras por", 
"Trabajas como vendedor de donas🍩 y te encuentras con rengoku, por tu aporte ganas", "Ayudas a exterminar a los furros, por tu esfuerzo ganas", "Creas un logo para el bot por", "Diseñas un yaoi por", "La demanda de juegos para dispositivos mÃ³viles ha aumentado, por lo que creas un nuevo juego lleno de micro-transacciones. Con tu nuevo juego ganas un total de", 
"Trabajas como actor de voz para Bob Esponja y te las arreglaste para ganar", 
"Estabas cultivando y Ganaste", "Trabajas como constructor de castillos de arena y ganas", "Trabajaste y Ganaste", 
"Trabajas como artista callejera y ganas","Â¡Hiciste trabajo social por una buena causa! por tu buena causa Recibiste"
]
