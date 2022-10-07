const xpperlimit = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `
╭═🏮══•🔥•𝐍𝐎𝐓𝐀 𝐃𝐄 𝐏𝐀𝐆𝐎•🔥•══🏮═╮
             𓆩🌱𓆪 *Compra nominal* : + ${count}💎 
             𓆩🌱𓆪 *Gastado* : -${xpperlimit * count} XP
╰═🏮══•🔥•𝐍𝐎𝐓𝐀 𝐃𝐄 𝐏𝐀𝐆𝐎•🔥•══🏮═╯`, m)
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, m)
}
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.command = ['buy', 'buyall'] 

handler.disabled = false

export default handler
