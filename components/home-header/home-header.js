// components/home-header/home-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toAccountMusic:function(event){
      wx.switchTab({
        url: '../../pages/accountMusic/accountMusic',
      })
    },
    toIndex: function (event) {
      wx.switchTab({
        url: '../../pages/index/index',
      })
    }
  }
})