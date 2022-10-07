import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*ミ🔥𝙷𝙾𝙻𝙰 ${name}, 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 🏮𝗥𝗲𝗻𝗴𝗼𝗸𝘂_𝗕𝗼𝘁🏮 🔥彡*

*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
*📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
*📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*

*🚩𝕀ℕ𝔽𝕆ℝ𝕄𝔸ℂ𝕀𝕆ℕ 𝔻𝔼𝕃 𝔹𝕆𝕋🚩*

° 🍃⛩️ _${usedPrefix}estado_
° 🍃⛩️ _${usedPrefix}infobot_
° 🍃⛩️ _${usedPrefix}donar_
° 🍃⛩️ _${usedPrefix}owner_
° 🍃⛩️ _${usedPrefix}boost_
° 🍃⛩️ _${usedPrefix}terminos_
° 🍃⛩️ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

*🎮𝕁𝕌𝔼𝔾𝕆𝕊🎮*

°🍃⛩️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
°🍃⛩️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
°🍃⛩️ _${usedPrefix}prostituto *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}prostituta *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}gay2 *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}lesbiana *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}pajero *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}pajera *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}zorra *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}puto *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}puta *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}manco *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}manca *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}rata *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}love *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}ganas *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}pervertid@ *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}chichis *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}doxear *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}pregunta *<texto>*_
°🍃⛩️ _${usedPrefix}slot *<apuesta>*_
°🍃⛩️ _${usedPrefix}ttt *<nombre sala>*_
°🍃⛩️ _${usedPrefix}delttt_
°🍃⛩️ _${usedPrefix}simi *<texto>*_
°🍃⛩️ _${usedPrefix}top *<texto>*_
°🍃⛩️ _${usedPrefix}topgays_
°🍃⛩️ _${usedPrefix}topotakus_
°🍃⛩️ _${usedPrefix}formarpareja_
°🍃⛩️ _${usedPrefix}verdad_
°🍃⛩️ _${usedPrefix}reto_
°🍃⛩️ _${usedPrefix}cancion_
°🍃⛩️ _${usedPrefix}pista_
°🍃⛩️ _${usedPrefix}ganas *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}hombria *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}poto|culo *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}altura *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}iss *<nombre / @tag>*_
°🍃⛩️ _${usedPrefix}formartrio_
°🍃⛩️ _${usedPrefix}formarpareja5_
°🍃⛩️ _${usedPrefix}amistad_
°🍃⛩️ _${usedPrefix}say_

*🔓𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ🔐*

°🍃⛩️ _${usedPrefix}enable *welcome*_
°🍃⛩️ _${usedPrefix}disable *welcome*_
°🍃⛩️ _${usedPrefix}enable *modohorny*_
°🍃⛩️ _${usedPrefix}disable *modohorny*_
°🍃⛩️ _${usedPrefix}enable *antilink*_
°🍃⛩️ _${usedPrefix}disable *antilink*_
°🍃⛩️ _${usedPrefix}enable *antilink2*_
°🍃⛩️ _${usedPrefix}disable *antilink2*_
°🍃⛩️ _${usedPrefix}enable *detect*_
°🍃⛩️ _${usedPrefix}disable *detect*_
°🍃⛩️ _${usedPrefix}enable *audios*_
°🍃⛩️ _${usedPrefix}disable *audios*_
°🍃⛩️ _${usedPrefix}enable *autosticker*_
°🍃⛩️ _${usedPrefix}disable *autosticker*_
°🍃⛩️ _${usedPrefix}enable *antiviewonce*_
°🍃⛩️ _${usedPrefix}disable *antiviewonce*_

*⏬𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊⏬*

°🍃⛩️ _${usedPrefix}facebook *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}instagram *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}mediafire *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}instagram *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}gitclone *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}stickerpack *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}gdrive *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}tiktok *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}xnxxdl *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}xvideosdl *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}ytmp3 *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}ytmp4 *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
°🍃⛩️ _${usedPrefix}play.1 *<texto / enlace / link / url>*_
°🍃⛩️ _${usedPrefix}play.2 *<texto / enlace / link / url>*_
°🍃⛩️ _${usedPrefix}play *<texto>*_
°🍃⛩️ _${usedPrefix}playdoc *<texto>*_
°🍃⛩️ _${usedPrefix}playlist *<texto>*_
°🍃⛩️ _${usedPrefix}playlist2 *<texto>*_
°🍃⛩️ _${usedPrefix}ringtone *<texto>*_
°🍃⛩️ _${usedPrefix}soundcloud *<texto>*_
°🍃⛩️ _${usedPrefix}imagen *<texto>*_
°🍃⛩️ _${usedPrefix}pinteret *<texto>*_
°🍃⛩️ _${usedPrefix}wallpaper *<texto>*_
°🍃⛩️ _${usedPrefix}wallpaper2 *<texto>*_
°🍃⛩️ _${usedPrefix}pptiktok *<nombre de usuario>*_
°🍃⛩️ _${usedPrefix}igstalk *<nombre de usuario>*_
°🍃⛩️ _${usedPrefix}igstory *<nombre de usuario>*_
°🍃⛩️ _${usedPrefix}tiktokstalk *<nombre de usuario>*_

*🎎𝔾ℝ𝕌ℙ𝕆𝕊🎎* 

°🍃⛩️ _${usedPrefix}add *<numero>*_
°🍃⛩️ _${usedPrefix}kick *<@tag>*_
°🍃⛩️ _${usedPrefix}grupo *<abrir / cerrar>*_
°🍃⛩️ _${usedPrefix}promote *<@tag>*_
°🍃⛩️ _${usedPrefix}demote *<@tag>*_
°🍃⛩️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
°🍃⛩️ _${usedPrefix}demote *<@tag>*_
°🍃⛩️ _${usedPrefix}infogroup_
°🍃⛩️ _${usedPrefix}link_
°🍃⛩️ _${usedPrefix}setname *<texto>*_
°🍃⛩️ _${usedPrefix}setdesc *<texto>*_
°🍃⛩️ _${usedPrefix}invocar *<texto>*_
°🍃⛩️ _${usedPrefix}setwelcome *<texto>*_
°🍃⛩️ _${usedPrefix}setbye *<texto>*_
°🍃⛩️ _${usedPrefix}hidetag *<texto>*_
°🍃⛩️ _${usedPrefix}Fantasmas_

*🔁ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊🔁*

°🍃⛩️ _${usedPrefix}toimg *<responde a un sticker>*_
°🍃⛩️ _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
°🍃⛩️ _${usedPrefix}toptt *<responde a un video / audio>*_
°🍃⛩️ _${usedPrefix}tovideo *<responde a un sticker>*_
°🍃⛩️ _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
°🍃⛩️ _${usedPrefix}tts es *<texto>*_

*🎈𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊🎈*

°🍃⛩️️ _${usedPrefix}logos *<efecto> <texto>*_
°🍃⛩️️ _${usedPrefix}logocorazon *<texto>*_
°🍃⛩️️ _${usedPrefix}logochristmas *<texto>*_
°🍃⛩️️ _${usedPrefix}simpcard *<@tag>*_
°🍃⛩️️ _${usedPrefix}hornycard *<@tag>*_
°🍃⛩️️ _${usedPrefix}lolice *<@tag>*_
°🍃⛩️️ _${usedPrefix}ytcomment *<texto>*_
°🍃⛩️️ _${usedPrefix}phmaker *<opcion><responder a imagen>*_
°🍃⛩️️ _${usedPrefix}itssostupid_
°🍃⛩️️ _${usedPrefix}pixelar_
°🍃⛩️️ _${usedPrefix}blur_

*🧨ℝ𝔸ℕ𝔻𝕆𝕄🧨*

°🍃⛩️ _${usedPrefix}cristianoronaldo_
°🍃⛩️ _${usedPrefix}messi_
°🍃⛩️ _${usedPrefix}meme_
°🍃⛩️ _${usedPrefix}itzy_
°🍃⛩️ _${usedPrefix}blackpink_
°🍃⛩️ _${usedPrefix}kpop *<blackpink / exo / bts>*_
°🍃⛩️ _${usedPrefix}lolivid_
°🍃⛩️ _${usedPrefix}loli_
°🍃⛩️ _${usedPrefix}navidad_
°🍃⛩️ _${usedPrefix}ppcouple_
°🍃⛩️ _${usedPrefix}wpmontaña_
°🍃⛩️ _${usedPrefix}pubg_
°🍃⛩️ _${usedPrefix}wpgaming_
°🍃⛩️ _${usedPrefix}wpaesthetic_
°🍃⛩️ _${usedPrefix}wpaesthetic2_
°🍃⛩️ _${usedPrefix}wprandom_
°🍃⛩️ _${usedPrefix}wallhp_
°🍃⛩️ _${usedPrefix}wpvehiculo_
°🍃⛩️ _${usedPrefix}wpmoto_
°🍃⛩️ _${usedPrefix}coffee_
°🍃⛩️ _${usedPrefix}pentol_
°🍃⛩️ _${usedPrefix}caricatura_
°🍃⛩️ _${usedPrefix}ciberespacio_
°🍃⛩️ _${usedPrefix}technology_
°🍃⛩️ _${usedPrefix}doraemon_
°🍃⛩️ _${usedPrefix}hacker_
°🍃⛩️ _${usedPrefix}planeta_
°🍃⛩️ _${usedPrefix}randomprofile_
°🍃⛩️ _${usedPrefix}neko_
°🍃⛩️ _${usedPrefix}waifu_
°🍃⛩️ _${usedPrefix}akira_
°🍃⛩️ _${usedPrefix}akiyama_
°🍃⛩️ _${usedPrefix}anna_
°🍃⛩️ _${usedPrefix}asuna_
°🍃⛩️ _${usedPrefix}ayuzawa_
°🍃⛩️ _${usedPrefix}boruto_
°🍃⛩️ _${usedPrefix}chiho_
°🍃⛩️ _${usedPrefix}chitoge_
°🍃⛩️ _${usedPrefix}deidara_
°🍃⛩️ _${usedPrefix}erza_
°🍃⛩️ _${usedPrefix}elaina_
°🍃⛩️ _${usedPrefix}eba_
°🍃⛩️ _${usedPrefix}emilia_
°🍃⛩️ _${usedPrefix}hestia_
°🍃⛩️ _${usedPrefix}hinata_
°🍃⛩️ _${usedPrefix}inori_
°🍃⛩️ _${usedPrefix}isuzu_
°🍃⛩️ _${usedPrefix}itachi_
°🍃⛩️ _${usedPrefix}itori_
°🍃⛩️ _${usedPrefix}kaga_
°🍃⛩️ _${usedPrefix}kagura_
°🍃⛩️ _${usedPrefix}kaori_
°🍃⛩️ _${usedPrefix}keneki_
°🍃⛩️ _${usedPrefix}kotori_
°🍃⛩️ _${usedPrefix}kurumi_
°🍃⛩️ _${usedPrefix}madara_
°🍃⛩️ _${usedPrefix}mikasa_
°🍃⛩️ _${usedPrefix}miku_
°🍃⛩️ _${usedPrefix}minato_
°🍃⛩️ _${usedPrefix}naruto_
°🍃⛩️ _${usedPrefix}nezuko_
°🍃⛩️ _${usedPrefix}sagiri_
°🍃⛩️ _${usedPrefix}sasuke_
°🍃⛩️ _${usedPrefix}sakura_
°🍃⛩️ _${usedPrefix}cosplay_

*🎤𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊🎤*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*

°🍃⛩️ _${usedPrefix}bass_
°🍃⛩️ _${usedPrefix}blown_
°🍃⛩️ _${usedPrefix}deep_
°🍃⛩️ _${usedPrefix}earrape_
°🍃⛩️ _${usedPrefix}fast_
°🍃⛩️ _${usedPrefix}fat_
°🍃⛩️ _${usedPrefix}nightcore_
°🍃⛩️ _${usedPrefix}reverse_
°🍃⛩️ _${usedPrefix}robot_
°🍃⛩️ _${usedPrefix}slow_
°🍃⛩️ _${usedPrefix}smooth_
°🍃⛩️ _${usedPrefix}tupai_

*🌐𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊🌐*

°🍃⛩️ _${usedPrefix}stickersearch *<texto>*_
°🍃⛩️ _${usedPrefix}xnxxsearch *<texto>*_
°🍃⛩️ _${usedPrefix}animeinfo *<texto>*_
°🍃⛩️ _${usedPrefix}google *<texto>*_
°🍃⛩️ _${usedPrefix}letra *<texto>*_
°🍃⛩️ _${usedPrefix}wikipedia *<texto>*_
°🍃⛩️ _${usedPrefix}ytsearch *<texto>*_
°🍃⛩️ _${usedPrefix}apkdone *<texto>*_
°🍃⛩️ _${usedPrefix}apkgoogle *<texto>*_
°🍃⛩️ _${usedPrefix}apkmody *<texto>*_
°🍃⛩️ _${usedPrefix}apkshub *<texto>*_
°🍃⛩️ _${usedPrefix}happymod *<texto>*_
°🍃⛩️ _${usedPrefix}hostapk *<texto>*_
°🍃⛩️ _${usedPrefix}revdl *<texto>*_
°🍃⛩️ _${usedPrefix}toraccino *<texto>*_
°🍃⛩️ _${usedPrefix}uapkpro *<texto>*_

*❌ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠❌*

°卐🔞 _${usedPrefix}pack_
°卐🔞 _${usedPrefix}pack2_
°卐🔞 _${usedPrefix}pack3_
°卐🔞 _${usedPrefix}videoxxx_
°卐🔞 _${usedPrefix}tiktokxxx_
°卐🔞 _${usedPrefix}tetas_
°卐🔞 _${usedPrefix}booty_
°卐🔞 _${usedPrefix}ecchi_
°卐🔞 _${usedPrefix}furro_
°卐🔞 _${usedPrefix}imagenlesbians_
°卐🔞 _${usedPrefix}panties_
°卐🔞 _${usedPrefix}pene_
°卐🔞 _${usedPrefix}porno_
°卐🔞 _${usedPrefix}porno2_
°卐🔞 _${usedPrefix}randomxxx_
°卐🔞 _${usedPrefix}pechos_
°卐🔞 _${usedPrefix}yaoi_
°卐🔞 _${usedPrefix}yaoi2_
°卐🔞 _${usedPrefix}yuri_
°卐🔞 _${usedPrefix}yuri2_
°卐🔞 _${usedPrefix}trapito_
°卐🔞 _${usedPrefix}hentai_
°卐🔞 _${usedPrefix}nsfwloli_
°卐🔞 _${usedPrefix}nsfworgy_
°卐🔞 _${usedPrefix}nsfwfoot_
°卐🔞 _${usedPrefix}nsfwass_
°卐🔞 _${usedPrefix}nsfwbdsm_
°卐🔞 _${usedPrefix}nsfwcum_
°卐🔞 _${usedPrefix}nsfwero_
°卐🔞 _${usedPrefix}nsfwfemdom_
°卐🔞 _${usedPrefix}nsfwglass_

*🍁𝔸𝕌𝔻𝕀𝕆𝕊🍁* 
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_

°•卐🔊•° _Quien es tu sempai botsito 7w7_
°•卐🔊•° _Te diagnostico con gay_
°•卐🔊•° _A nadie le importa_
°•卐🔊•° _Fiesta del admin_
°•卐🔊•° _Fiesta del administrador_ 
°•卐🔊•° _Vivan los novios_
°•卐🔊•° _Feliz cumpleaños_
°•卐🔊•° _Noche de paz_
°•卐🔊•° _Buenos dias_
°•卐🔊•° _Buenos tardes_
°•卐🔊•° _Buenos noches_
°•卐🔊•° _Audio hentai_
°•卐🔊•° _Chica lgante_
°•卐🔊•° _Feliz navidad_
°•卐🔊•° _Vete a la vrg_
°•卐🔊•° _Pasa pack Bot_
°•卐🔊•° _Atencion grupo_
°•卐🔊•° _Marica quien_
°•卐🔊•° _Murio el grupo_
°•卐🔊•° _Oh me vengo_
°•卐🔊•° _tio que rico_
°•卐🔊•° _Viernes_
°•卐🔊•° _Baneado_
°•卐🔊•° _Sexo_
°•卐🔊•° _Hola_
°•卐🔊•° _Un pato_
°•卐🔊•° _Nyanpasu_
°•卐🔊•° _Te amo_
°•卐🔊•° _Yamete_
°•卐🔊•° _Bañate_
°•卐🔊•° _Es puto_
°•卐🔊•° _La biblia_
°•卐🔊•° _Onichan_
°•卐🔊•° _Mierda de Bot_
°•卐🔊•° _Siuuu_
°•卐🔊•° _Rawr_
°•卐🔊•° _UwU_
°•卐🔊•° _:c_
°•卐🔊•° _a_
•卐🔊•° _Mamar|Amanecimos con ganas de?_
°•卐🔊•° _Timmy_
°•卐🔊•° _Recuerden amigos_
°•卐🔊•° _Cuca y rial_
°•卐🔊•° _Deja de llorar_
°•卐🔊•° _El diablo_
°•卐🔊•° _Ese webo es mio_
°•卐🔊•° _No digas mamadas_
°•卐🔊•° _Me difaman_
°•卐🔊•° _Por la costilla_
°•卐🔊•° _Si caben|Morras_
°•卐🔊•° _Llanero_
°•卐🔊•° _Pou|ño_
°•卐🔊•° _Lucy1_
°•卐🔊•° _Lucy2_
•卐🔊•° _Lucy3_
•卐🔊•° _Lucy4_
•卐🔊•° _lucy5_
•卐🔊•° _Lucy6_
•卐🔊•° _Lucy7_
•卐🔊•° _Lucy8_
•卐🔊•° _Lucy9_
•卐🔊•° _Mika1_
•卐🔊•° _Kya1_
•卐🔊•° _Kya2_
•卐🔊•° _Vas a llorar?_
•卐🔊•° _Patria_
•卐🔊•° _Mamawebazo|Mamawebaso_

*🎌ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊🎌*

°卐⛩️️ _${usedPrefix}afk *<motivo>*_
°卐⛩️️ _${usedPrefix}ocr *<responde a imagen>*_
°卐⛩️️ _${usedPrefix}acortar *<enlace / link / url>*_
°卐⛩️️ _${usedPrefix}calc *<operacion math>*_
°卐⛩️️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
°卐⛩️️ _${usedPrefix}whatmusic *<responde a un audio>*_
°卐⛩️️ _${usedPrefix}qrcode *<texto>*_
°卐⛩️️ _${usedPrefix}readmore *<texto1| texto2>*_
°卐⛩️️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
°卐⛩️️ _${usedPrefix}styletext *<texto>*_
°卐⛩️️ _${usedPrefix}traducir *<texto>*_

*🧿𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊🧿*

°卐⛩️ _${usedPrefix}sticker *<responder a imagen o video>*_
°卐⛩️ _${usedPrefix}sticker *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}s *<responder a imagen o video>*_
°卐⛩️ _${usedPrefix}s *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
°卐⛩️ _${usedPrefix}scircle *<responder a imagen>*_
°卐⛩️ _${usedPrefix}sremovebg *<responder a imagen>*_
°卐⛩️ _${usedPrefix}semoji *<tipo> <emoji>*_
°卐⛩️ _${usedPrefix}attp *<texto>*_
°卐⛩️ _${usedPrefix}attp2 *<texto>*_
°卐⛩️ _${usedPrefix}attp3 *<texto>*_
°卐⛩️ _${usedPrefix}ttp *<texto>*_
°卐⛩️ _${usedPrefix}ttp2 *<texto>*_
°卐⛩️ _${usedPrefix}ttp3 *<texto>*_
°卐⛩️ _${usedPrefix}ttp4 *<texto>*_
°卐⛩️ _${usedPrefix}ttp5 *<texto>*_
°卐⛩️ _${usedPrefix}pat *<@tag>*_
°卐⛩️ _${usedPrefix}slap *<@tag>*_
°卐⛩️ _${usedPrefix}kiss *<@tag>*_
°卐⛩️ _${usedPrefix}dado_
°卐⛩️ _${usedPrefix}wm *<packname> <author>*_
°卐⛩️ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
°卐⛩️ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_

*🤴🏻𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊🤴🏻*

°卐👑 _${usedPrefix}cajafuerte_
°卐👑 _${usedPrefix}enable *restrict*_
°卐👑 _${usedPrefix}disable *restrict*_
°卐👑 _${usedPrefix}enable *autoread*_
°卐👑 _${usedPrefix}disable *autoread*_
°卐👑 _${usedPrefix}enable *public*_
°卐👑 _${usedPrefix}disable *public*_
°卐👑 _${usedPrefix}enable *pconly*_
°卐👑 _${usedPrefix}disable *pconly*_
°卐👑 _${usedPrefix}enable *gconly*_
°卐👑 _${usedPrefix}disable *gconly*_
°卐👑 _${usedPrefix}msg *<texto>*_
°卐👑 _${usedPrefix}banchat_
°卐👑 _${usedPrefix}unbanchat_
°卐👑 _${usedPrefix}banuser *<@tag>*_
°卐👑 _${usedPrefix}unbanuser *<@tag>*_
°卐👑 _${usedPrefix}banuser *<@tag>*_
°卐👑 _${usedPrefix}bc *<texto>*_
°卐👑 _${usedPrefix}bcchats *<texto>*_
°卐👑 _${usedPrefix}bcgc *<texto>*_
°卐👑 _${usedPrefix}cleartpm_
°卐👑 _${usedPrefix}restart_
°卐👑 _${usedPrefix}update_
°卐👑 _${usedPrefix}addprem *<@tag>*_
°卐👑 _${usedPrefix}delprem *<@tag>*_
°卐👑 _${usedPrefix}listprem_
°卐👑 _${usedPrefix}añadirdiamantes_
°卐👑 _${usedPrefix}añadirxp_
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'wa.me/51927055863', '꧁🔥𝕷𝖎𝖚 𝕯𝖔𝖓𝖎⁵⁰⁹🔥꧂', 'https://chat.whatsapp.com/KN9i1Xyi68A7Z8DMLSsLFh', '𝙂𝙧𝙪𝙥𝙤-𝙊𝙛𝙘', [
['💰 𝚆𝙾𝚁𝙺 💰', '/work'],
['⛩️ 𝙾𝚆𝙽𝙴𝚁 ⛩️', '/owner'],
['୧ *🏮·˚☯︎﹏ 𝗜𝗡𝗙𝗢𝗕𝗢𝗧﹏☯︎•🏮 ｡ﾟﾟ', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
