//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    zw_list: [
      {id:"1",name:"军人专区"},
      {id:"2",name:"UI设计师"},
      {id:"3",name:"军人专区"}
    ],
    isChecked: 0,
    isDisplay: 0
  },
  navList(e) {
    this.setData({
      isChecked: e.target.dataset.id,
      isDisplay: e.target.dataset.id
    })
  }
})
