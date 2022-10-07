
let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 90000)
let time = global.db.data.users[m.sender].lastwork + 600000
if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `*𝙴𝚜𝚝𝚊𝚜 𝚌𝚊𝚗𝚜𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚜 𝚍𝚎𝚜𝚌𝚊𝚗𝚜𝚊𝚛 𝚌𝚘𝚖𝚘 𝚖𝚒𝚗𝚒𝚖𝚘 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 hacer un crimen!*`

m.reply(`${pickRandom(global.crimen)} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['robar']
handler.tags = ['xp']
handler.command = ['crimen', 'rob', "asaltar"]
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

global.crimen = ["Robaste a un politico y ganas", "Robaste al Gobierno, ganando", "Robaste una persona y ganas",
 "Robaste un Búnker y ganaste", "Robaste una Mansión y te pagaron", 
"Robaste un Avión y ganaste", 
"trabajaste para la mafia y te pagaron", "Robaste dos obra de arte del museo de España y ganaste", 
"Asaltaste dos bancos de tu ciudad y ganas", 
"Robaste a McDonald's y ganaste", "robaste a roblox y ganaste", "robaste a Regoku su dona y ganaste", 
"Robaste a discord y ganaste", 
"Robaste una tienda de ropa y ganaste", "Robaste el petróleo de Siria y recibes", "Robaste un Tesla y ganas", "Robaste al gobierno de los EE.UU y ganas", "Robaste el amor de ella y ganas", "Robaste una bomba nuclear de Irak y ganas", "Robaste mi corazón🥰 y ganas"
]

/*****************************************
*CREADO POR https://github.com/DIEGO-OFC*
*****************************************/