3//index.js
//获取应用实例
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    json: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    
    
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
  onShow: function () {
    var that = this
    wx.request({
      url: 'http://localhost/login.php',
      data: {
        username: 'dencheng',
        password: 'dengcheng'
      },
      success: function (res) {
        console.log(res.data.id)
        that.setData({
          json: res.data.code
        })
      }
    })
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
    this.onLoad()
    wx.stopPullDownRefresh()
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
    return{
      
    }
  },
  opendoc: function(){
    console.log('start')
    wx.downloadFile({
      url: "http://file.wcoguide.com/wco/123.docx",
      success: function (res) {
        console.log('success')
        wx.openDocument({
          filePath: res.tempFilePath
        })
      },
      fail: function() {
        console.log('fail')
      }
    })
    console.log('over')
  }
})


