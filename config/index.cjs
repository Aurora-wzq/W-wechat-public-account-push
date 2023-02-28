/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx168e6ddb9990f554',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '  APP_ID: 'wx168e6ddb9990f554',

 
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,
  // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,
    },
  
      PROVINCE: '河南',
  CITY: '郑州',
     
    
  USERS: [
    {
      // 想要发送的人的名字
      name: '妹妹',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opj-p6KJf2Yp4IyFaACQONvFQmKE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	R5KZ8p78JdNsWEvuW-SaNNXCGFW8LnyRkOLHcT1qntQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-06',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '妹妹', year: '2001', date: '11-06',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '07-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-03' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-07-03' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'R5KZ8p78JdNsWEvuW-SaNNXCGFW8LnyRkOLHcT1qntQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
        { keyword: 'marry_day', date: '2022-07-03' },
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

