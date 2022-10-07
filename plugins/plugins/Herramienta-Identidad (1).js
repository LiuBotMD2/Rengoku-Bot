import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

let res = await fetch(`https://docs-jojo.herokuapp.com/api/fake_identity?lang=en&type=json`) 

let json = await res.json() 

m.reply(`╭═🏮═•🔥•𝐈𝐃𝐄𝐍𝐓𝐈𝐃𝐀𝐃•🔥•═🏮═╮
*𓆩卐𓆪* Nombre: ${json.name}
*𓆩卐𓆪* Edad: ${json.age}
*𓆩卐𓆪* Género: ${json.gender}
*𓆩卐𓆪* ocupacion: ${json.occupation}
*𓆩卐𓆪* Codigo postal: ${json.zip_code}
*𓆩卐𓆪* Estado: ${json.state}
*𓆩卐𓆪* Pais: ${json.country}
*𓆩卐𓆪* Email: ${json.email}
*𓆩卐𓆪* Contraseña: ${json.password}
*𓆩卐𓆪* Telefono: ${json.phone}
*𓆩卐𓆪* Tarjeta: ${json.card}
*𓆩卐𓆪* CCV: ${json.code}
*𓆩卐𓆪* Fecha: ${json.date}
*𓆩卐𓆪* Codigo pin: ${json.pin_code}
*𓆩卐𓆪* Tipo de sangre: ${json.blood_type}
*𓆩卐𓆪* Estado fiscal: ${json.status}
╰═🏮═•🏮•𝐈𝐃𝐄𝐍𝐓𝐈𝐃𝐀𝐃•🏮•═🏮═╯
𝚩𝐘:🔥𝗥𝗲𝗻𝗴𝗼𝗸𝘂_𝗕𝗼𝘁🔥`)

}

handler.command = /^(identidad)$/i
export default handler