Component({
  data: {
    selected: 0,
    color: "#807F90",
    selectedColor: "#0cb46a",
    list: [
      {
        text: "职位",
        iconPath: "../icons/zhiwei.png",
        selectedIconPath: "../icons/zhiwei(1).png",
        pagePath: "/pages/index/index"
      },
      {
        text: "消息",
        iconPath: "../icons/xiaoxi.png",
        selectedIconPath: "../icons/xiaoxi(1).png",
        pagePath: "/pages/message/message"
      },
      {
        text: "社区",
        iconPath: "../icons/shequ.png",
        selectedIconPath: "../icons/shequ(1).png",
        pagePath: "/pages/logs/logs"
      },
      {
        text: "我的",
        iconPath: "../icons/wode.png",
        selectedIconPath: "../icons/wode(1).png",
        pagePath: "/pages/me/me"
      },
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})