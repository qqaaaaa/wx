
// pages/people/people.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     that:[],
     that1:"",
     message :''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var id = 1;
    var this1 = this;
    wx.request({
      url:"http://www.shop.com/orderBuyer",
      method:'GET',
      datathatType:'json',
      success:function(res){
        console.log(res.data);
        this1.setData({
          that : res.data
         
        })
      }
    })

    wx.request({
      url: "http://www.shop.com/reply",
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        this1.setData({
          that1: res.data

        })
      }
    })
  },
  
  discount: function(){
    wx.navigateTo({
      url: '../discount/discount'
    })
 },
 message: function(){
   wx.navigateTo({
     url: '../message/message'
   })
 },
 city: function(){
   wx.navigateTo({
     url: '../city/city'
   })
 },
 shoucang: function(){
   wx.navigateTo({
     url: '../shoucang/shoucang'
   })
 },
 user:function(){
   wx.navigateTo({
     url: '../user/user'
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

