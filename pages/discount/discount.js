// pages/discount/discount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    youhui:[],
    message:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var this1 = this;
    var that=this;
    var i;
    var l=that.data.youhui;
    wx.request({
      url:'http://www.shop.com/orderDiscount',
      method:'GET',
      dataType:'json',
      success:function(res){
       for(i=0;i<res.data.length;i++){
           l.push(res.data[i].orderdis[0])
       }
        that.setData({
         
          youhui: l
        })
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