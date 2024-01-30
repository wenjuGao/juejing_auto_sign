require('dotenv').config()
module.exports = {
  COOKIE: process.env.COOKIE || '',
  USERID: process.env.USERID || '',
  AID: process.env.AID || '',
  UUID: process.env.UUID || '',
  MS_TOKEN: process.env.MS_TOKEN || '',
  LOGID: process.env.LOGID || '',
  TOKEN: process.env.TOKEN || '',
  SERVERID: process.env.SERVERID || '' // server酱
}
