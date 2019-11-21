// pages/usergai/usergai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2016-09-01',
    name:[],
    email:[],
    pwd:[],
    birthday:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  setForm: function(e){
    var name = e.detail.value.name;
    var email = e.detail.value.email;
    var pwd = e.detail.value.pwd;
    var birthday = e.detail.value.birthday;
    wx.request({
      url: 'http://www.shop.com/buyerUpdate',
      method:'get',
      dataType:'json',
      data:{name:name,pwd:pwd,email:email,birthday:birthday},
      success:function(res){
        if(res.data == 1){
          wx.navigateTo({
           
            url: '../user/user'
          })
        }
      }
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
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