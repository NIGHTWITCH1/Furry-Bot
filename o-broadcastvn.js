const { toAudio, toPTT } = require('../lib/converter')
let fs = require('fs')
let fetch = require("node-fetch")
let handler = async (m, { conn, text }) => {
	let user = global.db.data.users[m.sender]
	let haori = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999999999,
    status: 404,
    surface : 404,
    message: `iRexus BROADCAST\nFrom ${conn.getName(m.sender)} 🌠`, 
    orderTitle: `iRexus`,
    thumbnail: await (await fetch('https://media.discordapp.net/attachments/849188337943969802/1018180867459391629/62_821-1366-5209_20220910_222701.jpg')).buffer(),
    }
    }
    }
      let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
 let media = await q.download()
    if (!media) throw 'Media tidak dapat diunduh'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw 'Gagal melakukan konversi.'
    let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
       await conn.delay(1500)
     await  await    await conn.sendFile(id, audio.data, 'error.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true, contextInfo: { forwardingScore: 999, isForwarded: true,
         externalAdReply: { 
             title: 'ꕥ─────•「 AUDIO BROADCAST 」•─────ꕥ',  
             body: '📢 Isi Pesan :' + text,
             description: '',  
             mediaType: 2, 
           thumbnail: await (await fetch(fla + 'Broadcast')).buffer(), 
          mediaUrl: `https://youtu.be/null` 
         } 
      } 
   })
}
    m.reply('_*Broadcast Finished*_')
}
handler.help = ['bcavn'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastvn|bcvn)$/i

handler.owner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
