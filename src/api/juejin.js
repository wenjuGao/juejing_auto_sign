const request = require('../utils/request')
const { COOKIE, AID, MS_TOKEN, LOGID } = require('../utils/config.js')

module.exports = function () {
  return {
    /**
     * 签到
     */
    checkIn: function () {
      return request({
        url: `https://api.juejin.cn/growth_api/v1/check_in?aid=${AID}&spider=0&msToken=${MS_TOKEN}&a_bogus=EJUmfOZMMsm1qX3FqhDz9JfEQ960YW-ogZEPq5XjwzoS`,
        method: 'post',
        headers: {
          cookie: COOKIE,
          'X-Ms-Token': MS_TOKEN,
          'X-Tt-Logid': LOGID
        }
      })
    },
    /**
     * 抽奖
     */
    drawApi: function () {
      return request({
        url: `https://api.juejin.cn/growth_api/v1/lottery/draw?aid=${AID}&spider=0&msToken=${MS_TOKEN}`,
        method: 'post',
        headers: {
          cookie: COOKIE
        }
      })
    },
    dipLucky: function (params) {
      return request({
        url:
          'https://api.juejin.cn/growth_api/v1/lottery_lucky/dip_lucky?aid=2608',
        method: 'post',
        data: params,
        headers: {
          cookie: COOKIE,
          'X-Ms-Token': MS_TOKEN,
          'X-Tt-Logid': LOGID
        }
      })
    }
  }
}
