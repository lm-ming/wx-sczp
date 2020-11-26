//index.js
//获取应用实例
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  data: {
    // 招聘信息列表
    zhiwei_list: [
      {id:"1",name:"111111"},
      {id:"2",name:"222222"},
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
