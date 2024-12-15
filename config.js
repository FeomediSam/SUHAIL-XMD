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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_31_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDcxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0LFxuICAgICAgICA0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzLFxuICAgICAgICA4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRTUxWDlFeEQ0TUVFYWRNL1hiY1BCanhjcXh5TkQzUFZxeUNUVXZ3NUZ0az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRVVoSWVuWnpRVkdnRFZyYVVDVGJtd1wiLFxuICBcInBob25lSWRcIjogXCIxMzA1ZTc2YS00OTNmLTQzNDYtOGRhYy1jYTFkZTc4YjliZjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgODIsXG4gICAgICAyMDIsXG4gICAgICAyMjksXG4gICAgICA2MSxcbiAgICAgIDMwLFxuICAgICAgMTM3LFxuICAgICAgMjMzLFxuICAgICAgMTkyLFxuICAgICAgMTUsXG4gICAgICAyNTQsXG4gICAgICAxMzQsXG4gICAgICAxNTYsXG4gICAgICAxOTQsXG4gICAgICAxNDgsXG4gICAgICAyMjUsXG4gICAgICAzMyxcbiAgICAgIDkzLFxuICAgICAgMjM5LFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMTk4LFxuICAgICAgNixcbiAgICAgIDc5LFxuICAgICAgMTQwLFxuICAgICAgNDEsXG4gICAgICAzNixcbiAgICAgIDIyNCxcbiAgICAgIDE0OCxcbiAgICAgIDExNSxcbiAgICAgIDgzLFxuICAgICAgMTMwLFxuICAgICAgMjE3LFxuICAgICAgMTA0LFxuICAgICAgODUsXG4gICAgICAyMDksXG4gICAgICA4NixcbiAgICAgIDc4LFxuICAgICAgNDIsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCOENEV0oxUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3OTcyMTcxNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTczNTExMzE4MTYxNzQ6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMeWYzWklCRUpPMCs3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlHOGJHVUxzWVNuWVFsREFkSis5UDRJV2d2SEhCVGpzZ2RIQUxxeU9PVUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiblZiNldDd1l3TnlZUmRpcFE2TEk1bFk5NU5JOHJUdE5sRUF3ZExzODNnM0dvMUJESE9CZHdacHdRTGplSWNtUmFTTGRVcXAveUIxdFZSQ1p4eWZiQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidGo4VGMrM3V6ODZxMk9CMVAzcTJTSWlHUHc4MGxabjVRRktSZ1lmenVOTlZ4a0tHZWFDT3VBRmFJT2s3SFlpTmpnVVNkSGNHanN3azBjaHovWnEwQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3OTcyMTcxNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MjY5NDY0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlVUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKVVQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlTElSRUphWENidmorNjBjYUgxQ3NzSlNubjVwdUdjRm9zd1VwcEdzWWVBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwNzcxMTkzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0MjY5NDcwMzkxXCJ9Igp9"  // PUT your SESSION_ID 


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
