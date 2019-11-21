// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    that:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onLoad: function (options) {
    //var id = 1;
    var this1 = this;
    wx.request({
      url: "http://www.shop.com/orderBuyer",
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        console.log(res.data);
        this1.setData({
          that: res.data

        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  userupd: function () {
    wx.navigateTo({
      url: '../userupd/userupd'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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