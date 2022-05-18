//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['201032199513']
global.premium = ['201032199513']
global.ownernomer = '201032199513'
global.ownername = '𝙺𝙸 𝚂𝙰𝙼𝙰 •_•'
global.botname = '𝐊𝐎𝐌𝐈 𝐁𝐎𝐓'
global.footer = '3𝐌𝐊 𝐊𝐈 .'
global.ig = 'wa.me/201032199513'
global.region = 'India, NorthEast, Mizoram'
global.sc = ''
global.myweb = ''
global.packname = '𝚔𝚘𝚖𝚒 𝙱𝚘𝚝'
global.author = '𝙺𝚒 𝚂𝚊𝚖𝚊'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '☘︎'
global.mess = {
    success: 'Done ✓',
    admin: 'هذا الامر للادمن فقط 🤾‍♂️',
    botAdmin: 'لتنفيذ الامر اجعل البوت ادمن 🤓',
    owner: '🤺🤍هذا الامر خاص ب كي ساما',
    group: 'هذا الامر يستخدم في الجروبات فقط يا عزيزي 🌝',
    private: 'الامر في الخاص فقط 🏋‍♀️',
    bot: 'الامر مصنوع لي فقط 👍',
    wait: 'استني يعم شويه كدا ...',
    error: 'في خطأ يمكن من برمجة بوت يمكن 🤔!',
    endLimit: 'نقاطك خلصت جرب بكرا 🦦',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
