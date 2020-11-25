//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 招聘信息列表
    zhiwei_list: [
      {id:"1",zhiwei:"UI平面设计工程师",xinzi:"8K-13K",gongsi:"首航蓝天",renshu:"未融资·100-499人",boss:"赵钱孙·招聘者",weizhi:"北京·顺义区"},
      {id:"1",zhiwei:"UI平面设计工程师",xinzi:"8K-13K",gongsi:"首航蓝天",renshu:"未融资·100-499人",boss:"赵钱孙·招聘者",weizhi:"北京·顺义区"},
      {id:"1",zhiwei:"UI平面设计工程师",xinzi:"8K-13K",gongsi:"首航蓝天",renshu:"未融资·100-499人",boss:"赵钱孙·招聘者",weizhi:"北京·顺义区"},
      {id:"1",zhiwei:"UI平面设计工程师",xinzi:"8K-13K",gongsi:"首航蓝天",renshu:"未融资·100-499人",boss:"赵钱孙·招聘者",weizhi:"北京·顺义区"},
      {id:"1",zhiwei:"UI平面设计工程师",xinzi:"8K-13K",gongsi:"首航蓝天",renshu:"未融资·100-499人",boss:"赵钱孙·招聘者",weizhi:"北京·顺义区"},
      {id:"1",zhiwei:"UI平面设计工程师",xinzi:"8K-13K",gongsi:"首航蓝天",renshu:"未融资·100-499人",boss:"赵钱孙·招聘者",weizhi:"北京·顺义区"},
      {id:"1",zhiwei:"UI平面设计工程师",xinzi:"8K-13K",gongsi:"首航蓝天",renshu:"未融资·100-499人",boss:"赵钱孙·招聘者",weizhi:"北京·顺义区"},
    ],
    zpxx_daiyu: [
      {id:"1",daiyu:"3-5年"},
      {id:"2",daiyu:"本科"},
      {id:"3",daiyu:"管吃"},
      {id:"4",daiyu:"社保五险"}
    ],
    // 推荐栏导航
    tujian_list: [
      {id:"1" ,name:"推荐"},
      {id:"2" ,name:"附近"},
      {id:"3" ,name:"最新发布"},
    ],
    // 职位导航
    zw_list: [
      {id:"1",name:"军人专区"},
      {id:"2",name:"UI设计师"},
      {id:"3",name:"网页设计师"}
    ],
    isTuijian: 0,     // 推荐默认值
    isChecked: 0,
    isDisplay: 0,
  },
  // 推荐列表
  tjList(e) {
    this.setData({
      isTuijian: e.target.dataset.id
    })
  },
  // 导航列表
  navList(e) {
    this.setData({
      isChecked: e.target.dataset.id,
      isDisplay: e.target.dataset.id
    })
  },
  // 添加页面跳转
  gotoAdd: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  // 搜索页面跳转
  gotoSousuo: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  // 地址跳转
  dizhi: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  // 筛选跳转
  shaixuan: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  }
})
