const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_20_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgMTk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICA1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM4LFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDY4LFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1cENaWlhjVXpoY2FUMVl6SkJTY05PblpCdDhaNFljWFpsa2RLdWlLV0pnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwSldXTnVBUFN5NkIwRk9yOW5vN2pnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBjMGEzNTE4LTdmNjUtNDcyNS1hZWRlLWIwZDJmMDdiODllMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDYzLFxuICAgICAgNTEsXG4gICAgICAyMjIsXG4gICAgICA2OSxcbiAgICAgIDIwOSxcbiAgICAgIDM4LFxuICAgICAgMjM5LFxuICAgICAgNjgsXG4gICAgICAyMzgsXG4gICAgICAxMyxcbiAgICAgIDE5NixcbiAgICAgIDI0MixcbiAgICAgIDI3LFxuICAgICAgMTIxLFxuICAgICAgMTg4LFxuICAgICAgMjAyLFxuICAgICAgMjcsXG4gICAgICA3MCxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDIzMyxcbiAgICAgIDEyNyxcbiAgICAgIDEyOCxcbiAgICAgIDE5NyxcbiAgICAgIDEsXG4gICAgICAyMjksXG4gICAgICAyMzksXG4gICAgICAyMjksXG4gICAgICAyMDcsXG4gICAgICAxOTcsXG4gICAgICA0NSxcbiAgICAgIDUxLFxuICAgICAgMTMsXG4gICAgICA0MCxcbiAgICAgIDIzLFxuICAgICAgMjE5LFxuICAgICAgMTc3LFxuICAgICAgMjI1LFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc3NVdGWUtDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTIzNTk3MDA4OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTkzNzI2ODM4ODI3NDU6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVRxMFlNQkVKdXYrN29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtR0tjZ3RzU3U2eGM5dnBnb3R4NzJlWndsMjY5L3FoOWV5UTlPSEo4L1M0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInU3ajN5R0Z3TlFHeGpVcFhzUVpSclRGdUZpY3RNNHpzNE5VN2NURlFqWE9OV3loUzBUWW1HUWswRGR3SmlUYlEvNDZoRHRFRWlFS1QvVGFCMHJuWGdnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNIMWNoZXN2aE9HL2JkT0VIbFIxYlkrWnlwNy91Yzg5V25xbkN6dEFaTlpFMkdwZzA2ZE5MNlpTRkM2d2xmV1dWTEZJeVpIVkxKVkZWRTgxRndkdmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjM1OTcwMDg6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQyNjg4MzBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
