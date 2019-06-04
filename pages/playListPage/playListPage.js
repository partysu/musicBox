// pages/playListPage/playListPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playListId:'',
    songList:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
      playListId: options.id,
    })
    wx.request({
      url: 'http://localhost:3000/playlist/detail?id='+options.id,
      success:(res)=>{
        res.data.playlist.tracks.map(i=>{
          let arName = '';
          i.songName = i.tns ? i.name + '(' + i.tns +')' : i.name;
          for(let j=0;j<i.ar.length;j++){//对ar数组处理，提取其中的ar.name
            arName = arName + i.ar[j].name;
            if(j+1<i.ar.length){
              arName = arName + '/'
            }
          }
          i.authorName = arName + '-' + i.al.name;
          i.rowType = 'song';
        })
        this.setData({
          songList:res.data.playlist.tracks,
        })
        console.log(res.data);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})