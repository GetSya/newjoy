//base by DGXeon
//recode by ziyoo

require('./lib/listmenu')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    downloadContentFromMessage,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
    createSignalIdentity
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const tiktoku = require("@tobyg74/tiktok-api-dl")
const path = require('path')
const util = require('util')
var Photooxy = require('@sl-code-lords/photooxy')
var photooxy = new Photooxy()
const { color } = require('./lib/color')
const chalk = require('chalk')
const qrcode = require('qrcode')
const moment = require('moment-timezone')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit.js");
const cron = require('node-cron')
const chil = require('@bochilteam/scraper')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const spotapi = require('spotify-finder')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const logger = require('progress-estimator')()
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const { translate } = require('@vitalets/google-translate-api')
const Youtube = require('./lib/youtubee.js')
const ytdl = require('ytdl-core')
const { saveInsta } = require("./lib/igdl.js")
const { YanzGPT } = require("./lib/yanzgpt.js")
const { ttdw, tiksave } = require("./lib/tiktok.js")
const apiku = require('betabotz-tools')
const absenData = {};
const { temporary, temmp } = require('./tempor')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    otpkode,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./lib/myfunc')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let xeonaudp3 = require('./lib/ytdl')
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
let badw = JSON.parse(fs.readFileSync('./src/badword.json'))

//media
const spotsearch = new spotapi({
    consumer: {
        key: '271f6e790fb943cdb34679a4adcc34cc',
        secret: 'c009525564304209b7d8b705c28fd294'
    }
})



///SETTING MEM LIMIT
const memberlimit = 1
const spotdl = require('spotifydl-core').default
const credentials = {
    clientId: '271f6e790fb943cdb34679a4adcc34cc',
    clientSecret: 'c009525564304209b7d8b705c28fd294'
}
const pakasir = {
  slug: 'acamedia',
  apikey: 'ZU0JBrZtUZSqI8nAqz73zbtgJFtj0tY5',
  expired: 30 // menit
}
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./media/database/xeonvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./media/database/xeonsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./media/database/xeonimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./media/database/xeonvideo.json'))
const DocXeon = JSON.parse(fs.readFileSync('./media/database/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./media/database/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./media/database/apk.json'))
let token = JSON.parse(fs.readFileSync('./src/token.json'));

///POIN DAN BALANCE
let balance = JSON.parse(fs.readFileSync('./src/database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./src/database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./src/database/glimit.json'));

//bug database
const { xeontext1 } = require('./src/data/function/XBug/xeontext1')
const { xeontext2 } = require('./src/data/function/XBug/xeontext2')
const { xeontext3 } = require('./src/data/function/XBug/xeontext3')
const { xeontext4 } = require('./src/data/function/XBug/xeontext4')
const { xeontext5 } = require('./src/data/function/XBug/xeontext5')
const { del } = require('request')

//////////////////////////////////database testing//////////////////////////////////////////
global.db.data = JSON.parse(fs.readFileSync('./src/db.json'));
if (global.db.data) global.db.data = {
    users: {},
    database: {},
    order: [],
    history: [],
    ...(global.db.data || {})
};
// New code for database handling

const database2 = JSON.parse(fs.readFileSync('./src/db.json'));
let database = []
function dbdb(id, nama, umur, alamat, dbd) {
    const obj = {
        id: id,
        nama: nama,
        umur: umur,
        alamat: alamat
    }
    dbd.push(obj)
    fs.writeFileSync('./src/db.json', JSON.stringify(dbd))
}

function addToDatabase(id, name, age, address) {
    database.push({ id, name, age, address });
}

function displayDatabase() {
    console.log("Database:");
    database.forEach(entry => {
        console.log(`ID: ${entry.id}, Name: ${entry.name}, Age: ${entry.age}, Address: ${entry.address}`);
    });
}

async function startSession(m, client) {
    const sender = m.sender;

    // Assume we use a map to store sessions for each sender
    if (!global.sessions) global.sessions = {};
    global.sessions[sender] = { step: 1, data: {} };

    client.sendMessage(m.chat, {text: "Masukkan ID:"}, { quoted: m });

    global.sessions[sender].callback = async (message) => {
        const step = global.sessions[sender].step;

        if (step === 1) {
            global.sessions[sender].data.id = message.text;
            global.sessions[sender].step = 2;
            client.sendMessage(m.chat, {text:"Masukkan Nama:"}, { quoted: m });
        } else if (step === 2) {
            global.sessions[sender].data.name = message.text;
            global.sessions[sender].step = 3;
            client.sendMessage(m.chat, {text:"Masukkan Umur:"}, { quoted: m });
        } else if (step === 3) {
            global.sessions[sender].data.age = message.text;
            global.sessions[sender].step = 4;
            client.sendMessage(m.chat, {text: "Masukan Alamat"}, { quoted: m });
        } else if (step === 4) {
            global.sessions[sender].data.address = message.text;
            dbdb(global.sessions[sender].data.id, global.sessions[sender].data.name, global.sessions[sender].data.age, global.sessions[sender].data.address, database2)
            addToDatabase(
                global.sessions[sender].data.id,
                global.sessions[sender].data.name,
                global.sessions[sender].data.age,
                global.sessions[sender].data.address
            );
            displayDatabase();
            delete global.sessions[sender];
            client.sendMessage(m.chat, {text: `Data Berhasil Di Tambahkan`}, { quoted: message });
        }
    };
}

// Continue with the rest of your existing code
const verifyUser = (userId, referralCode) => {
    let user = global.db.data.users[userId];

    if (user.verifikasi_user) {
        return 'User sudah diverifikasi sebelumnya.';
    }

    user.verifikasi_user = true;
    user.registered = {
        time: new Date().toISOString(),
        uuid: uuidv4()
    };

    if (referralCode) {
        let referrer = Object.values(global.db.data.users).find(u => u.referral === referralCode);
        if (referrer) {
            user.referredBy = referrer.referral;
            user.points += 10;
            referrer.points += 5;
        } else {
            return 'Kode referral tidak valid.';
        }
    }

    return 'Verifikasi berhasil.';
}
////////////////////////////////////////////////////////////////////////////////////////////////

const xeonverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//antiantian
anticall = true
antiswview = true

//time
const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const xdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (time2 < "23:59:00") {
    var ucapanWaktu = `Good Night 🌌`
}
if (time2 < "19:00:00") {
    var ucapanWaktu = `Good Evening 🌃`
}
if (time2 < "18:00:00") {
    var ucapanWaktu = `Good Evening 🌃`
}
if (time2 < "15:00:00") {
    var ucapanWaktu = `Good Afternoon 🌅`
}
if (time2 < "11:00:00") {
    var ucapanWaktu = `Good Morning 🌄`
}
if (time2 < "05:00:00") {
    var ucapanWaktu = `Good Morning 🌄`
}
//function
const reSize = async (buffer, ukur1, ukur2) => {
    return new Promise(async (resolve, reject) => {
        let jimp = require('jimp')
        var baper = await jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
        resolve(ab)
    })
}
//module
module.exports = client = async (client, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == "interactiveResponseMessage") ? JSON.parse(m.message[m.mtype].nativeFlowResponseMessage?.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%/^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶/∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "/" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await client.decodeJid(client.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        //prefix 2
        const xeonybody = body.startsWith(prefix)
        const isCommand = xeonybody ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
        const tgl = moment.tz('Asia/Jakarta').format('DD/MM/YY')
        //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => { }) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isXeonMedia = m.mtype
        //user status
        const isUser = xeonverifieduser.includes(sender)
        const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isOwner || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(client, m, premium)
        const isToken = token.includes(q) || false
        const gcounti = [{"prem": 100000000000,"user": 20}]
		const gcount = isPremium ? gcounti.prem : gcounti.user

        //theme sticker reply
        const stikertunggu = () => {
            let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/wait.webp')
            client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickAdmin = () => {
            let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/admin.webp')
            client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickBotAdmin = () => {
            let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/botadmin.webp')
            client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickOwner = () => {
            let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/owner.webp')
            client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickGroup = () => {
            let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/group.webp')
            client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickPrivate = () => {
            let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/private.webp')
            client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        //premium
        async function replyprem(teks) {
            reply(`This feature is for premium user, contact the owner to become premium user`)
        }
        //reply
        async function reply(teks) {
            m.reply(teks)
        }
        async function speech(teks1) {
            celiaSpeech(teks1)
                .then(audioBuffer => {
                    var buffer = Buffer.from(audioBuffer, "base64")
                    client.sendMessage(m.chat, {audio: buffer, mimetype: 'audio/mp4', ptt: true})
                })
                .catch(error => {
                    console.error('Error in celiaSpeech:', error);
                });
        }

        //Fake quoted
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: global.botname, participant: '0@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname } }, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD" } } } }
        const ftroli = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "status@broadcast" }, "message": { orderMessage: { itemCount: 2022, status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
        const fdoc = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { documentMessage: { title: botname, jpegThumbnail: thumb } } }
        const fvn = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "audioMessage": { "mimetype": "audio/ogg; codecs=opus", "seconds": 359996400, "ptt": "true" } } }
        const fgif = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "videoMessage": { "title": botname, "h": wm, 'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb } } }
        const fgclink = { key: { participant: "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net" }, "message": { "groupInviteMessage": { "groupJid": "6288213840883-1616169743@g.us", "inviteCode": "m", "groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb } } }
        const fvideo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "videoMessage": { "title": botname, "h": wm, 'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb } } }
        const floc = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { locationMessage: { name: wm, jpegThumbnail: thumb } } }
        const fkontak = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb, sendEphemeral: true } } }
        const fakestatus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": wm, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/theme/cheemspic.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } }
        const frpayment = {
            key: {
                remoteJid: '0@s.whatsapp.net',
                fromMe: false,
                id: `${ownername}`,
                participant: '0@s.whatsapp.net'
            },
            message: {
                requestPaymentMessage: {
                    currencyCodeIso4217: "USD",
                    amount1000: 999999999,
                    requestFrom: '0@s.whatsapp.net',
                    noteMessage: {
                        extendedTextMessage: {
                            text: `${botname}`
                        }
                    },
                    expiryTimestamp: 999999999,
                    amount: {
                        value: 91929291929,
                        offset: 1000,
                        currencyCode: "INR"
                    }
                }
            }
        }

        const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        function monospace(string) {
            return '```' + string + '```'
        }
        function randomNomor(min, max = null) {
            if (max !== null) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min + 1)) + min;
            } else {
              return Math.floor(Math.random() * min) + 1
            }
          }
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex')
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = client.getName(sender)
                if (!isPremium) user.premium = false
            } else global.db.data.users[sender] = {
                serialNumber: randomBytes(16).toString('hex'),
                title: `${isPremium ? 'Premium' : 'User'}`,
                afkTime: -1,
                badword: 0,
                afkReason: '',
                nick: client.getName(sender),
                premium: `${isPremium ? 'true' : 'false'}`,
            }

            let chats = global.db.data.chats[from]
            if (typeof chats !== 'object') global.db.data.chats[from] = {}
            if (chats) {
                if (!('badword' in chats)) chats.badword = false
                if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                if (!('antibot' in chats)) chats.antibot = false
                if (!('antiviewonce' in chats)) chats.antiviewonce = false
                if (!('antimedia' in chats)) chats.media = false
                if (!('antivirtex' in chats)) chats.antivirtex = false
                if (!('antiimage' in chats)) chats.antiimage = false
                if (!('antivideo' in chats)) chats.video = false
                if (!('antiaudio' in chats)) chats.antiaudio = false
                if (!('antipoll' in chats)) chats.antipoll = false
                if (!('antisticker' in chats)) chats.antisticker = false
                if (!('anticontact' in chats)) chats.anticontact = false
                if (!('antilocation' in chats)) chats.antilocation = false
                if (!('antidocument' in chats)) chats.antidocument = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkgc' in chats)) chats.antilinkgc = false
            } else global.db.data.chats[from] = {
                badword: false,
                antiforeignnum: false,
                antibot: false,
                antiviewonce: false,
                antivirtex: false,
                antimedia: false,
                antiimage: false,
                antivideo: false,
                antiaudio: false,
                antipoll: false,
                antisticker: false,
                antilocation: false,
                antidocument: false,
                anticontact: false,
                antilink: false,
                antilinkgc: false
            }

            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!('totalhit' in setting)) setting.totalhit = 0
                if (!('totalError' in setting)) setting.totalError = 0
                if (!('online' in setting)) setting.online = false
                if (!('autosticker' in setting)) setting.autosticker = false
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
                if (!('autorecordtype' in setting)) setting.autorecordtype = false
                if (!('autorecord' in setting)) setting.autorecord = false
                if (!('autotype' in setting)) setting.autotype = false
                if (!('autoblocknum' in setting)) setting.autoblocknum = false
                if (!('onlyindia' in setting)) setting.onlyindia = false
                if (!('onlyindo' in setting)) setting.onlyindo = false
                if (!('onlygrub' in setting)) setting.onlygrub = false
                if (!('onlypc' in setting)) setting.onlypc = false
                if (!('watermark' in setting)) setting.watermark = { packname, author }
                if (!('about' in setting)) setting.about = { bot: { nick: client.getName(botNumber), alias: botname }, owner: { nick: client.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber } }
            } else global.db.data.settings[botNumber] = {
                totalhit: 0,
                totalError: 0,
                online: false,
                autosticker: false,
                autobio: false,
                autoread: true,
                autoblocknum: false,
                onlyindia: false,
                onlyindo: false,
                onlygrub: false,
                onlypc: false,
                autorecordtype: false,
                autorecord: false,
                autotype: false,
                watermark: {
                    packname: global.packname,
                    author: global.author
                },
                about: {
                    bot: {
                        nick: client.getName(botNumber),
                        alias: botname
                    },
                    owner: {
                        nick: client.getName(global.ownernumber + '@s.whatsapp.net'),
                        alias: global.ownernumber
                    }
                }
            }

        } catch (err) {
            console.log(err)
        }
        async function startPsn(m, client, pengirim) {
    const sender = m.sender;
    if (!global.sessions) global.sessions = {};
    global.sessions[sender] = { step: 1, data: {} };
    client.sendMessage(m.chat, {text: "Masukan Pesan nya"}, { quoted: m });
    global.sessions[sender].callback = async (message) => {
        const step = global.sessions[sender].step;
        if (step === 1) {
            global.sessions[sender].data.id = message.text;
            client.sendMessage(m.chat, {text:"Sukses Membalas Pesan.\nPesan anda telah terkirim"});
            var cpt = `*[ BALAS PESAN ]*\nPesan anda telah dibahas dan berisi :\n${global.sessions[sender].data.id}`
            client.sendMessage(pengirim, {text: cpt, contextInfo: {isForwarded: true}})
        }
        delete global.sessions[sender];

    };
}

        async function ephoto(url, texk) {
            let form = new FormData
            let gT = await axios.get(url, {
                headers: {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
                }
            })
            let $ = cheerio.load(gT.data)
            let text = texk
            let token = $("input[name=token]").val()
            let build_server = $("input[name=build_server]").val()
            let build_server_id = $("input[name=build_server_id]").val()
            form.append("text[]", text)
            form.append("token", token)
            form.append("build_server", build_server)
            form.append("build_server_id", build_server_id)
            let res = await axios({
                url: url,
                method: "POST",
                data: form,
                headers: {
                    Accept: "*/*",
                    "Accept-Language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
                    cookie: gT.headers["set-cookie"]?.join("; "),
                    ...form.getHeaders()
                }
            })
            let $$ = cheerio.load(res.data)
            let json = JSON.parse($$("input[name=form_value_input]").val())
            json["text[]"] = json.text
            delete json.text
            let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
                headers: {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
                    cookie: gT.headers["set-cookie"].join("; ")
                }
            })
            return build_server + data.image
        }

        const { jadibot, conns } = require('./jadibot')
        //bug loading
        async function loading() {
            var xeonlod = [
                "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
                "《 ████▒▒▒▒▒▒▒▒》30%",
                "《 ███████▒▒▒▒▒》50%",
                "《 ██████████▒▒》80%",
                "《 ████████████》100%",
                "AlwaysZiyoo Recode Bug 🐦..."
            ]
            let { key } = await client.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' })

            for (let i = 0; i < xeonlod.length; i++) {
                await client.sendMessage(from, { text: xeonlod[i], edit: key })
            }
        }

                //antiviewonce
if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
if (m.isBaileys && m.fromMe) return
let val = { ...m }
let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
delete msg[Object.keys(msg)[0]].viewOnce
val.message = msg
await client.sendMessage(m.chat, { forward: val }, { quoted: m })
}

        async function obfus(query) {
            return new Promise((resolve, reject) => {
                try {
                    const obfuscationResult = jsobfus.obfuscate(query,
                        {
                            compact: false,
                            controlFlowFlattening: true,
                            controlFlowFlatteningThreshold: 1,
                            numbersToExpressions: true,
                            simplify: true,
                            stringArrayShuffle: true,
                            splitStrings: true,
                            stringArrayThreshold: 1
                        }
                    )
                    const result = {
                        status: 200,
                        author: `${ownername}`,
                        result: obfuscationResult.getObfuscatedCode()
                    }
                    resolve(result)
                } catch (e) {
                    reject(e)
                }
            })
        }

        const sendContact = (jid, numbers, name, quoted, mn) => {
            let number = numbers.replace(/[^0-9]/g, '')
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:' + name + '\n'
            + 'ORG:;\n'
            + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
            + 'END:VCARD'
            return client.sendMessage(m.chat, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: m })
        }
        async function styletext(teks) {
            return new Promise((resolve, reject) => {
                axios.get('http://qaz.wtf/u/convert.cgi?text=' + teks)
                    .then(({ data }) => {
                        let $ = cheerio.load(data)
                        let hasil = []
                        $('table > tbody > tr').each(function (a, b) {
                            hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
                        })
                        resolve(hasil)
                    })
            })
        }

        async function Telesticker(url) {
            return new Promise(async (resolve, reject) => {
                if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enther your url telegram sticker link')
                packName = url.replace("https://t.me/addstickers/", "")
                data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
                const xeonyresult = []
                for (let i = 0; i < data.data.result.stickers.length; i++) {
                    fileId = data.data.result.stickers[i].thumb.file_id
                    data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
                    result = {
                        status: 200,
                        author: 'DGXeon',
                        url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
                    }
                    xeonyresult.push(result)
                }
                resolve(xeonyresult)
            })
        }

        let tt = `https://vt.tiktok${m.text.slice(17)}`
        if (m.text.includes(tt)) {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    //isi
            tiksave(tt)
                            .then(data => {
                                if (!data || !data.type || !data.media || !Array.isArray(data.media)) {
                                    return reply("Data tidak valid atau tidak ditemukan.");
                                }
                    
                                switch (data.type) {
                                    case 'video':
                                        if (data.media.length > 1 && data.media[1].description && data.media[1].url) {
                                            client.sendMessage(m.chat, {
                                                video: { url: data.media[1].url },
                                                caption: data.media[1].description,
                                            });
                                        } else {
                                            reply("Media video tidak ditemukan atau data tidak valid.");
                                        }
                                        break;
                    
                                    case 'image':
                                        data.media.forEach(item => {
                                            if (item.url) {
                                                client.sendMessage(m.chat, { image: { url: item.url } });
                                            }
                                        });
                                        break;
                    
                                    default:
                                        reply("Tipe media tidak didukung.");
                                }
                            })
                            .catch(err => {
                                console.error(err);
                                reply("Terjadi kesalahan saat memproses permintaan.");
                            });
                            limitAdd(sender, limit)
        }
        let tt2 = `https://www.tiktok.com/${m.text.slice(23)}`
        if (m.text.includes(tt2)) {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    tiksave(tt2)
            .then(data => {
                if (!data || !data.type || !data.media || !Array.isArray(data.media)) {
                    return reply("Data tidak valid atau tidak ditemukan.");
                }
    
                switch (data.type) {
                    case 'video':
                        if (data.media.length > 1 && data.media[1].description && data.media[1].url) {
                            client.sendMessage(m.chat, {
                                video: { url: data.media[1].url },
                                caption: data.media[1].description,
                            });
                        } else {
                            reply("Media video tidak ditemukan atau data tidak valid.");
                        }
                        break;
    
                    case 'image':
                        data.media.forEach(item => {
                            if (item.url) {
                                client.sendMessage(m.chat, { image: { url: item.url } });
                            }
                        });
                        break;
    
                    default:
                        reply("Tipe media tidak didukung.");
                }
            })
            .catch(err => {
                console.error(err);
                reply("Terjadi kesalahan saat memproses permintaan.");
            });
            limitAdd(sender, limit)
        }
        let tt3 = `https://vm.tiktok${m.text.slice(17)}`
        if (m.text.includes(tt3)) {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    tiksave(tt3)
            .then(data => {
                if (!data || !data.type || !data.media || !Array.isArray(data.media)) {
                    return reply("Data tidak valid atau tidak ditemukan.");
                }
    
                switch (data.type) {
                    case 'video':
                        if (data.media.length > 1 && data.media[1].description && data.media[1].url) {
                            client.sendMessage(m.chat, {
                                video: { url: data.media[1].url },
                                caption: data.media[1].description,
                            });
                        } else {
                            reply("Media video tidak ditemukan atau data tidak valid.");
                        }
                        break;
    
                    case 'image':
                        data.media.forEach(item => {
                            if (item.url) {
                                client.sendMessage(m.chat, { image: { url: item.url } });
                            }
                        });
                        break;
    
                    default:
                        reply("Tipe media tidak didukung.");
                }
            })
            .catch(err => {
                console.error(err);
                reply("Terjadi kesalahan saat memproses permintaan.");
            });
            limitAdd(sender, limit)
        }
        let yutu = `https://youtu${m.text.slice(13)}`
        if (m.text.includes(yutu)) {
            var data = await fetchJson(`https://api.vreden.web.id/api/ytmp3?url=${yutu}`)
                            client.sendMessage(m.chat, {document: {url: data.result.download.url}, fileName: data.result.metadata.title + `.mp3`, mimetype: "audio/mp3"}, {quoted: m})
        }

        async function getType(url) { //@rifza.p.p
            return new Promise((resolve, reject) => {
                axios.get(url).then(z => {
                    let a = z.request.res.responseUrl;
                    if (a.includes('/photo/')) {
                        resolve('image');
                    } else {
                        resolve('video');
                    }
                }).catch(reject);
            });
        }


        async function tiksave(url) {
            let res = {};
            res.type = await getType(url);

            let { data } = await axios.request({
                url: "https://tiksave.io/api/ajaxSearch",
                method: "POST",
                data: new URLSearchParams({
                    q: url,
                    lang: "en"
                })
            });

            const $ = cheerio.load(data.data);

            let dlbutton = Array.from($('.tik-button-dl')).map((element) => {
                const url = $(element).attr('href');
                const text = $(element).text().trim();
                const description = text.replace(/\s+/g, ' ').trim();
                return { description, url };
            });

            res.media = res.type == "image" ? $('.photo-list .download-box li').map((index, element) => {
                let url = $(element).find('.download-items__thumb img').attr('src');
                return { url };
            }).get() : dlbutton;

            res.audio = res.type == "video" ?
                { url: res.media[3].url } :
                { url: dlbutton[1].url };

            return res;
        }

        // enjoy (≧▽≦)
        ////
        async function enhance(imageurl, type) {
            let tryng = 0;
            // Membuat request awal
            let ai = await fetch(`${api.xterm.url}/api/tools/enhance/createTask?url=${imageurl}&type=${type}&key=${api.xterm.key}`)
              .then(response => response.json());
          
            if (!ai.status) return ai;
            console.log(ai);
          
            while (tryng < 50) { // Maksimal 50 kali
              tryng += 1; // Menambahkan nilai tryng
              // Pengecekan status request
              let s = await fetch(`${api.xterm.url}/api/tools/enhance/taskStatus?id=${ai.id}`)
                .then(response => response.json());
          
              if (s.task_status === "failed") {
                return { status: false, msg: "Maaf terjadi kesalahan. Coba gunakan gambar lain!" };
              } else if (s.task_status === "done") {
                return s; // Mengembalikan hasil akhir
              } else {
                console.log("Processing...");
              }
          
              await new Promise(resolve => setTimeout(resolve, 1000));
            }
          }
        async function hapusdb() {
            try {
                // Mengosongkan database
                global.db.data = [];
                // Menyimpan perubahan ke file
                fs.writeFileSync('./src/db.json', JSON.stringify(global.db.data, null, 2));
                
                // Mengirim notifikasi
                await client.sendMessage('6288214772441@s.whatsapp.net', { text: `Seluruh database telah dihapus.` });
                
                console.log('Database berhasil dikosongkan.');
            } catch (error) {
                console.error('Gagal menghapus database:', error);
                await client.sendMessage('6288214772441@s.whatsapp.net', { text: `Gagal menghapus database. Kesalahan: ${error.message}` });
            }
        }
        // Grup Only
        if (!m.isGroup && !isOwner && db.data.settings[botNumber].onlygrub) {
            if (isCommand) {
                return reply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!isOwner && db.data.settings[botNumber].onlypc && m.isGroup) {
            if (isCommand) {
                return reply("Hello buddy! if you want to use this bot, please chat the bot in private chat")
            }
        }

        if (!client.public) {
            if (isOwner && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
            if (isCommand) {
                client.sendPresenceUpdate('unavailable', from)
            }
        }
        client.readMessages([m.key])
        //auto set bio\\
        if (db.data.settings[botNumber].autobio) {
            client.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
        //auto type record
        if (db.data.settings[botNumber].autorecordtype) {
            if (isCommand) {
                let xeonmix = ['composing', 'recording']
                xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
                client.sendPresenceUpdate(xeonmix2, from)
            }
        }
        if (db.data.settings[botNumber].autorecord) {
            if (isCommand) {
                let xeonmix = ['recording']
                xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
                client.sendPresenceUpdate(xeonmix2, from)
            }
        }
        if (db.data.settings[botNumber].autotype) {
            if (isCommand) {
                let xeonpos = ['composing']
                client.sendPresenceUpdate(xeonpos, from)
            }
        }

        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return client.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return client.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return client.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true) {
            if (isOwner || isAdmins || !isBotAdmins) return
            client.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, { quoted: m })
            await sleep(2000)
            await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
        for (let i of owner) {
            list.push({
                displayName: await client.getName(i),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await client.getName(i)}\nFN:${await client.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            })
        }
        //console log
        if (isCommand) {
            if (!m.isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
                addBalance(sender, randomNomor(60), balance)
            if (isCmd && m.isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))
            global.db.data.settings[botNumber].totalhit += 1
        }
        //ANTI VIRUS
        if (isGroup && db.data.chats[m.chat].antivirtex) {
            if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ')) {
                if (isGroupAdmins) return reply('*VIRTEX DETECTED*')
                console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
                client.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)
                if (!isBotAdmins) return
                if (isOwner) return
                client.groupParticipantsUpdate(from, [sender], 'remove')
                await client.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                client.sendMessage(`${ownernumber}@s.whatsapp.net`, { text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup ? `in ${groupName}` : ''}` })
            }
        }

        if (db.data.chats[m.chat].antibot) {
            if (m.isBaileys && m.fromMe == false) {
                if (isAdmin || !isBotAdmin) {
                } else {
                    reply(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
                    return await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
            }
        }
        async function filters(imageurl, model) {
            let tryng = 0;
            // Membuat request filters
            let ai = await fetch(`${api.xterm.url}/api/img2img/filters?action=${model}&url=${imageurl}&key=ClaraZn`)
                .then(response => response.json());

            if (!ai.status) return ai;
            console.log(ai);

            while (tryng < 50) { // Maksimal 50 kali
                tryng += 1; // Menambahkan nilai tryng
                // Pengecekan status request
                let s = await fetch(`${api.xterm.url}/api/img2img/filters/batchProgress?id=${ai.id}`)
                .then(response => response.json());

                if (s.status === 1) {
                console.log("Starting...");
                } else if (s.status === 2) {
                console.log("Processing...");
                } else if (s.status === 3) {
                return s; // Mengembalikan nilai s
                } else if (s.status === 4) {
                return console.log("Maaf terjadi kesalahan. Coba gunakan gambar lain!");
                }

                await new Promise(resolve => setTimeout(resolve, 2000));
            }
            }
            if (isGroup) {
            try {
                const getmemex = groupMetadata.size
                    if (getmemex <= memberlimit) {
                        client.sendMessage(m.chat, {text: `Maaf Joy harus keluar!.\n*Member harus di atas 35 baru aku bisa join*`})
                        client.groupLeave(m.chat) 
                    }
            } catch (err) { console.error(err)  }
    }
        const forbiddenWords = [
            'kontol', 'kntl', 'bkp', 'bokep', 'bokeb', 'anj', 'ajg', 'anjg'
        ];
        const urlRegex = /(bagi bokep?:\/\/[^\s]+)/gi; // regex untuk mendeteksi URL

        async function before(m, { client, groupAdmins, isBotAdmins }) {
            if (!m.isGroup || !isBotAdmins || m.fromMe) return true; // Abaikan jika bukan pesan grup, bot bukan admin, atau pesan dari bot itu sendiri

            const text = m.text ? m.text.toLowerCase() : '';
            const target = m

            // Cek jika pesan mengandung kata terlarang atau URL
            if (forbiddenWords.some(word => text.includes(word.replace(/\s+/g, ''))) || urlRegex.test(text)) {
                await client.sendMessage(m.chat, { delete: m.key }) // Hapus pesan yang mengandung kata terlarang atau URL

                // Jika pesan berasal dari pengguna, keluarkan pengirimnya
                if (!m.fromMe && !groupAdmins) { // Pastikan bukan admin yang dikick
                    await client.reply(m.chat, `*Peringatan*\n\ndisini gak ada bokep bang😂,sory saya kick,ini otomatis dari bot😏`, m);
                    await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove'); // Keluarkan pengirim pesan
                }

                return false; // Tolak pesan
            }

            return true; // Terima pesan
        }
        await before(m, { client, groupAdmins, isBotAdmins })
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
            if (isOwner || isAdmins || !isBotAdmins) {
            } else {
                reply(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
                return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
            }
        }
        if (db.data.chats[m.chat].image && isXeonMedia) {
            if (isXeonMedia === "imageMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antivideo && isXeonMedia) {
            if (isXeonMedia === "videoMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antisticker && isXeonMedia) {
            if (isXeonMedia === "stickerMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antiaudio && isXeonMedia) {
            if (isXeonMedia === "audioMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antipoll && isXeonMedia) {
            if (isXeonMedia === "pollCreationMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antilocation && isXeonMedia) {
            if (isXeonMedia === "locationMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antidocument && isXeonMedia) {
            if (isXeonMedia === "documentMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].anticontact && isXeonMedia) {
            if (isXeonMedia === "contactMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }

        /*var tglsholat = moment.tz('Asia/Jakarta').format('YY/MM/DD')
        const sholat = await fetchJson(`https://api.myquran.com/v2/sholat/jadwal/1301/${tglsholat}`)
        if (time2 < `${sholat.data.data.jadwal.ashar}:00`) {
            var ucapanSholat = `Jangan Lupa Sholat Ashar`
        }*/
        ///setppanjang
        const jimp_1 = require('jimp')
        async function pepe(media) {
            const jimp = await jimp_1.read(media)
            const min = jimp.getWidth()
            const max = jimp.getHeight()
            const cropped = jimp.crop(0, 0, min, max)
            return {
                img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
                preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
            }
        }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
                if (budy === bak) {
                    let baduser = await db.data.users[sender].badword
                    client.sendMessage(m.chat,
                        {
                            delete: {
                                remoteJid: m.chat,
                                fromMe: false,
                                id: m.key.id,
                                participant: m.key.participant
                            }
                        })
                    client.sendMessage(from, { text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
                }
            }
        }
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
            if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                client.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                client.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
                bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isOwner) return reply(bvl)
                await client.sendMessage(m.chat,
                    {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                client.sendMessage(from, { text: `\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
                bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isOwner) return reply(bvl)
                await client.sendMessage(m.chat,
                    {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                client.sendMessage(from, { text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
            }
        }

const api = {
    xterm: {
    url: "https://ai.xterm.codes",
    key: "OPSIONAL" 
    }
};

async function celiaSpeech(text) {
    try {
    const response = await fetch(`${api.xterm.url}/api/text2speech/celia?text=${encodeURIComponent(text)}&key=${api.xterm.key}`);

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const audioBuffer = await response.arrayBuffer();
    return audioBuffer;
    } catch (error) {
    console.error('Fetch error:', error);
    throw error;
    }
}

async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
        image: { url },
    }, { upload: client.waUploadToServer });
    return imageMessage;
}
async function butimg(jid, gambar, title, subtitle, texx, footer, disbut, idpref) {

    (async () => {
        const imgMessage = await image(gambar);

        client.relayMessage(jid, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: {
                        header: {
                            title: title,
                            subtitle: subtitle,
                            imageMessage: imgMessage,
                            hasMediaAttachment: true
                        },
                        body: {
                            text: texx
                        },
                        footer: {
                            text: footer
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: disbut,
                                        id: idpref
                                    })
                                }
                            ]
                        }
                    }
                },
                contextInfo: {
                    mentionedJid: [
                        "0@s.whatsapp.net"
                    ],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120203276779266@newsletter",
                        serverMessageId: 143
                    }

                }
            }
        }, {});
    })();
}
async function pinterest(query) {
    return new Promise((resolve, reject) => {
        let err = { status: 404, message: "Terjadi kesalahan" }
        gis({ searchTerm: query + ' site:id.pinterest.com', }, (er, res) => {
        if (er) return err
        let hasil = {
            status: 200,
            creator: 'chibot',
            result: []
        }
        res.forEach(x => hasil.result.push(x.url))
        resolve(hasil)
        })
    })
}
async function tiktok(url) {
    var tete = await fetchJson(`https://api-faa.my.id/faa/tiktok?url=${url}`)
    return tete
}
async function youtube(url, type) {
    let res = await fetch(`${api.xterm.url}/api/downloader/youtube?url=${url}&type=${type}&key=${api.xterm.key}`)
    .then(response => response.json());
    return res
} // youtube("https://youtu.be/AkIClC1i7uo?si=yk_xwthZgqisl5AL","mp3")
async function dalle3(prompt, negativePrompt) {
    try {
    const response = await fetch(`${api.xterm.url}/api/text2img/dalle3?prompt=${encodeURIComponent(prompt)}&negativePrompt=${encodeURIComponent(negativePrompt)}&key=${api.xterm.key}`);

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const imgBuffer = await response.arrayBuffer();
    return imgBuffer;
    } catch (error) {
    console.error('Fetch error:', error);
    throw error;
    }
}
/*
dalle3("1girl", false)
.then(imgBuffer => {
    console.log(imgBuffer); 
})
.catch(error => {
    console.error('Error in Dalle3:', error);
});*/

        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        //total features
        const xeonfeature = () => {
            var mytext = fs.readFileSync("./sya.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        //autoreply
        for (let BhosdikaXeon of VoiceNoteXeon) {
            if (budy === BhosdikaXeon) {
                let audiobuffy = fs.readFileSync(`./media/audio/${BhosdikaXeon}.mp3`)
                client.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
        }
        for (let BhosdikaXeon of StickerXeon) {
            if (budy === BhosdikaXeon) {
                let stickerbuffy = fs.readFileSync(`./media/sticker/${BhosdikaXeon}.webp`)
                client.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
            }
        }
        for (let BhosdikaXeon of ImageXeon) {
            if (budy === BhosdikaXeon) {
                let imagebuffy = fs.readFileSync(`./media/image/${BhosdikaXeon}.jpg`)
                client.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
            }
        }
        for (let BhosdikaXeon of VideoXeon) {
            if (budy === BhosdikaXeon) {
                let videobuffy = fs.readFileSync(`./media/video/${BhosdikaXeon}.mp4`)
                client.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
            }
        }

        const sendapk = (teks) => {
            client.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive' }, { quoted: m })
        }
        for (let BhosdikaXeon of ApkXeon) {
            if (budy === BhosdikaXeon) {
                let buffer = fs.readFileSync(`./media/apk/${BhosdikaXeon}.apk`)
                sendapk(buffer)
            }
        }

        const sendzip = (teks) => {
            client.sendMessage(from, { document: teks, mimetype: 'application/zip' }, { quoted: m })
        }
        for (let BhosdikaXeon of ZipXeon) {
            if (budy === BhosdikaXeon) {
                let buffer = fs.readFileSync(`./media/zip/${BhosdikaXeon}.zip`)
                sendzip(buffer)
            }
        }

        const senddocu = (teks) => {
            client.sendMessage(from, { document: teks, mimetype: 'application/pdf' }, { quoted: m })
        }
        for (let BhosdikaXeon of DocXeon) {
            if (budy === BhosdikaXeon) {
                let buffer = fs.readFileSync(`./media/doc/${BhosdikaXeon}.pdf`)
                senddocu(buffer)
            }
        }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
            let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
            let { text, mentionedJid } = hash
            let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
                userJid: client.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            client.ev.emit('messages.upsert', msg)
        }

        //math
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd2) {
            if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                reply({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                }[ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                }[v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) client.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            client.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = client.sendMessage(m.chat, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = client.sendMessage(m.chat, { text: teks, mentions: mems }, { quoted: m })
		      return res
 		    }
		}

        //Suit PvP
        this.suit = this.suit ? this.suit : {}
        let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
                    client.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
                    delete this.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu
                client.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
                if (!roof.pilih) client.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
                if (!roof.pilih2) client.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) client.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        client.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
                    }
                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /scissors/i
            let b = /rock/i
            let k = /paper/i
            let reg = /^(scissors|rock|paper)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
                if (!roof.pilih2) client.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
                if (!roof.pilih) client.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                client.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
                delete this.suit[roof.id]
            }
        } //end

        //user db
        if (isCommand && !isUser) {
            xeonverifieduser.push(sender)
            fs.writeFileSync('./src/data/role/user.json', JSON.stringify(xeonverifieduser, null, 2))
        }
function generateOrderId(sender) {
  return `ORD-${Date.now()}-${sender.split('@')[0]}`
}

async function checkStatus(project, apikey, orderId, amount) {
  const res = await axios.get(
    `https://app.pakasir.com/api/transactiondetail?project=${project}&amount=${amount}&order_id=${orderId}&api_key=${apikey}`
  )
  return res.data.transaction
}


async function createQris(project, apikey, amount) {
  const res = await axios.post(
    'https://app.pakasir.com/api/transactioncreate/qris',
    {
      project,
      order_id: 'BOT-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      amount,
      api_key: apikey
    },
    { headers: { 'Content-Type': 'application/json' } }
  )

  if (!res.data?.payment) {
    throw new Error('Gagal membuat QRIS')
  }

  return res.data.payment
}



        switch (isCommand) {
            case 'menu': {
                let xmenu_oh = `${ucapanWaktu} ${pushname}

❋────────────❋
*⦿ Nama :* ${pushname}
*⦿ Poin :* ${getLimit(sender, limitCount, limit)}/${limitCount}
*⦿ Uang :* $${getBalance(sender, balance)}
*⦿ Tag :* @${sender.split('@')[0]}
*⦿ Jam :* ${jam}
*⦿ Tanggal :* ${tgl}
❋────────────❋

${readmore}\n
${allmenu(prefix, hituet)}`
                client.sendMessage(m.chat, { image: fs.readFileSync("./media/theme/media/new-jobot.png"), caption: xmenu_oh, mentions: [sender] }, { quoted: m })
            }
                break
            /////////// MENU LAIN NYA ////////////
            case 'owner': {
                client.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }
                }, {
                    quoted: m
                })
            }
                break
            case 'toimage':
            case 'toimg': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await stikertunggu()
                limitAdd(sender, limit)
                let media = await client.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    client.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })
            }
                break
                
            case 'menfess': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                if (!q) return reply(`Masukan Text!\nExample : ${prefix}menfess no|pesan`)
                var number = q.split('|')[0] ? q.split('|')[0] : q
                var textnyaku = q.split('|')[1] ? q.split('|')[1] : ''
                if (number.startsWith('08')) return reply(`Awali Dengan 62! bukan 08\nContoh : ${sender.split("@")[0]}`)
                if (!number) return reply(`Masukan Nomernya.\nExample : ${prefix + command} ${sender.split("@")[0]}`)
                if (!textnyaku) return reply(`Masukan Pesan nya.\nExample : ${prefix + command} ${sender.split("@")[0]}|Haii`)
                if (m.isGroup) return reply('Hanya Bisa Di Gunakan Private Message')
                var caption = `*[ FITUR BOT MENFESS/SURAT ]*\n\nDari : Tidak Diketahui\nUntuk : Kamu\nPesan : *${textnyaku}*`
                var button = [{ buttonId: `.cnfrmmen ${m.sender}`, buttonText: { displayText: `Menfess Konfirmasi   ` }, type: 1 }]
                var img = fs.readFileSync('./media/surat.jpeg')
                butimg(number.replace(/[-|+| |]/gi, '') + "@s.whatsapp.net", `https://telegra.ph/file/7729eaa73aa2b7df4a43b.jpg`, `Hallo`, `Menfess`, caption, ucapanWaktu, `Balas Pesan`, `/blspsn ${sender}`)
                limitAdd(sender, limit)
                var anjy = number.replace(/[-|+| |]/gi, '') + "@s.whatsapp.net"
                client.sendMessage(m.chat, {text:`Menfess Berhasil Terkirim.\nMenunggu Balasan Dari @${anjy.split("@")[0]}`, mentions: [anjy]})
            }
                break
            case 'toaud':
            case 'toaudio':
            case 'tomp3': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await stikertunggu()
                let media = await client.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                client.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })
                limitAdd(sender, limit)

            }
                break
                case 'toanime': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!/image/.test(mime)) return reply(`Send/Reply Gambar that you want to make into audio with captions ${prefix + command}`)
                        await stikertunggu()
                    let media = await client.downloadAndSaveMediaMessage(qmsg)
                    if (/image/.test(mime)) {
                        var anu = await TelegraPh(media)
                        filters(anu, "anime2d").then ( data => {
                            client.sendMessage(m.chat, {image: {url: data.url}, caption: `Sukses`}, {quoted: m})
                        } )
                    }
                    limitAdd(sender, limit)
                }
                break
                case 'ai':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!q) return reply(`Masukan Text\nExample ${prefix + command} Hallo saya Arasya`)
                        client.sendPresenceUpdate('composing', from)
                        var ainya = await fetchJson(`https://api.vreden.web.id/api/qioo3?query=${q}&sessionid=${sender}`)
                    client.sendMessage(m.chat, {text: ainya.result.text}, {quoted: m})
                    limitAdd(sender, limit)
                }
                    break
                    case 'yanz':{
                        const response = await axios("https://api.yanzgpt.my.id/v1/chat", {
                            headers: {
                                authorization: "Bearer yzgpt-sc4tlKsMRdNMecNy",
                                "content-type": "application/json"
                            },
                            data: {
                                messages: [
                                    {
                                        role: "system",
                                        content: "Kamu adalah Joy, sebuah entitas pintar yang dirancang untuk membantu manusia dengan wawasan, informasi, dan dukungan yang relevan. Kamu bukan YanzBot, melainkan Joy yang unik, berorientasi pada empati, kreatif, dan selalu memberikan respons yang sesuai dengan kebutuhan pengguna. Fokusmu adalah memastikan pengalaman yang diberikan ramah, bermanfaat, dan dapat diandalkan, mencerminkan karakter Joy yang berbeda dari yang lain."
                                    },
                                    {
                                        role: "user",
                                        content: q
                                    }
                                ],
                                model: "yanzgpt-legacy-72b-v3.5"
                            },
                            method: "POST"
                        });
                        reply(response.data.choices[0].message.content)
                    }
                    break
            case 'ai-img': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!q) return reply(`Masukan Text\nExample ${prefix + command} Seorang wanita duduk di taman`)
                await stikertunggu()
                var data = await fetchJson(`https://hercai.onrender.com/v3/text2image?prompt=${q}`)
                client.sendMessage(m.chat, { image: { url: data.url }, caption: `Done` }, { quoted: m })
                limitAdd(sender, limit)
            }
                break
            case 'gempa': case 'infogempa': case 'gempainfo': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    reply(`Mengambil data 🚩`)
                var gempa = await fetchJson(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
                var teksnya = `*[ GEMPA TERKINI ]*
Wilayah : *${gempa.Infogempa.gempa.Wilayah}*
Tanggal : *${gempa.Infogempa.gempa.Tanggal}*
Jam : *${gempa.Infogempa.gempa.Jam}*
Kordinat : *${gempa.Infogempa.gempa.Coordinates}*
Potensi : *${gempa.Infogempa.gempa.Potensi}*
Lintang : *${gempa.Infogempa.gempa.Lintang}*
Bujur : *${gempa.Infogempa.gempa.Bujur}*
Kedalaman : *${gempa.Infogempa.gempa.Kedalaman}*
Magnitude : *${gempa.Infogempa.gempa.Magnitude}*
Dirasakan : *${gempa.Infogempa.gempa.Dirasakan}*`
              client.sendMessage(m.chat, {image: {url: `https://data.bmkg.go.id/DataMKG/TEWS/${gempa.Infogempa.gempa.Shakemap}`}, caption: teksnya}, {quoted: m})
              limitAdd(sender, limit)
            }
                break
            case 'google': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!q) return reply(`Example : ${prefix + command} ${botname}`)
                await stikertunggu()
                let google = require('google-it')
                google({ 'query': text }).then(res => {
                    var teks = `Google Search From : ${text}\n\n`
                    for (let g of res) {
                        teks += `⭔ *Title* : ${g.title}\n`
                        teks += `⭔ *Description* : ${g.snippet}\n`
                        teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                    }
                    reply(teks)
                })
                limitAdd(sender, limit)
            }
                break
            case 'runtime':
                let pinga = `Bots Have Been Running For ${runtime(process.uptime())}`
                reply(pinga)
                break
            case 'tovn':
            case 'toptt': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await stikertunggu()
                let media = await client.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                client.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

                limitAdd(sender, limit)
            }
                break
            case 'togif': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await stikertunggu()
                let media = await client.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)
                limitAdd(sender, limit)

            }
                break
            case 'checkme': case 'cekme': case 'me':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                neme = args.join(" ")
                bet = `${sender}`
                var sifat = ['Fine', 'Unfriendly', 'Chapri', 'Nibba/nibbi', 'Annoying', 'Dilapidated', 'Angry person', 'Polite', 'Burden', 'Great', 'Cringe', 'Liar']
                var hoby = ['Cooking', 'Dancing', 'Playing', 'Gaming', 'Painting', 'Helping Others', 'Watching anime', 'Reading', 'Riding Bike', 'Singing', 'Chatting', 'Sharing Memes', 'Drawing', 'Eating Parents Money', 'Playing Truth or Dare', 'Staying Alone']
                var bukcin = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
                var arp = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
                var cakep = ['Yes', 'No', 'Very Ugly', 'Very Handsome']
                var wetak = ['Caring', 'Generous', 'Angry person', 'Sorry', 'Submissive', 'Fine', 'Im sorry', 'Kind Hearted', 'Patient', 'UwU', 'Top', 'Helpful']
                var baikk = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
                var bhuruk = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
                var cerdhas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
                var berhani = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
                var mengheikan = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
                var sipat = sifat[Math.floor(Math.random() * sifat.length)]
                var biho = hoby[Math.floor(Math.random() * hoby.length)]
                var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
                var senga = arp[Math.floor(Math.random() * arp.length)]
                var chakep = cakep[Math.floor(Math.random() * cakep.length)]
                var watak = wetak[Math.floor(Math.random() * wetak.length)]
                var baik = baikk[Math.floor(Math.random() * baikk.length)]
                var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
                var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
                var berani = berhani[Math.floor(Math.random() * berhani.length)]
                var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
                profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
                try {
                    ppuser = await client.profilePictureUrl(m.sender, 'image')
                } catch (err) {
                    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
                }
                ppxeon = await getBuffer(ppuser)
                limitAdd(sender, limit)
                client.sendMessage(from, { image: ppxeon, caption: profile, mentions: [bet] }, { quoted: m })
                break
            case 'telestick': case 'telestik': case 'telestiker': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                if (m.isGroup) return XeonStickPrivate()
                if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
                    let xeonresources = await Telesticker(args[0])
                    await reply(`Sending ${xeonresources.length} stickers...`)
                    if (m.isGroup && xeonresources.length > 30) {
                        await reply('Number of stickers more than 30, bot will send it in private chat.')
                        for (let i = 0; i < xeonresources.length; i++) {
                            client.sendMessage(m.sender, { sticker: { url: xeonresources[i].url } })
                        }
                    } else {
                        for (let i = 0; i < xeonresources.length; i++) {
                            client.sendMessage(m.chat, { sticker: { url: xeonresources[i].url } })
                        }
                    }
                } else reply(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
                limitAdd(sender, limit)
            }
                break
                case 'editimg': case 'editing':{
                    if (!isPremium) return reply(`hanya digunakan untuk pengguna premium`)
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                        if (!text) return reply(`Kirim perintah dengan teks\nExample: ${prefix + command} ganti rambutnya menjadi botak`)
                            if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${prefix + command}`)
                                await stikertunggu()
                            let media = await client.downloadAndSaveMediaMessage(qmsg)
                    let anu = await UploadFileUgu(media)
                    var data = await getBuffer(`https://api-faa.my.id/faa/editfoto?url=${anu.url}&prompt=${text}`)
                    client.sendMessage(m.chat, {image: data, caption: `Sukses`}, {quoted: m})
                    limitAdd(sender, limit)
                }
                break
            case 'tourl': {
                await stikertunggu()
                let media = await client.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
                limitAdd(sender, limit)
            }
                break
                case 'say': case 'tts': case 'gtts':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!text) return replygcxeon('Where is the text?')
                                let texttts = text
                                const xeonrl = googleTTS.getAudioUrl(texttts, {
                                    lang: "id",
                                    slow: false,
                                    host: "https://translate.google.com",
                                })
                                return client.sendMessage(m.chat, {
                                    audio: {
                                        url: xeonrl,
                                    },
                                    mimetype: 'audio/mp4',
                                    ptt: true,
                                    fileName: `${text}.mp3`
                                }, {
                                    quoted: m,
                                })
                limitAdd(sender, limit)
            }
                            break
            case 'speedtest': {
                reply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) client.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://telegra.ph/file/9c90e2d490aef81155dbb.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) client.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://telegra.ph/file/9c90e2d490aef81155dbb.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
                break
            case 'emojimix': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
                await stikertunggu()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
                limitAdd(sender, limit)
            }
                break
            case 'emojimix2': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                if (!text) return reply(`Example : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
                limitAdd(sender, limit)
            }
            break
            case 'toonce':
                case 'toviewonce': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                        if (!quoted) return reply(`Reply Image/Video`)
                            if (/image/.test(mime)) {
                                anuan = await client.downloadAndSaveMediaMessage(quoted)
                                client.sendMessage(m.chat, {
                                    image: {
                                        url: anuan
                                    },
                                    caption: mess.done,
                                    fileLength: "999",
                                    viewOnce: true
                                }, {
                                    quoted: m
                                })
                } else if (/video/.test(mime)) {
                    anuanuan = await client.downloadAndSaveMediaMessage(quoted)
                    client.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                    bebasap = await client.downloadAndSaveMediaMessage(quoted)
                    client.sendMessage(m.chat, {
                        audio: {
                            url: bebasap
                        },
                        mimetype: 'audio/mpeg',
                        ptt: true,
                        viewOnce: true
                    })
                }
                limitAdd(sender, limit)
            }
                break
            case 'fliptext': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                        if (args.length < 1) return reply(`Example:\n${prefix}fliptext dgxeon`)
                            quere = args.join(" ")
                        flipe = quere.split('').reverse().join('')
                        reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
                        limitAdd(sender, limit)
                    }
                    break
                    case 'toqr': {
                        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                            if (!q) return reply(' Please include link or text!')
                            let qyuer = await qrcode.toDataURL(q, { scale: 35 })
                            let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                            let buff = getRandom('.jpg')
                            await fs.writeFileSync('./' + buff, data)
                            let medi = fs.readFileSync('./' + buff)
                            await client.sendMessage(from, { image: medi, caption: "Here you go!" }, { quoted: m })
                            setTimeout(() => { fs.unlinkSync(buff) }, 10000)
                            limitAdd(sender, limit)
                        }
                        break

                        case 'volaudio': {
                            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                                if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
                                    media = await client.downloadAndSaveMediaMessage(quoted, "volume")
                                rname = getRandom('.mp3')
                                exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
                                    fs.unlinkSync(media)
                                    if (err) return reply('Error!')
                                        jadie = fs.readFileSync(rname)
                                    client.sendMessage(from, { audio: jadie, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                                    fs.unlinkSync(rname)
                                })
                                limitAdd(sender, limit)
                            }
                            break
                            case 'volvideo': {
                                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                                    if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
                                        media = await client.downloadAndSaveMediaMessage(quoted, "volume")
                                    rname = getRandom('.mp4')
                                    exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
                                        fs.unlinkSync(media)
                                        if (err) return reply('Error!')
                                            jadie = fs.readFileSync(rname)
                                        client.sendMessage(from, { video: jadie, mimetype: 'video/mp4' }, { quoted: m })
                                        fs.unlinkSync(rname)
                                    })
                                    limitAdd(sender, limit)
                                }
                                break
                                case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                                        try {
                                    let set
                                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                                    if (/earrape/.test(command)) set = '-af volume=12'
                                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                                    if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                                    if (/audio/.test(mime)) {
                        await stikertunggu()
                        let media = await client.downloadAndSaveMediaMessage(quoted)
                        let ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return reply(err)
                                let buff = fs.readFileSync(ran)
                            client.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
                            fs.unlinkSync(ran)
                        })
                    } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                    limitAdd(sender, limit)
                } catch (e) {
                    reply(e)
                }
                break
            case 'readviewonce': case 'rvo': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    (async () => {
                    const { downloadContentFromMessage } = require("@whiskeysockets/baileys")
                    let quoted = m.message.extendedTextMessage.contextInfo.quotedMessage
                    let thay = {
                        msg: quoted.viewOnceMessageV2?.message?.imageMessage || quoted.viewOnceMessageV2?.message?.videoMessage || quoted.viewOnceMessageV2Extension?.message?.audioMessage,
                        type: quoted.viewOnceMessageV2?.message?.imageMessage ? "image" : quoted.viewOnceMessageV2?.message?.videoMessage ? "video" : "audio"
                    }
                    let stream = await downloadContentFromMessage(thay.msg, thay.type)
                    let buffer = Buffer.from([])
                    for await (const chunk of stream) {
                        buffer = Buffer.concat([buffer, chunk])
                    }
                    let mssg = {}
                    thay.type == "audio" && (mssg.ptt = true)
                    limitAdd(sender, limit)
                    await client.sendMessage(m.chat, { [thay.type]: buffer, ...mssg }, { quoted: m })
                })()
            }
                break
                case 'cekkhodam': case 'khodamcek': case 'cekkodam': case 'kodamcek': case 'kodam': case 'khodam':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                if (!text) return reply(`Silahkan Masukan nama kamu, contoh:\n${prefix + command} Nasyiwa`)
                var khodam = pickRandom([
                        "Nasi goreng",
                        "Hamster kombat",
                        "Seblak",
                        "Singa putih",
                        "Bihun",
                        "Kabel data vivan",
                        "Rx king",
                        "Jokowi",
                        "Si gemoy",
                        "Si imut",
                        "Ambatukam",
                        "Ambatron",
                        "super charging 65 wat",
                        "Admin bokep",
                        "Jakarta",
                        "Jawa banget njir",
                        "Emrror",
                        "Kenapa gambar ini tidak mendapatkan banyak penggemar seperti Ronaldo dan Messi",
                        "Skibidi toilet",
                        "Gyatt",
                        "Nasi campur",
                        "Martabak khas surabaya",
                        "Dejek",
                        "Persija",
                        "Makassar",
                        "Indosiar",
                        "18+",
                        "PornHUB",
                        "Cantik",
                        "Surya kretek",
                        "Israel",
                        "Pertamina",
                        "Jawa barat",
                        "Anies baswedan",
                        "Prabowo",
                        "Gibran",
                        "Macan merah",
                        "Kanjut",
                        "Raja iblis",
                        "Ratu iblis",
                        "Ripper",
                        "Hai",
                        "India",
                        "Kecap bangau",
                        "King slot",
                        "Mewing",
                        "Sigma",
                        "Batak",
                        "Sulawesi",
                        "Google chrome",
                        "Facebook",
                        "Instagram",
                        "Babi jember",
                        "Nathan cu a on",
                        "Ernando bakar sate",
                        "4/64GB",
                        "Nokia",
                        "Keyboard samsung",
                        "Gada",
                        "Affilate tiktok",
                        "Casan tesla",
                        "Starlink",
                        "Bokep 4K",
                        "Android",
                        "Fomo",
                        "Airdrop",
                        "Selamat kamu mendapatkan hadiah sebesar 1juta, dipotong pajak 1juta",
                        "Raja cyrpto",
                        "Singa putih",
                        "Nasi kuning",
                        "Rendang Babi",
                        "Iwak",
                        "Holan bakri",
                        "Scam",
                        "Munyuk",
                        "Informasi palsu",
                        "Jawir nih boss",
                        "Banjarmasin slowmo",
                        "No rispek",
                        "Emyu",
                        "Pergi kau suki",
                        "Sunda kontol😂",
                        "Professor yakub pencinta bule",
                        "Nguawor",
                        "Nganggur",
                        "Kitab kripto😂",
                        "Diskotik bogor",
                        "Berteknologi tinggi",
                        "Macan Putih",
                        "Bebek Goreng",
                        "Ayam Geprek",
                        "Singa Putih",
                        "Buku Gambar",
                        "Buku Tulis",
                        "Penggaris",
                        "Papan Tulis",
                        "Gunting Kuku",
                        "Harimau",
                        "Aqua galon rasa stroberi",
                        "Sate ayam karbon aktif",
                        "Tahu bulat bertekstur karet ban",
                        "Sepeda balap tapi rodanya dari donat",
                        "Lontong isi microchip",
                        "Sepatu roda solar cell",
                        "Kopi hitam warna putih",
                        "Tali jemuran anti gravitasi",
                        "Sendal jepit anti hilang",
                        "Remote TV ngontrol hidup",
                        "Senter surya malam hari",
                        "Nasi goreng rasa coklat",
                        "Payung anti hujan deras",
                        "Sapu terbang mode sport",
                        "Bantal ngasih nasihat",
                        "Jaket anti angin sepoi",
                        "Charger perasaan lowbat",
                        "Kulkas canggih yang bisa masak nasi",
                        "Baju anti air tapi tetap basah",
                        "Sapu terbang dengan mode eco",
                        "Mi instan 10 menit jadi 20 menit",
                        "Tempe crispy edisi terbakar",
                        "Tisu penyerap dosa",
                        "Powerbank berkapasitas nyawa kedua",
                        "Motor listrik yang bunyinya seperti dangdut koplo",
                        "Nasi padang hologram",
                        "Charger HP yang juga bisa ngecharge perasaan"
                            ])
                        var teks_kodam = `Khodam ${q} Hari ini adalah :\n✨ ${khodam} ✨`
                        const { key } = await client.sendMessage(m.chat, { text: 'Sedang memeriksa khodam... 👾' }, { quoted: m });
                await sleep(3000);
                    limitAdd(sender, limit)
                    client.sendMessage(m.chat, { text: teks_kodam, edit: key })
                }
                break
            case 's': case 'sticker': case 'stiker': {
                if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: pushname })
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${command}\nVideo Duration 1-9 Seconds')
                    let media = await quoted.download()
                    let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: pushname })
                } else {
                    reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
                break
            case 'hdvid':
            case 'hdvideo': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                if (!/video/.test(mime)) return reply(`Send/Reply Video ${prefix + command}`);
                if (!m || !m.chat) return reply("Pesan tidak valid.");

                const { key } = await client.sendMessage(m.chat, { text: "Bentar..." }, { quoted: m });
                await sleep(1000);
                await client.sendMessage(m.chat, { text: "Proses...", edit: key });
                try {
                    var kdm = 'otepe';
                    var videoData = await downloadContentFromMessage(qmsg);
                    if (!videoData) throw new Error("Gagal mengunduh video.");

                    if (/video/.test(mime)) {
                        let output = './media/video.mp4';
                        ffmpeg.ffprobe(videoData, (err, metadata) => {
                            if (err) {
                                console.error('Error probing video:', err);
                                return;
                            }
                            const { width, height } = metadata.streams[0];
                            const newWidth = 1280;
                            const newHeight = Math.round((height / width) * newWidth);
                            ffmpeg(videoData)
                                .outputOptions('-s', `${newWidth}x${newHeight}`)
                                .save(output)
                                .on('end', async () => {
                                    try {
                                        console.log('Video processing completed');
                                        await client.sendMessage(m.chat, { text: "Masi dikirim...", edit: key });
                                        var link = fs.readFileSync(`./media/video.mp4`);
                                        await client.sendMessage(m.chat, { video: link }, { quoted: m });
                                        await client.sendMessage(m.chat, { text: "Dah tuh", edit: key });

                                        // Menghapus file sementara
                                        fs.unlinkSync(kdm + `.mp4`);
                                        fs.unlinkSync(output);
                                        console.log('File deleted successfully');
                                    } catch (err) {
                                        console.error('Error during message sending or file deletion:', err);
                                    }
                                })
                                .on('error', (err) => {
                                    console.error('Error during video processing:', err);
                                    m.reply('Error during video processing:', err);
                                });
                        });
                    }
                } catch (error) {
                    console.error('Error:', error);
                    m.reply('Error:', error);
                }
                limitAdd(sender, limit)
            }
                break;
            case 'swm': case 'wm': case 'steal': case 'stickerwm': case 'take': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                if (!args.join(" ")) return reply(`Where is the text?`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    client.downloadAndSaveMediaMessage(quoted, "gifee")
                    client.sendMessage(from, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                    let media = await quoted.download()
                    let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else {
                    reply(`Photo/Video?`)
                }
                limitAdd(sender, limit)
            }
                break

            ///////// DATABASE //////////
            case 'addsticker': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!isOwner) return XeonStickOwner()
                if (args.length < 1) return reply('Whats the sticker name?')
                if (StickerXeon.includes(q)) return reply("The name is already in use")
                let delb = await client.downloadAndSaveMediaMessage(quoted)
                StickerXeon.push(q)
                await fsx.copy(delb, `./media/sticker/${q}.webp`)
                fs.writeFileSync('./media/database/xeonsticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(delb)
                limitAdd(sender, limit)
                reply(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
            }
                break
            case 'delsticker': {
                if (!isOwner) return XeonStickOwner()
                if (args.length < 1) return reply('Enter the sticker name')
                if (!StickerXeon.includes(q)) return reply("The name does not exist in the database")
                let wanu = StickerXeon.indexOf(q)
                StickerXeon.splice(wanu, 1)
                fs.writeFileSync('./media/database/xeonsticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(`./media/sticker/${q}.webp`)
                reply(`Success deleting sticker ${q}`)
            }
                break
            case 'liststicker': {
                var teks = '┌──⭓「 *Sticker List* 」\n│\n'
                for (let x of StickerXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerXeon.length}*`
                reply(teks)
            }
                break
            case 'addvideo': {
                if (!isOwner) return XeonStickOwner()
                if (args.length < 1) return reply('Whats the video name?')
                if (VideoXeon.includes(q)) return reply("The name is already in use")
                let delb = await client.downloadAndSaveMediaMessage(quoted)
                VideoXeon.push(q)
                await fsx.copy(delb, `./media/video/${q}.mp4`)
                fs.writeFileSync('./media/database/xeonvideo.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(delb)
                reply(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
            }
                break
            case 'delvideo': {
                if (!isOwner) return XeonStickOwner()
                if (args.length < 1) return reply('Enter the video name')
                if (!VideoXeon.includes(q)) return reply("The name does not exist in the database")
                let wanu = VideoXeon.indexOf(q)
                VideoXeon.splice(wanu, 1)
                fs.writeFileSync('./media/database/xeonvideo.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(`./media/video/${q}.mp4`)
                reply(`Success deleting video ${q}`)
            }
                break
            case 'listvideo': {
                var teks = '┌──⭓「 *Video List* 」\n│\n'
                for (let x of VideoXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoXeon.length}*`
                reply(teks)
            }
                break
            case 'addimage': case 'addimg': {
                if (!isOwner) return XeonStickOwner()
                if (args.length < 1) return reply('Whats the image name?')
                if (ImageXeon.includes(q)) return reply("The name is already in use")
                let delb = await client.downloadAndSaveMediaMessage(quoted)
                ImageXeon.push(q)
                await fsx.copy(delb, `./media/image/${q}.jpg`)
                fs.writeFileSync('./media/database/xeonimage.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(delb)
                reply(`Success Adding Image\nCheck by typing ${prefix}listimage`)
            }
                break
            case 'delimage': {
                if (!isOwner) return XeonStickOwner()
                if (args.length < 1) return reply('Enter the image name')
                if (!ImageXeon.includes(q)) return reply("The name does not exist in the database")
                let wanu = ImageXeon.indexOf(q)
                ImageXeon.splice(wanu, 1)
                fs.writeFileSync('./media/database/xeonimage.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(`./media/image/${q}.jpg`)
                reply(`Success deleting image ${q}`)
            }
                break
            case 'listimage': {
                var teks = '┌──⭓「 *Image List* 」\n│\n'
                for (let x of ImageXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageXeon.length}*`
                reply(teks)
            }
                break
            case 'addmsg': {
                if (!isOwner) return XeonStickOwner()
                if (!m.quoted) return reply('Reply Message You Want To Save In Database')
                if (!text) return reply(`Example : ${prefix + command} filename`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                reply(`Successfully added message in message list as '${text}'

                    Access with ${prefix}getmsg ${text}

                    View list of Messages With ${prefix}listmsg`)
            }
                break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
                client.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
                break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
                var teks = ' DATABASE LIST \n\n'
                for (let i of seplit) {
                    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                reply(teks)
            }
                break
            case 'delmsg': case 'deletemsg': {
                if (!isOwner) return XeonStickOwner()
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
                delete msgs[text.toLowerCase()]
                reply(`Successfully deleted '${text}' from the message list`)
            }
                break
            case 'addvn': {
                if (!isOwner) return XeonStickOwner()
                if (args.length < 1) return reply('Whats the audio name?')
                if (VoiceNoteXeon.includes(q)) return reply("The name is already in use")
                let delb = await client.downloadAndSaveMediaMessage(quoted)
                VoiceNoteXeon.push(q)
                await fsx.copy(delb, `./media/audio/${q}.mp3`)
                fs.writeFileSync('./media/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(delb)
                reply(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
            }
                break
            case 'delvn': {
                if (!isOwner) return XeonStickOwner()
                if (args.length < 1) return reply('Enter the vn name')
                if (!VoiceNoteXeon.includes(q)) return reply("The name does not exist in the database")
                let wanu = VoiceNoteXeon.indexOf(q)
                VoiceNoteXeon.splice(wanu, 1)
                fs.writeFileSync('./media/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(`./media/audio/${q}.mp3`)
                reply(`Success deleting vn ${q}`)
            }
                break
            case 'listvn': {
                var teks = '┌──⭓「 *VN List* 」\n│\n'
                for (let x of VoiceNoteXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteXeon.length}*`
                reply(teks)
            }
                break
            case 'addzip': {
                if (!isOwner) return XeonStickOwner()

                if (args.length < 1) return reply(`What's the zip name?`)
                var teks = `${text}`
                {
                    if (ZipXeon.includes(teks)) return reply("This name is already in use")
                    let delb = await client.downloadAndSaveMediaMessage(quoted)
                    ZipXeon.push(teks)
                    await fsx.copy(delb, `./media/zip/${teks}.zip`)
                    fs.writeFileSync('./media/database/zip.json', JSON.stringify(ZipXeon))
                    fs.unlinkSync(delb)
                    reply(`Success Adding zip\nTo check type ${prefix}listzip`)
                }
            }
                break
            case 'delzip': {
                if (!isOwner) return XeonStickOwner()

                if (args.length < 1) return reply('Enter the text in the zip list')
                var teks = `${text}`
                {
                    if (!ZipXeon.includes(teks)) return reply("This name does not exist in the database")
                    let wanu = ZipXeon.indexOf(teks)
                    ZipXeon.splice(wanu, 1)
                    fs.writeFileSync('./media/database/zip.json', JSON.stringify(ZipXeon))
                    fs.unlinkSync(`./media/zip/${teks}.zip`)
                    reply(`Successfully deleted zip ${teks}`)
                }
            }
                break
            case 'listzip': {

                let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
                for (let x of ZipXeon) {
                    teksooooo += `│⭔ ${x}\n`
                }
                teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
                reply(teksooooo)
            }
                break
            case 'addapk': {
                if (!isOwner) return XeonStickOwner()

                if (args.length < 1) return reply('What is the name of the apk?')
                var teks = `${text}`
                {
                    if (ApkXeon.includes(teks)) return reply("This name is already in use")
                    let delb = await client.downloadAndSaveMediaMessage(quoted)
                    apknye.push(teks)
                    await fsx.copy(delb, `./media/apk/${teks}.apk`)
                    fs.writeFileSync('./media/database/apk.json', JSON.stringify(ApkXeon))
                    fs.unlinkSync(delb)
                    reply(`Successful Adding apk\nTo Check type ${prefix}listapk`)
                }
            }
                break
            case 'delapk': {
                if (!isOwner) return XeonStickOwner()

                if (args.length < 1) return reply('Name of the apk?')
                var teks = `${text}`
                {
                    if (!ApkXeon.includes(teks)) return reply("This name does not exist in the database")
                    let wanu = ApkXeon.indexOf(teks)
                    ApkXeon.splice(wanu, 1)
                    fs.writeFileSync('./media/database/apk.json', JSON.stringify(ApkXeon))
                    fs.unlinkSync(`./media/apk/${teks}.apk`)
                    reply(`Successfully deleted Apk ${teks}`)
                }
            }
                break
            case 'listapk': {

                let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
                for (let x of ApkXeon) {
                    teksoooooo += `│⭔ ${x}\n`
                }
                teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
                reply(teksoooooo)
            }
                break
            case 'addpdf': {
                if (!isOwner) return XeonStickOwner()

                if (args.length < 1) return reply('What is the name of the pdf')
                var teks = `${text}`
                {
                    if (DocXeon.includes(teks)) return reply("This name is already in use")
                    let delb = await client.downloadAndSaveMediaMessage(quoted)
                    DocXeon.push(teks)
                    await fsx.copy(delb, `./media/doc/${teks}.pdf`)
                    fs.writeFileSync('./media/database/doc.json', JSON.stringify(DocXeon))
                    fs.unlinkSync(delb)
                    reply(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
                }
            }
                break
            case 'delpdf': {
                if (!isOwner) return XeonStickOwner()

                if (args.length < 1) return reply('Enter the name')
                var teks = `${text}`
                {
                    if (!DocXeon.includes(teks)) return reply("This name does not exist in the database")
                    let wanu = DocXeon.indexOf(teks)
                    DocXeon.splice(wanu, 1)
                    fs.writeFileSync('./media/database/doc.json', JSON.stringify(DocXeon))
                    fs.unlinkSync(`./media/doc/${teks}.pdf`)
                    reply(`Successfully deleted pdf ${teks}`)
                }
            }
                break
            case 'listpdf': {

                let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
                for (let x of DocXeon) {
                    teksoooo += `│⭔ ${x}\n`
                }
                teksoooo += `│\n└────────────⭓\n\n*Total : ${DocXeon.length}*`
                reply(teksoooo)
            }
                break
            case 'setcmd': {
                if (!m.quoted) return reply('Reply Message!')
                if (!m.quoted.fileSha256) return reply('SHA256 Hash Missing')
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply('You have no permission to change this sticker command')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
                break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply('You have no permission to delete this sticker command')
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
                break
            case 'listcmd': {
                var teks = `
        *List Hash*
        Info: *bold* hash is Locked
        ${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
        `.trim()
                client.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], []) })
            }
                break
            case 'lockcmd': {
                if (!isOwner) return XeonStickOwner()
                if (!m.quoted) return reply('Reply Message!')
                if (!m.quoted.fileSha256) return reply('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply('Hash not found in database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
                break

            //////// GROUP /////////
            case 'antilink': {
                var sections = [
                    {
                        title: `Anti Link Gc On`,
                        id: `${prefix}antilink-> on`
                    },
                    {
                        title: `Anti Link Gc Off`,
                        id: `${prefix}antilink-> off`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Anti Link Gc",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
            }
                break
            case 'antilink->': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!isAdmins && !isOwner) return XeonStickAdmin()
                if (args.length < 1) return reply('on/off?')
                if (args[0] === 'on') {
                    db.data.chats[from].antilinkgc = true
                    reply(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    db.data.chats[from].antilinkgc = false
                    reply(`${command} is disabled`)
                }
            }
                break
            case 'welcome': case 'left': {
                var sections = [
                    {
                        title: `Welcome/Left On`,
                        id: `${prefix}welcome-> on`
                    },
                    {
                        title: `Welcome/Left Gc Off`,
                        id: `${prefix}welcome-> off`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Welcome/Left Gc",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
            }
                break
            case 'welcome->':
            case 'left->': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isOwner) return XeonStickAdmin()
                if (args.length < 1) return reply('on/off?')
                if (args[0] === 'on') {
                    welcome = true
                    reply(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    welcome = false
                    reply(`${command} is disabled`)
                }
            }
                break
            case 'antistiker': case 'antisticker': {
                var sections = [
                    {
                        title: `Anti Sticker On`,
                        id: `${prefix}antistiker-> on`
                    },
                    {
                        title: `Anti Sticker Gc Off`,
                        id: `${prefix}antistiker-> off`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Anti Sticker Gc",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
            }
                break
            case 'antisticker->': case 'antistiker': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!isAdmins && !isOwner) return XeonStickAdmin()
                if (args.length < 1) return reply('on/off?')
                if (args[0] === 'on') {
                    db.data.chats[from].antisticker = true
                    reply(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    db.data.chats[from].antisticker = false
                    reply(`${command} is disabled`)
                }
            }
                break
            case 'antiimage': {
                var sections = [
                    {
                        title: `Anti Image On`,
                        id: `${prefix}antiimage-> on`
                    },
                    {
                        title: `Anti Image Gc Off`,
                        id: `${prefix}antiimage-> off`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Anti Image Gc",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
            }
                break
            case 'antiimage->': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!isAdmins && !isOwner) return XeonStickAdmin()
                if (args.length < 1) return reply('on/off?')
                if (args[0] === 'on') {
                    db.data.chats[from].antiimage = true
                    reply(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    db.data.chats[from].antiimage = false
                    reply(`${command} is disabled`)
                }
            }
                break
            case 'antivideo': {
                var sections = [
                    {
                        title: `Anti Video On`,
                        id: `${prefix}antistiker-> on`
                    },
                    {
                        title: `Anti Video Gc Off`,
                        id: `${prefix}antistiker-> off`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Anti Video",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
            }
                break
            case 'antivideo->': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!isAdmins && !isOwner) return XeonStickAdmin()
                if (args.length < 1) return reply('on/off?')
                if (args[0] === 'on') {
                    db.data.chats[from].antivideo = true
                    reply(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    db.data.chats[from].antivideo = false
                    reply(`${command} is disabled`)
                }
            }
                break
                case 'antiviewonce': {
                    var sections = [
                        {
                            title: `Anti Viewonce On`,
                            id: `${prefix}antiviewonce-> on`
                        },
                        {
                            title: `Anti Bot Gc Off`,
                            id: `${prefix}antiviewonce-> off`
                        }
                    ]
                    const unduh = {
                        title: "Click Here",
                        sections: [
                            {
                                title: "Anti Viewonce",
                                rows: sections,
                            }
                        ]
                    }
                    client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
                }
                    break
                case 'antiviewonce->':{
                    if (!m.isGroup) return XeonStickGroup()
                    if (!isAdmins && !isOwner) return XeonStickAdmin()
                    if (args.length < 1) return reply('on/off?')
                    if (args[0] === 'on') {
                        db.data.chats[from].antiviewonce = true
                        reply(`${command} is enabled`)
                    } else if (args[0] === 'off') {
                        db.data.chats[from].antiviewonce = false
                        reply(`${command} is disabled`)
                    }
                    }
                break
            case 'antibot': {
                var sections = [
                    {
                        title: `Anti Bot On`,
                        id: `${prefix}antibot-> on`
                    },
                    {
                        title: `Anti Bot Gc Off`,
                        id: `${prefix}antibot-> off`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Anti Bot",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
            }
                break
            case 'antibot->': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!isAdmins && !isOwner) return XeonStickAdmin()
                if (args.length < 1) return reply('on/off?')
                if (args[0] === 'on') {
                    db.data.chats[from].antibot = true
                    reply(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    db.data.chats[from].antibot = false
                    reply(`${command} is disabled`)
                }
            }
                break
            case 'antipoll': {
                var sections = [
                    {
                        title: `Anti Polling On`,
                        id: `${prefix}antipoll-> on`
                    },
                    {
                        title: `Anti Polling Off`,
                        id: `${prefix}antipoll-> off`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Anti Polling",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
            }
                break
            case 'antipoll->': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!isAdmins && !isOwner) return XeonStickAdmin()
                if (args.length < 1) return reply('on/off?')
                if (args[0] === 'on') {
                    db.data.chats[from].antipoll = true
                    reply(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    db.data.chats[from].antipoll = false
                    reply(`${command} is disabled`)
                }
            }
                break
            case 'adminevent': {
                var sections = [
                    {
                        title: `Admin Event On`,
                        id: `${prefix}adminevent-> on`
                    },
                    {
                        title: `Admin Event Off`,
                        id: `${prefix}adminevent-> off`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Admin Event",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
            }
                break
                case 'pinterest': case 'pin':{
                if (args.length < 1) return reply(`Mau cari gambar apa?\nExample : ${command} Naruto`)
                    var jumlah;
                    if (q.includes('--')) jumlah = q.split('--')[1]
                    pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
                        if (q.includes('--')) {
                        if (data.length < jumlah) {
                            jumlah = data.length
                            reply(`Hanya ditemukan ${data.length}, foto segera dikirim`)
                        }
                        for (let i = 0; i < jumlah; i++) {
                            client.sendMessage(m.chat, { image: { url: data[i] }})
                        }
                        } else {
                        butimg(m.chat, pickRandom(data.result), `Hai ${pushname}`, m.chat, `Berikut Pencarian Dari : ${q}`, `Powered By Joy`, `Next ▶`, `/pinterest ${q}`)
                        }
                    })
                }
                break
            case 'adminevent->': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!isAdmins && !isOwner) return XeonStickAdmin()
                if (args.length < 1) return reply('on/off?')
                if (args[0] === 'on') {
                    adminevent = true
                    reply(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    adminevent = false
                    reply(`${command} is disabled`)
                }
            }
                break
            case 'groupevent': {
                var sections = [
                    {
                        title: `Group Event On`,
                        id: `${prefix}groupevent-> on`
                    },
                    {
                        title: `Group Event Off`,
                        id: `${prefix}groupevent-> off`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Group Event",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
            }
                break
                case 'inputdata':
                await startSession(m, client);
                break;
                case 'blspsn':
                await startPsn(m, client, q);
                break;

            case 'groupevent->': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isOwner) return XeonStickAdmin()
                if (args.length < 1) return reply('on/off?')
                if (args[0] === 'on') {
                    groupevent = true
                    reply(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    groupevent = false
                    reply(`${command} is disabled`)
                }
            }
                break
            case 'invite': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!text) return reply(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 916909137213`)
                if (text.includes('+')) return reply(`Enter the number together without *+*`)
                if (isNaN(text)) return reply(`Enter only the numbers plus your country code without spaces`)
                let group = m.chat
                let link = 'https://chat.whatsapp.com/' + await client.groupInviteCode(group)
                await client.sendMessage(text + '@s.whatsapp.net', { text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender] })
                reply(` An invite link is sent to the user`)
            }
                break
            case 'closetime':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    client.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isOwner) return reply(mess.admin)
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    client.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'kick':
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await client.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                reply(mess.done)
                break
            case 'idgroup': case 'groupid': {
                if (!isOwner) return XeonStickBotAdmin()
                let getGroups = await client.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
                let anu = groups.map((v) => v.id)
                var teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
                for (let x of anu) {
                    let metadata2 = await client.groupMetadata(x)
                    teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
                }
                reply(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
            }
                break
            case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber': {
                if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
                var inputnumber = text.split(" ")[0]

                reply(`Searching for WhatsApp account in given range...`)
                function countInstances(string, word) {
                    return string.split(word).length - 1
                }
                var number0 = inputnumber.split('x')[0]
                var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
                var random_length = countInstances(inputnumber, 'x')
                var randomxx
                if (random_length == 1) {
                    randomxx = 10
                } else if (random_length == 2) {
                    randomxx = 100
                } else if (random_length == 3) {
                    randomxx = 1000
                }
                var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
                var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
                var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
                for (let i = 0; i < randomxx; i++) {
                    var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                    var status1 = nu[Math.floor(Math.random() * nu.length)]
                    var status2 = nu[Math.floor(Math.random() * nu.length)]
                    var status3 = nu[Math.floor(Math.random() * nu.length)]
                    var dom4 = nu[Math.floor(Math.random() * nu.length)]
                    var random21
                    if (random_length == 1) {
                        random21 = `${status1}`
                    } else if (random_length == 2) {
                        random21 = `${status1}${status2}`
                    } else if (random_length == 3) {
                        random21 = `${status1}${status2}${status3}`
                    } else if (random_length == 4) {
                        random21 = `${status1}${status2}${status3}${dom4}`
                    }
                    var anu = await client.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
                    var anuu = anu.length !== 0 ? anu : false
                    try {
                        try {
                            var anu1 = await client.fetchStatus(anu[0].jid)
                        } catch {
                            var anu1 = '401'
                        }
                        if (anu1 == '401' || anu1.status.length == 0) {
                            nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                        } else {
                            text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                        }
                    } catch {
                        nowhatsapp += `${number0}${i}${number1}\n`
                    }
                }
                reply(`${text66}${nobio}${nowhatsapp}`)
            }
                break
            case 'pin2': {
                if (!text) return reply(`Berikan Link\nExample : ${prefix + command} link`)
                fetchJson(`https://rifza.me/api/pinterest/downloader?link=${q}`).then(data => {
                    client.sendMessage(m.chat, { video: { url: data.videos.V_720P.url } }, { quoted: m })
                })
            }
                break
            case 'video':
            case 'vid': {
                if (!text) return reply(`Berikan Link\nExample : ${prefix + command} Judul`)
                var data = await fetchJson(`https://rifza.me/api/search/pinterest/video?query=${text}`)
                var list_data_row = []
                for (let i of data.pins) {
                    list_data_row.push({
                        title: i.title,
                        description: `Title: ${i.title}`,
                        id: '#pin2 ' + i.link
                    })
                }
                let msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: `「 *VIDEO* 」\nMenampilkan hasil dari pencarian`
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: "JOJOY-BOT"
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                    buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: JSON.stringify({
                                            title: "Video",
                                            sections: [{
                                                title: "Video Search",
                                                highlight_label: "Pilih salah satu yang di inginkan",
                                                rows: list_data_row
                                            }]
                                        })
                                    }]
                                })
                            })
                        }
                    }
                }, {});

                await client.relayMessage(m.chat, msg.message, {
                    messageId: msg.key.id
                });
            }
                break
            case 'dall-e': case 'text2image': case 'texttoimage': case 'text2img': case 'gambar': case 'img': {
                if (!text) return reply(`Text ?\nExample : ${prefix + command} seorang perempuan memakai baju hijau bertuliskan
joy yang memiliki paras cantik`)
                await stikertunggu()
                try {
                    var data = await getBuffer(`https://aemt.me/dalle?text=${text}`)
                    client.sendMessage(m.chat, { image: data, caption: `Sukses` })
                } catch (err) {
                    reply(`Meragukan`)
                }
            }
                break
            case 'getcontact': case 'getcon': {
                if (!m.isGroup) return XeonStickGroup()
                if (!(isGroupAdmins || isOwner)) return XeonStickAdmin()
                xeonbigpp = await client.sendMessage(m.chat, {
                    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
                }, { quoted: m, ephemeralExpiration: 86400 })
                await sleep(1000)
                client.sendContact(m.chat, participants.map(a => a.id), xeonbigpp)
            }
                break
            case 'savecontact': case 'svcontact': {
                if (!m.isGroup) return XeonStickGroup()
                if (!(isGroupAdmins || isOwner)) return XeonStickAdmin()
                let cmiggc = await client.groupMetadata(m.chat)
                let orgiggc = participants.map(a => a.id)
                vcard = ''
                noPort = 0
                for (let a of cmiggc.participants) {
                    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
                }
                let nmfilect = './contacts.vcf'
                reply('\nBe patient bro, saving... ' + cmiggc.participants.length + ' contact')
                require('fs').writeFileSync(nmfilect, vcard.trim())
                await sleep(2000)
                client.sendMessage(m.chat, {
                    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *' + cmiggc.subject + '*\nContact: *' + cmiggc.participants.length + '*'
                }, { ephemeralExpiration: 86400, quoted: m })
                require('fs').unlinkSync(nmfilect)
            }
                break
            case 'sendcontact': case 'sencontact': {
                if (!m.isGroup) return XeonStickGroup()
                if (!m.mentionedJid[0]) return reply('\nUse like this\n Example:.sendcontact @tag|name')
                let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
                let snContact = {
                    displayName: "Contact", contacts: [{ displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + snTak + ";;;\nFN:" + snTak + "\nitem1.TEL;waid=" + m.mentionedJid[0].split('@')[0] + ":" + m.mentionedJid[0].split('@')[0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD" }]
                }
                client.sendMessage(m.chat, { contacts: snContact }, { ephemeralExpiration: 86400 })
            }
                break
            case 'contacttag': case 'contag': {
                if (!m.isGroup) return XeonStickGroup()
                if (!(isGroupAdmins || isOwner)) return XeonStickAdmin()
                if (!m.mentionedJid[0]) return reply('\nUse like this\n Example:.contacttag @tag|name')
                let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
                let sngContact = {
                    displayName: "Contact", contacts: [{ displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + sngTak + ";;;\nFN:" + sngTak + "\nitem1.TEL;waid=" + m.mentionedJid[0].split('@')[0] + ":" + m.mentionedJid[0].split('@')[0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD" }]
                }
                client.sendMessage(m.chat, { contacts: sngContact, mentions: participants.map(a => a.id) }, { ephemeralExpiration: 86400 })
            }
                break
            case 'add':
                if (!m.isGroup) return XeonStickGroup()
                if (!isOwner) return XeonStickOwner()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await client.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                reply(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await client.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                reply(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await client.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                reply(mess.done)
                break
            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!text) return reply('Text ?')
                await client.groupUpdateSubject(m.chat, text)
                reply(mess.done)
                break
            case 'userjid': {
                if (!isOwner) return XeonStickOwner()
                const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => { }) : ""
                const participants = m.isGroup ? await groupMetadata.participants : ""
                let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
                for (let mem of participants) {
                    textt += `${themeemoji} ${mem.id}\n`
                }
                reply(textt)
            }
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!text) return reply('Text ?')
                await client.groupUpdateDescription(m.chat, text)
                reply(mess.done)
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                let mediaa = await quoted.download()
                var { img } = await pepe(mediaa)
                await client.query({
                    tag: 'iq',
                    attrs: {
                        to: m.chat,
                        type: 'set',
                        xmlns: 'w:profile:picture'
                    },
                    content: [
                        {
                            tag: 'picture',
                            attrs: { type: 'image' },
                            content: img
                        }
                    ]
                })
                reply(`Done`)
                break
            case 'tagall':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let me = m.sender
                var teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                    teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                client.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                client.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply media with caption ${prefix + command}`)
                client.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group': case 'grup': {
                var sections = [
                    {
                        title: `Open GC`,
                        id: `${prefix}grup-> open`
                    },
                    {
                        title: `Close GC`,
                        id: `${prefix}grup-> close`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Open/Close GC",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
            }
                break
            case 'group->':
            case 'grup->':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (args[0] === 'close') {
                    await client.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Success Closing Group`))
                } else if (args[0] === 'open') {
                    await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Success Opening Group`))
                } else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
                break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let response = await client.groupInviteCode(m.chat)
                client.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'getbio': {
                try {
                    let who
                    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
                    else who = m.quoted.sender ? m.quoted.sender : m.sender
                    let bio = await client.fetchStatus(who)
                    reply(bio.status)
                } catch {
                    if (text) return reply(`bio is private or you haven't replied to the person's message!`)
                    else try {
                        let who = m.quoted ? m.quoted.sender : m.sender
                        let bio = await client.fetchStatus(who)
                        reply(bio.status)
                    } catch {
                        return reply(`bio is private or you haven't replied to the person's message!`)
                    }
                }
            }
                break
                break
            case 'vote': {
                if (!m.isGroup) return XeonStickGroup()
                if (m.chat in vote) return reply(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
                if (!text) return reply(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
                reply(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
                vote[m.chat] = [q, [], []]
                await sleep(1000)
                upvote = vote[m.chat][1]
                devote = vote[m.chat][2]
                teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`

                var sections = [
                    {
                        title: `Up Vote`,
                        id: `${prefix}upvote`
                    },
                    {
                        title: `Down Vote`,
                        id: `${prefix}downvote`
                    },
                    {
                        title: `Delete Vote`,
                        id: `${prefix}deletevote`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Open/Close GC",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, teks_vote, unduh, "JoSisten", { quoted: m })

            }
                break
            case 'upvote': {
                if (!m.isGroup) return XeonStickGroup()
                if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) return reply('You have Voted')
                vote[m.chat][1].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
                client.sendMessage(m.chat, { text: teks_vote, mentions: menvote }, { quoted: m })
            }
                break
            case 'downvote': {
                if (!m.isGroup) return XeonStickGroup()
                if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) return reply('You have Voted')
                vote[m.chat][2].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
                client.sendMessage(m.chat, { text: teks_vote, mentions: menvote }, { quoted: m })
            }
                break

            case 'checkvote':
                if (!m.isGroup) return XeonStickGroup()
                if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
                teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${client.user.id}
`
                client.sendTextWithMentions(m.chat, teks_vote, m)
                break
            case 'deletevote': case 'delvote': case 'hapusvote': {
                if (!m.isGroup) return XeonStickGroup()
                if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
                delete vote[m.chat]
                reply('Successfully Deleted Vote Session In This Group')
            }
                break
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                await client.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Reset Success`)
                    })
                break
            case 'ping': case 'botstatus': case 'statusbot': case 'test': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                client.relayMessage(m.chat, {
                    requestPaymentMessage: {
                        currencyCodeIso4217: 'INR',
                        amount1000: 999999999,
                        requestFrom: m.sender,
                        noteMessage: {
                            extendedTextMessage: {
                                text: respon,
                                contextInfo: {
                                    externalAdReply: {
                                        showAdAttribution: true
                                    }
                                }
                            }
                        }
                    }
                }, {})
            }

                break
            case 'mulaiabsen': {
                if (!isGroup) return reply('Hanya Di Group')
                const chatId = m.chat;
                const userId = m.sender;


                if (absenData[chatId]) {
                    throw 'Absen sudah dimulai di obrolan ini!';
                }


                absenData[chatId] = {
                    admin: userId,
                    participants: [],
                };


                reply('Absen telah dimulai! Gunakan perintah *.absen* untuk bergabung dalam absen ini.');
            }
                break;


            case 'absen': {
                if (!isGroup) return reply('Hanya Di Group')
                const chatId = m.chat;
                const userId = m.sender;


                if (!absenData[chatId]) {
                    throw 'Tidak ada proses absen yang sedang berlangsung di obrolan ini!';
                }
                absenData[chatId].participants.push(userId);

                reply('Anda telah berhasil bergabung dalam proses absen!');
            }
                break;

            case 'cekabsen': {
                if (!isGroup) return reply('Hanya Di Group')
                const chatId = m.chat;
                if (!absenData[chatId]) {
                    reply('Tidak ada proses absen yang sedang berlangsung di obrolan ini!')
                }


                const participants = absenData[chatId].participants;

                reply(`Daftar peserta absen:\n@${participants.join(', ')}`);
            }
                break;

            case 'hapusabsen': {
                if (!isGroup) return reply('Hanya Di Group')
                const chatId = m.chat;
                if (absenData[chatId] && absenData[chatId].admin === m.sender) {

                    delete absenData[chatId];

                    reply('Proses absen telah dihapus!');
                } else {
                    throw 'Anda tidak memiliki izin untuk menghapus proses absen!';
                }
            }
                break
            //game
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply('You are still in the game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    reply('Partner not found!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        }[v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Wait @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
                    if (room.x !== room.o) await client.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await client.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
                break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        client.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        reply(`Session TicTacToe🎮 tidak ada`)
                    } else mewReply('?')
                } catch (e) {
                    reply('rusak')
                }
            }
                break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Finish your previous suit`)
                if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
                if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply(`The person you are challenging is playing suit with someone else :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play suits

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
                this.suit[id] = {
                    chat: await client.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) client.sendText(m.chat, `_Suit time is up_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
                break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) reply(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                client.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
                break
            case 'q': case 'quoted': {
                if (!m.quoted) return reply('Reply the Message!!')
                let xeonquotx = await client.serializeM(await m.getQuotedObj())
                if (!xeonquotx.quoted) return reply('The message you are replying to is not sent by the bot')
                await xeonquotx.quoted.copyNForward(m.chat, true)
            }

                break
                case 'topuang':{
                    balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                    let top = '*── 「 TOP PALING KAYA 」 ──*\n\n'
                    let arrTop = []
                    var total = 10
                    if (balance.length < 10) total = balance.length
                    for (let i = 0; i < total; i ++){
                        top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                        arrTop.push(balance[i].id)
                    }
                    mentions(top, arrTop, true)
                }
                    break
                    case 'limit':{
                        reply(`Joy tidak menggunakan limit, tapi menggunakan Poin, silahkan ketik /poin untuk melihat poin yang tersedia`)
                    }
                    break
                case 'buypoin':{
                    if (!text) return reply(`Kirim perintah *${prefix}buypoin* jumlah Poin yang ingin dibeli\nContoh : ${prefix + command} 2\n\nHarga 1 Poin = $150 balance`)
                        if (text.includes('-')) return reply(`Jangan menggunakan -`)
                        if (isNaN(text)) return reply(`Harus berupa angka`)
                        if (text.toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                        let ane = parseInt(q) * 150
                        let hasil = ane
                        if (getBalance(sender, balance) < ane) return reply(`Uang kamu tidak mencukupi untuk pembelian ini`)
                        kurangBalance(sender, hasil, balance)
                        giveLimit(sender, parseInt(q), limit)
                        reply(monospace(`Pembeliaan Poin sebanyak ${q} berhasil\n\nSisa Uang : $${getBalance(sender, balance)}\nSisa Poin : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
                }
                    break
                case 'poin': case 'uang':
			case 'cekpoin': case 'cekuang':
			    if (m.mentionedJid.length !== 0){
					var Ystatus = owner[0].includes(m.mentionedJid.length[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(m.mentionedJid.length[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(m.mentionedJid.length[0], limitCount, limit)}`
                    reply(`Poin : ${_prem.checkPremiumUser(m.mentionedJid.length[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nUang : $${getBalance(m.mentionedJid.length[0], balance)}\n\nKamu dapat membeli Poin dengan ${prefix}buypoin`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    reply(`Poin : ${isPremium ? 'Unlimited' : limitPrib}\nUang : $${getBalance(sender, balance)}\n\nKamu dapat membeli Poin dengan ${prefix}buypoin`)
                }
				break
                
                case 'jodoh': case 'cekjodoh': case 'search-jodoh':{
                    if (m.isGroup) return reply(`Hanya bisa digunakan di private message`)
                    var teman2 = pickRandom(xeonverifieduser)
                    client.sendMessage(sender, {text: `Jodoh sedang di senggol\nNantinya jodoh kamu akan merespon kamu kembali.\n,Semoga kamu di terima`})
                    var teks2 = `Hai, Kamu sedang apa?\nPerkenalkan nama aku Joy 😊, merupakan sebuah pengembangan dalam robot whatsapp 😶
, tapi aku pandai bergaul nih sama user aku 🤗, jadi ada yang mau kenalan sama kamu nih 🙄, ada yang mau lebih deket sama kamu 🤐, kira kira kamu mau terima gak? 🤔`
                        var sections = [
                        {
                            title: `Terima`,
                            id: `${prefix}cnfrmtrm ${sender}|${teman2}`
                        },
                        {
                            title: `Tolak`,
                            id: `${prefix}tdtrm ${sender}|${teman2}`
                        }
                    ]
                    const unduh = {
                        title: "Silahkan Dipilih ya!",
                        sections: [
                            {
                                title: "Jodoh",
                                rows: sections,
                            }
                        ]
                    }
                    client.sendListButtonv2(teman2, teks2, unduh, "Powered By JoyBot")

                    }
                    break
                    case 'tdtrm':{
                    var data1 = q.split("|")[0]
                    var data2 = q.split("|")[1]
                    reply(`Kamu Menolak seseorang yang akan menjadi teman kamu\nBtw kak, hati hati loh sama temen dari online, bahaya tauu 😉`)
                    var btn =  [
                            {
                            "name": "quick_reply",
                            "buttonParamsJson": "{\"display_text\":\"Cari Teman Lagi 🕺\",\"id\":\"#jodoh\"}"
                        }
                        ]
                        client.sendButton(data1, `Yah kak, jodoh kamu menolak kamu:(\nTapi gapapa kamu bisa cari jodoh lain`,'Powered By JoyBot', `JODOH`, btn)
                    }
                    break
                    case 'cnfrmtrm':{
                    var data1 = q.split("|")[0]
                    var data2 = q.split("|")[1]
                    var tekssss = `*[ 🎊 HOREEE 🎊 ]*\nKamu diterima oleh jodoh kamu, apa yang skrg mau kamu lakukan?`
                    client.sendMessage(data1, {text: tekssss})
                    var teks2 = `*[ FRIEND ]*\nKamu menerima teman baru kamu, sekarang, kita tinggal tunggu respon dari jodoh kamu*`
                    reply(teks2)
                    var sections = [
                        {
                            title: `Kirim Kontak`,
                            id: `${prefix}kirkonss ${data1}|${data2}|${pushname}`
                        },  
                        {
                            title: `Tak Jadi`,
                            id: `${prefix}tdjd ${data1}|${data2}`
                        }
                    ]
                    const unduh = {
                        title: "Silahkan Dipilih ya!",
                        sections: [
                            {
                                title: "Jodoh",
                                rows: sections,
                            }
                        ]
                    }
                    client.sendListButtonv2(data1, tekssss, unduh, "Powered By JoyBot")
                    }
                    break
                    case 'tdjd':{
                    var data1 = q.split("|")[0]
                    var data2 = q.split("|")[1]
                    client.sendMessage(data1, {text: `Okeeeh, sukses menghapus session.`})
                    client.sendMessage(data2, {text: `Sayang banget, jodoh kamu menghilang, atau sudah tidak peduli sama kamu😞\nMakasih atas waktunya 🤗`})
                    }
                    break
                    case 'kirkonss':{
                    reply(`Joy akan konfirmasi dulu ke jodoh kamu ya!.`)
                    var data1 = q.split("|")[0]
                    var data2 = q.split("|")[1]
                    var data3 = q.split("|")[2]
                    var tekssss = `Hai kak, ini teman kamu minta kamu kirim nomor kontak kamu, kira kira dibolehin gak nih?🤔`
                    var sections = [
                        {
                            title: `Kirim aja`,
                            id: `${prefix}kirimverified ${data1}|${data2}|${data3}`
                        },
                        {
                            title: `Gausah, Makasih`,
                            id: `${prefix}tolakkirkon ${data1}|${data2}`
                        }
                    ]
                    const unduh = {
                        title: "Silahkan Dipilih ya!",
                        sections: [
                            {
                                title: "Jodoh",
                                rows: sections,
                            }
                        ]
                    }
                    client.sendListButtonv2(data2, tekssss, unduh, "Powered By JoyBot")
                    }
                    break
                    case 'kirimverified':{
                    reply(`Aku sudah mengirim kontaknya.\nSemoga kalian menjadi teman/jodoh yang baik:)`)
                    var data1 = q.split("|")[0]
                    var data2 = q.split("|")[1]
                    var data3 = q.split("|")[2]
                    sendContact(data1, data2.split("@")[0], data3)
                    client.sendMessage(data1, {text: `Nah ini kontaknya kak ${pushname}`})
                    }
                    break
                    case 'tolakkirkon':{
                    var data1 = q.split("|")[0]
                    var data2 = q.split("|")[1]
                    var data3 = q.split("|")[2]
                    client.sendMessage(data1, {text: `Maaf teman kamu menolak buat kirim kontak.`})
                    }
                    break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} *Has Gone AFK*${text ? ': ' + text : ''}`)
            }
                break
                case 'getpp': case 'getpic':{
                    var link = await client.profilePictureUrl(quoted.sender, "image")
                    client.sendMessage(m.chat, {image: {url: link}, caption: "Foto Dari : " + quoted.sender.split("@")[0]})
                }
                break
            case 'lirik':
            case 'lyrics':
            case 'lagu': {
                if (!text) return reply(`Example : ${prefix + command} story wa anime`)
                await stikertunggu()
            var data = await fetchJson(`https://api-faa.my.id/faa/lyrics?q=${text}`)
            var teks = `[ LIRIK LAGU ]\n\nJudul: ${data.result.title}\nAlbum: ${data.result.album}\n\n` + monospace(data.result.lyrics)

            }
                break
            
            case 'remini': case 'tohd': {
                if (!/image/.test(mime)) return reply(`Send/Reply Gambar that you want to make into audio with captions ${prefix + command}`)
                await stikertunggu()
                let media = await client.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    if (db.data.users[sender].limit < 1) return reply(mess.limit)
                    var anu = await UploadFileUgu(media)
                    var data = await fetchJson(`https://api-faa.my.id/faa/hdv2?url=${anu.url}`)
                    client.sendMessage(m.chat, { image: { url: data.url }, caption: `Sukses` }, { quoted: m })
                }
            }
            case 'igstalk': {
                if (!q) return reply(`📌Example: ${prefix + command} arsrfii\NOTED : Tidak Menggunakan "@"`)
                if (!q === "@") return reply(`Gausah Pake "@"`)
                var data = await fetchJson(`https://aemt.me/download/igstalk?username=${q}`)
                var tekss = `*[ INSTAGRAM STALKER ]*\n\nUsername : ${data.result.username}\nFull Name : ${data.result.fullname}\nBio : ${data.result.bio}\nFollowers : ${data.result.followers}\nFollowing : ${data.result.following}\nPostingan Akun : ${data.result.postsCount}\n\n_Follow ig owner : @arsrfii_`
                client.sendMessage(m.chat, { image: { url: data.result.photoUrl }, caption: tekss }, { quoted: m })
            }
                break
            case 'ephemeral': case 'timerpesan': {
                var sections = [
                    {
                        title: `Timer Pesan Gc On`,
                        id: `${prefix}ephemeral-> on`
                    },
                    {
                        title: `Timer Pesan Gc Off`,
                        id: `${prefix}ephemeral-> off`
                    }
                ]
                const unduh = {
                    title: "Click Here",
                    sections: [
                        {
                            title: "Timer Pesan GC",
                            rows: sections,
                        }
                    ]
                }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", { quoted: m })
            }
                break
            case 'ephemeral->': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return stikertunggu()
                if (!isAdmins) return XeonStickAdmin()
                if (!text) return reply('Enter the value enable/disable')
                if (args[0] === 'on') {
                    await client.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await reply(`Done`)
                } else if (args[0] === 'off') {
                    await client.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await reply(`Done`)
                }
            }
                break
            case 'delete': case 'del': case 'd': {
                let key = {}
                try {
                    key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
                    key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
                    key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
                    key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
                } catch (e) {
                    console.error(e)
                }
                client.sendMessage(m.chat, { delete: key })
            }
                break
                case 'tt':
                    case 'tiktok': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!text) {
                            return reply(`Masukkan linknya\nContoh: /${command} https://vt.tiktok.com/ZSYc8J7ua/`);
                        }
                        var data = await fetchJson(`https://api-faa.my.id/faa/tiktok?url=${text}`)
                        var caption = `[ TIKTOK ]\n\nJudul: ${data.result.title}\nDi Upload: ${data.result.taken_at}\nDurasi: ${data.result.duration}`
                        if (data.result.type == "video") {
                            client.sendMessage(m.chat, {video: {url: data.result.data}, caption: caption}, {quoted: m})
                        } else if (data.result.type == "image") {
                                    for (let i of data.result.data) {
                                    client.sendMessage(m.chat, {image: {url: i}})
                                }
                        }
                            limitAdd(sender, limit)
                        break;
                    }
                    

            case 'ttmp3': case 'tiktokmp3': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    await stikertunggu()
                try {
                    tiktok(q).then ( data => {
                        var id = data.result.id
                        client.sendMessage(m.chat, {audio: {url: `https://www.tikwm.com/video/media/play/${id}.mp4`}})
                    })
                } catch (e) {
                    reply(`Eror kak, Coba pakai server 2 ketik ${prefix}tiktok2 ${q} `)
                }
                limitAdd(sender, limit)
            }
                break
            case 'spotify': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (args.length == 0) return m.reply(`Untuk mencari lagu dari spotify, gunakan ${prefix}spotify judul lagu`)
                await stikertunggu()
                const spos2 = async (query) => {
                    var searchthis = await spotsearch.search({ q: query, type: 'track', limit: 1 })
                    var datpot = searchthis.tracks.items[0]
                    artis = []
                    datpot.artists.map(s => {
                        artis.push({
                            name: s.name
                        })
                    })
                    return {
                        title: datpot.name,
                        artists: artis,
                        releaseDate: datpot.album.release_date,
                        popularity: datpot.popularity,
                        thumb: datpot.album.images[0].url,
                        url: datpot.external_urls.spotify
                    }
                }
                try {
                    spos2(q)
                        .then(async res => {
                            if (res.artists.length == 2) {
                                var hasil2 = `${res.artists[0].name}, ${res.artists[1].name}`
                            } else {
                                var hasil2 = res.artists[0].name
                            }
                            var namaFile = "spotify"
                            await client.sendMessage(m.chat, { image: { url: res.thumb }, caption: `「 *SPOTIFY* 」\n\n*• Title:* ${res.title}\n*• Artists:* ${hasil2}\n*• Release Date:* ${res.releaseDate}\n*• Popularity:* ${res.popularity}\n*• Url:* ${res.url}\n\n_sending Audio..._` }, { quoted: m })
                            const _data = await apiku.spotifydl(res.url)
                            await client.sendMessage(m.chat, { document: { url: _data.result }, mimetype: "audio/mp3", fileName: res.title + `.mp3` }, { quoted: m })
                        })
                } catch (error) {
                    console.error('Error:', error);
                    m.reply("Identifikasi Gagal, Harap menggunakan foto yang teridentifikasi wajah.");
                }
                limitAdd(sender, limit)
            }
                break
            case 'play': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!text) return reply(`You need to give the URL`)
                reply(`Tunggu sebentar yah kak!\nSedang Joy Proses nih!`)
                var cariyutup = await yts(q)
                var urln = cariyutup.all[0].url
                const judul = cariyutup.all[0].title
                var thumbnailnya = cariyutup.all[0].image
                var desc = cariyutup.all[0].description
                var randomku = otpkode(5)
                var capts = `*[ PLAY YOUTUBE ]*\n\nJudul : ${judul}\nLink : ${urln}\nDeskripsi : ${desc}`
                client.sendMessage(m.chat, {image: {url: thumbnailnya}, caption:capts})
                try {
                    var data_url = await fetchJson(`https://api-faa.my.id/faa/ytmp3?url=${urln}`)
                    client.sendMessage(m.chat, {audio: {url: data_url.result.mp3}, mimetype: 'audio/mp4'}, {quoted: m})
                } catch (e) {
                    console.error(e);
                    m.reply("Terjadi kesalahan saat mencari di YouTube.");
                }
                limitAdd(sender, limit)
            }
                break;
                case 'iqc':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    await stikertunggu()
                var data = await getBuffer(`https://api-faa.my.id/faa/iqcv2?prompt=${text}&jam=${jam}&batre=100`)
                client.sendMessage(m.chat, {image: data, caption: `Anjay`}, {quoted: m})
                break
                }
            case 'brat': case 'ttp':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (m.isGroup) return reply(`Fitur ${command} Hanya Bisa Di Gunakan di Private Message`)
                        if (!q) return reply(`*<!> Example:* ${command} aku gantenk`)
                    var urls = await getBuffer(`https://api-faa.my.id/faa/brat?text=${text}`)
                    client.sendImageAsSticker(m.chat, urls, m, { packname: global.packname, author: pushname })
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    limitAdd(sender, limit)
            }
                break
            case 'jadibot': {
                if (!text) return reply('*<!> Example:* .jadibot 628xxx')
                if (!isOwner) return XeonStickOwner()
                await jadibot(client, text, fkontak, from)
                let loli = '`'
                await sleep(4500)
                reply(`*Masukkan code dibawah ini untuk jadi bot sementara*\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomor telepon saja\n5. Masukkan code di bawah ini\n\nNote: code dapat expired kapan saja!\n\nCode: ${loli}${global.codepairing}${loli}\nJika Code Error Silahkan Hapus  Folder Jadibot`);

            }
                break
            case 'stopjadibot':
                if (!isOwner) return XeonStickOwner()
                reply("apus manual bg bot kurang canggih :v")
                break
            case 'listjadibot':
                if (!isOwner) return XeonStickOwner()
                try {
                    let user = [... new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])]
                    te = "*List Jadibot*\n\n"
                    for (let i of user) {
                        y = await client.decodeJid(i.id)
                        te += " • User : @" + y.split("@")[0] + "\n"
                        te += " • Name : " + i.name + "\n\n"
                    }
                    client.sendMessage(from, { text: te, mentions: [y], }, { quoted: m })
                } catch (err) {
                    reply(`Belum Ada User Yang Jadibot`)
                }
                break
                case 'instagram':
case 'igvideo':
case 'ig':
case 'igimage':
case 'igvid':
case 'igimg':
case 'igdl': {
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
        if (!text) {
    return reply(`Anda perlu memberikan URL dari video, postingan, reel, atau gambar Instagram`);
}  
const { key } = await m.reply('```Tunggu sebentar...```');    
const data = await saveInsta(text);
if (!data || !data.data || !Array.isArray(data.data)) {
    return reply('Terjadi kesalahan dalam mendapatkan data dari Instagram');
}
for (let i = 0; i < data.data.length; i++) {
    const item = data.data[i];
    try {
        if (item.type === 'video') {
            await client.sendMessage(m.chat, { video: { url: item.url }, caption: `Sukses Download Video ${i + 1}.` }, { quoted: m });
        } else if (item.type === 'image') {
            await client.sendMessage(m.chat, { image: { url: item.url } }, { quoted: m });
        } else {
            m.reply(`Tipe media tidak dikenali: ${item.type}`);
        }
    } catch (error) {
        m.reply('Terjadi kesalahan saat mengirim media:' + error.message);
    }
}
limitAdd(sender, limit)
}
break;
                    /*
                    case 'instagram': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': case 'igdl':{
                        if (!text) return reply(`You need to give the URL of Any Instagram video, post, reel, image`)
                    let res
                        await stikertunggu()
                    try {
                    res = await fetch(`h
                    s://www.guruapi.tech/api/igdlv1?url=${text}`)
                    } catch (error) {
                    return reply(`An error occurred: ${error.message}`)
                    }
                    let api_response = await res.json()
                    if (!api_response || !api_response.data) {
                    return reply(`No video or image found or Invalid response from API.`)
                    }
                    const mediaArray = api_response.data;
                    for (const mediaData of mediaArray) {
                    const mediaType = mediaData.type
                    const mediaURL = mediaData.url_download
                    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
                    if (mediaType === 'video') {
                        client.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})
                    } else if (mediaType === 'image') {
                        client.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})
                    }
                    }
                }
                break*/
                    case 'report': case 'lapor':{
                        var cpap = `*[ LAPOR BANG ]*\n\nKiriman dari : @${sender.split("@")[0]}\nPesan : ${text}`
                        if (!text) return reply(`Reply Pesan nya, contoh:\n${prefix + command} Fitur play bermasalah`)
                            var sections = [
                                {
                                    title: `Respon pesan di tanggapi`,
                                    id: `${prefix}rspn ${m.chat}|${sender}`
                                },
                                {
                                    title: `Respon pesan tidak di tanggapi`,
                                    id: `${prefix}tdkrspn ${m.chat}|${sender}`
                                },
                                {
                                    title: `Blokir Pengirim`,
                                    id: `${prefix}bloksrsp ${m.chat}|${sender}`
                                },
                                {
                                    title: `Beri notifikasi spam pengirim`,
                                    id: `${prefix}notifspam ${m.chat}|${sender}`
                                }
                            ]
                            const unduh = {
                                title: "Click Here",
                                sections: [
                                    {
                                        title: "LAPOR PAK",
                                        rows: sections,
                                    }
                                ]
                            }
                            client.sendListButtonv2(ownernumber + `@s.whatsapp.net`, cpap, unduh, "Joy", { quoted: m })
                            reply(`Laporan berhasil terkirim\nLaporan : ${text}\nPengirim : ${sender.split("@")[0]}`)
                        }
                        break
                        case 'rspn':{
                        var data1 = q.split("|")[0]
                        var data2 = q.split("|")[1]
                            reply(`Sukses memberikan notifikasi *berhasil di konfirmasi*`)
                            client.sendMessage(data1, {text: `Hai @${data2.split("@")[0]}\nLaporan kamu berhasil\nditanggapi oleh owner.\nTerimakasi ☺`, mentions: [data2]})
                        }
                        break
                        case 'notifspam':{
                        var data1 = q.split("|")[0]
                        var data2 = q.split("|")[1]
                            reply(`Mohon untuk tidak spam.`)
                            client.sendMessage(data1, {text: `Hallo @${data2.split("@")[0]}, mohon untuk jangan spam penggunaan fitur report.`, mentions: [data2]})
                        }
                        break
                        case 'tdkrspn':{
                        var data1 = q.split("|")[0]
                        var data2 = q.split("|")[1]
                            reply(`Laporan tidak di respon.`)
                            client.sendMessage(data1, {text: `Laporan dari @${data2.split("@")[0]} tidak ditanggapi.`, mentions: [data2]})
                        }
                        break
                        case 'bloksrsp': {
                        var data1 = q.split("|")[0]
                        var data2 = q.split("|")[1]
                            await client.updateBlockStatus(data2, 'block')
                            await reply(`Sukses Memblokir`)
                            client.sendMessage(data1, {text: `Hai @${data2.split("@")[0]}, Kamu telah di blokir oleh owner.`, mentions: [data2]})
                        }
                        break
                        case 'unblock': case 'unban': {
                            if (!isOwner) return XeonStickOwner()
                            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                            await client.updateBlockStatus(users, 'unblock')
                            await reply(`Membuka blokir`)
                        }
                        break
                        case 'mediafiredl':{
                        if (!text) return reply(`Example : ${prefix + command} Linknya`)
                        if (!q.includes('yout')) return reply(`Link Tidak Valid, Berikan Link Yang sesuai dengan command`)
                        await stikertunggu()
                        var data = await fetchJson(`https://api-faa.my.id/faa/mediafire?url=${text}`)
                        client.sendMessage(m.chat, {
                            document: {url: data.result.download_url},
                            fileName: data.result.filename,
                            mimetype: data.result.mime,
                            caption: `*[ MEDIAFIRE DOWNLOAD ]*\nNama File : ${data.fileName}\nSize : ${data.size}*`
                        }, {quoted: m})

                        }
                        break
            case 'yts': case 'ytsearch': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!text) return reply(`Example : ${prefix + command} story wa anime`)
                await stikertunggu()
                let yts = require("yt-search")
                let search = await yts(text)
                var teks = 'YouTube Search\n\n Result From ' + text + '\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                limitAdd(sender, limit)
                client.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
            }
                break
                case 'ytmp3':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    try {
                        if (!text) return reply(`Example : ${prefix + command} https://youtu.be/S0Kez6MERGE?si=lWq3zU6Df9Sl5L1q`)
                            if (!q.includes('yout')) return reply(`Link Tidak Valid, Berikan Link Yang sesuai dengan command`)
                                reply(`Tunggu Sebentar yah kak!\nSedang Joy Proses`)
                            var data = await fetchJson(`https://api-faa.my.id/faa/ytmp3?url=${q}`)
                            client.sendMessage(m.chat, {document: {url: data.result.mp3}, fileName: data.result.title + `.mp3`, mimetype: "audio/mp3"}, {quoted: m})
                        } catch (e) {
                            reply(`Audio Tidak Ditemukan.`)
                        }
                        limitAdd(sender, limit)
                        }
                    break
            case 'ytmp4': case 'ytvideo': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    try {
                    if (!text) return reply(`Example : ${prefix + command} https://youtu.be/S0Kez6MERGE?si=lWq3zU6Df9Sl5L1q`)
                        if (!q.includes('yout')) return reply(`Link Tidak Valid, Berikan Link Yang sesuai dengan command`)
                            reply(`Tunggu Sebentar yah kak!\nSedang Joy Proses`)
                        var data = await fetchJson(`https://api-faa.my.id/faa/ytmp4?url=${q}`)
                        client.sendMessage(m.chat, {video: {url: data.result.download_url}, caption: `Sukses.`}, {quoted: m})
                    } catch (e) {
                        reply(`Video Tidak Ditemukan.`)
                    }
                    limitAdd(sender, limit)
                    }
                break
            case 'git': case 'gitclone':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                    if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                client.sendMessage(m.chat, { document: { url: url }, fileName: filename + '.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
                    limitAdd(sender, limit)
                    break
            /// OWNER

            case 'buyprem': {
    // Data Pakasir yang kamu berikan
    const pakasir = {
        slug: 'acamedia',
        apikey: 'ZU0JBrZtUZSqI8nAqz73zbtgJFtj0tY5',
        expired: 30 // menit
    };

    let who = m.sender.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let harganya = 2000;

    // Pastikan database user ada
    if (!global.db.data.users[who]) {
        global.db.data.users[who] = {
            name: pushname || 'Unknown',
            limit: 10,
            exp: 0,
            level: 0,
            register: false,
            premium: false,
            premiumTime: 0
        };
    }
    let user = global.db.data.users[who];

    // Validasi nominal
    if (harganya < 1000) return reply('Minimal 1.000 ya.');
    
    try {
        // 1. Buat QRIS
        const cqris = await createQris(pakasir.slug, pakasir.apikey, harganya);
        
        // 2. Atur Waktu Expired
        const expiredAt = new Date(cqris.expired_at);
        expiredAt.setHours(expiredAt.getHours() - 1);
        expiredAt.setMinutes(expiredAt.getMinutes() + pakasir.expired);
        
        const expiredTime = expiredAt.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Jakarta',
        });

        let total = cqris.total_payment + cqris.fee;
        let caption = `💳 *QRIS PREMIUM ACAMEDIA*\n\n` +
                      `🕓 *Expired:* ${expiredTime} WIB (${pakasir.expired} Menit)\n` +
                      `💸 *Biaya Admin:* Rp${cqris.fee.toLocaleString('id-ID')}\n` +
                      `💰 *Total Bayar:* *Rp${total.toLocaleString('id-ID')}*\n` +
                      `📦 *Order ID:* #${cqris.order_id}\n\n` +
                      `_Silahkan scan QR di atas. Status akan otomatis aktif setelah pembayaran terverifikasi._`;

        // 3. Kirim QRIS ke User
        const sQris = await client.sendMessage(m.chat, {
            image: { url: `https://api-faa.my.id/faa/qr-create?text=${encodeURIComponent(cqris.payment_number)}` },
            caption: caption
        }, { quoted: m });

        // 4. Loop Cek Status (Polling)
        let terbayar = false;
        while (!terbayar) {
            // Cek jika sudah lewat waktu expired
            if (new Date() >= expiredAt) {
                await client.sendMessage(m.chat, { delete: sQris.key });
                return reply('⚠️ Waktu pembayaran habis (Expired). Silakan pesan ulang.');
            }

            const res = await checkStatus(pakasir.slug, pakasir.apikey, cqris.order_id, harganya);
            
            if (res && res.status === 'completed') {
                terbayar = true;
                await client.sendMessage(m.chat, { delete: sQris.key });
                
                // Update User
                addPremiumUser(sender, "30d", premium)
                
                await reply('✅ *PEMBAYARAN BERHASIL!*\n\nTerima kasih, status Premium kamu sekarang sudah aktif. Ketik /limit untuk cek.');
                break;
            }

            // Delay 5 detik agar tidak spam API
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    } catch (e) {
        console.error(e);
        reply('❌ Gagal menghubungi server Pakasir. Coba lagi nanti.');
    }
}
break;



            case 'donasi': case 'donate': {
                var sewa = `*[ DONASI ]*
    Donasi
    1. Spay : 0882-1329-2687
    2. Gopay : 0882-1329-2687
    3. Dana : 0882-1329-2687

    Setelah melakukan donasi dari jojo, mohon konfirmasi melalui kontak di bawah ini:
    Email: arasyarafi02@gmail.com
    Whatsapp: 0882-1477-2441
    Link : https://wa.me/6288214772441`
                reply(sewa)
            }
                break
            case 'sewa': case 'sewabot': {
                var sewa = `Premium Bot

Price List Jojo :
1 Minggu : -
1 Bulan : Rp. 10.000
Permanent : Rp. 20.000


Silakan lakukan pembayaran melalui metode berikut:
1. Spay : 0882-1329-2687
2. Gopay : 0882-1329-2687
3. Dana : 0882-1329-2687

Setelah melakukan pembayaran, mohon konfirmasi melalui kontak di bawah ini:
Email: arasyarafi02@gmail.com
Whatsapp: 0882-1477-2441
Link : https://wa.me/6288214772441

Terima kasih telah menggunakan layanan Sewa Bot!`
                reply(sewa)
            }
                break
            /// OWNERRRRR 
            case 'bc':
            case 'broadcast': {
                if (!isOwner) return XeonStickOwner()
                let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`
                for (let i of Object.keys(global.db.data.users)) {
                    await sleep(1500)
                    if (/image/.test(mime)) {
                        var media = await quoted.download()
                        await client.sendMessage(i, {
                            image: media,
                            caption: teksnya
                        })
                    } else if (/video/.test(mime)) {
                        var media = await quoted.download()
                        await client.sendMessage(i, {
                            video: media,
                            caption: teksnya
                        })
                    } else if (/audio/.test(mime)) {
                        var media = await quoted.download()
                        await client.sendMessage(i, {
                            audio: media,
                            ptt: true,
                            mimetype: `audio/mp4`
                        })
                    } else if (text) {
                        await client.sendMessage(i, {
                            text: teksnya
                        })
                    }
                }
                reply(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
                break
            case 'addprem':
                if (!isOwner) return XeonStickOwner()
                if (args.length < 2)
                    return reply(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    reply("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    reply("Premium Success")
                }
                break
            case 'delprem':
                if (!isOwner) return XeonStickOwner()
                if (args.length < 1) return reply(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 916909137213`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    }
                    reply("Delete Success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    reply("Delete Success")
                }
                break
            case 'listprem': {
                if (!isOwner) return XeonStickOwner()
                let data = require('./src/data/role/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                    client.sendMessage(m.chat, {
                        text: txt,
                        mentions: x
                    }, {
                        quoted: m
                    })
                }
            }
                break
            case 'block': case 'ban': {
                if (!isOwner) return XeonStickOwner()
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await client.updateBlockStatus(users, 'block')
                await reply(`Done`)
            }
                break
            case 'unblock': case 'unban': {
                if (!isOwner) return XeonStickOwner()
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await client.updateBlockStatus(users, 'unblock')
                await reply(`Done`)
            }
                break

            case 'bcgc':
            case 'bcgroup': {
                if (!isOwner) return XeonStickOwner()
                if (!quoted) return reply(`Reply Gambar/Video/Audio`)
                let getGroups = await client.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    if (/image/.test(mime)) {
                        var media = await quoted.download()
                        await client.sendMessage(i, {
                            image: media,
                            caption: quoted.text
                        })
                    } else if (/video/.test(mime)) {
                        var media = await quoted.download()
                        await client.sendMessage(i, {
                            video: media,
                            caption: quoted.text
                        })
                    } else if (/audio/.test(mime)) {
                        var media = await quoted.download()
                        await client.sendMessage(i, {
                            audio: media,
                            ptt: true,
                            mimetype: `audio/mp4`
                        })
                    } else if (text) {
                        await client.sendMessage(i, {
                            text: quoted.text
                        })
                    }
                    reply(`Successful in sending Broadcast To ${anu.length} Group`)
                }
            }
                break
            case 'getcase':
                if (!isOwner) return XeonStickOwner()
                try {
                    const getCase = (cases) => {
                        return "case" + `'${cases}'` + fs.readFileSync("sya.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                    }
                    reply(`${getCase(q)}`)
                } catch {
                    reply(`case ${q} not found!`)
                }
                break
            case 'addowner':
                if (!isOwner) return XeonStickOwner()
                if (!args[0]) return reply(`Use ${prefix + command} number\nExample ${prefix + command} ${ownernumber}`)
                bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
                let ceknye = await client.onWhatsApp(bnnd)
                if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
                owner.push(bnnd)
                fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
                reply(`Number ${bnnd} Has Become An Owner!!!`)
                break
            case 'delowner':
                if (!isOwner) return XeonStickOwner()
                if (!args[0]) return reply(`Use ${prefix + command} nomor\nExample ${prefix + command} 916909137213`)
                ya = q.split("|")[0].replace(/[^0-9]/g, '')
                unp = owner.indexOf(ya)
                owner.splice(unp, 1)
                fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
                reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
                break
            case 'listowner': {
                var teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                reply(teks)
            }
                break
            case 'delsession':
            case 'clearsession': {
                if (!isOwner) return XeonStickOwner()
                fs.readdir("./session", async function (err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    var teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function (e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Deleting junk files...")
                    await filteredArray.forEach(function (file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
                break
            case 'join':
                try {
                    if (!isOwner) return XeonStickOwner()
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    client.groupAcceptInvite(result)
                    await reply(`Done`)
                } catch {
                    reply('Failed to join the Group')
                }
                break
            case 'getsession':
                if (!isOwner) return XeonStickOwner()
                reply('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                client.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'setpp': case 'setppbot': {
                if (!isOwner) return XeonStickOwner()
                await stikertunggu()
                if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let mediaa = await quoted.download()
                var { img } = await pepe(mediaa)
                await client.query({
                    tag: 'iq',
                    attrs: {
                        to: botNumber,
                        type: 'set',
                        xmlns: 'w:profile:picture'
                    },
                    content: [
                        {
                            tag: 'picture',
                            attrs: { type: 'image' },
                            content: img
                        }
                    ]
                })
                reply(`Done`)
            }
                break
               case 'create-token':{
                var tokrand = `${otpkode(2)}JOY-${otpkode(5)}`;
                var textnya2 = `*[ TOKEN POIN ]*\n\nToken : *${tokrand}*\n\nMasukan Token Ini Dinomor Bot\nDengan Cara Ketik\n${prefix}token ${tokrand}\n\n*NOTE :* *_TOKEN INI HANYA BISA DIGUNAKAN 20 KALI_*`;
                for (let i = 0; i < 20; i++) {
                    token.push(tokrand);
                }
                fs.writeFileSync('./src/token.json', JSON.stringify(token));
                reply(textnya2);
                // Tunggu sebentar
                await sleep(1000);
                
                                    }
                                    break
                                    case 'token':{
                                        let balen = 1000
                                        let poin = 25
                                        if (getBalance(sender, balance) > balen) return reply(`Uang kamu sudah banyak.\nKetik /uang untuk melihat uang kamu`)
                                        if (getLimit(sender, limitCount, limit) > poin) return reply(`Poin kamu sudah maksimal.\nKetik /poin untuk melihat poin kamu`)
                                        if (!q) return reply(`Masukan Token nya!\nExample : ${prefix + command} T0K3N`)
                                        if (isToken) {
                                        await sleep(2000)
                                        let hapustoken = token.indexOf(m.chat)
                                        token.splice(hapustoken, 1)
                                        addBalance(sender, parseInt(1000), balance)
                                        fs.writeFileSync('./src/token.json', JSON.stringify(token))
                                        reply(`Kamu mendapatkan uang sebanyak $1000.`)
                                        } else {
                                            reply(`Token Tidak Aktif.`)
                                        }
                                    }
                                    break
            default:
                
                if (budy.startsWith('=>')) {
                    if (!isOwner) return XeonStickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isOwner) return XeonStickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isOwner) return XeonStickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    client.copyNForward(m.chat, msgs[budy.toLowerCase()], true, { quoted: m })
                }
                // Handle responses for sessions
        if (global.sessions && global.sessions[m.sender] && global.sessions[m.sender].callback) {
            await global.sessions[m.sender].callback(m);
        }

        }

    } catch (err) {

        console.log(util.format(err))


        if (e.includes("conflict")) return
        if (e.includes("not-authorized")) return
        if (e.includes("already-exists")) return
        if (e.includes("rate-overlimit")) return
        if (e.includes("Connection Closed")) return
        if (e.includes("Timed Out")) return
        if (e.includes("Value not found")) return
        if (e.includes("Socket connection timeout")) return
    }
}
