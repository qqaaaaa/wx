// pages/userupd/userupd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:"",
      yanzheng:[],
    getcode:[],
    getcodes:[]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getForm: function(e){
   var name = e.detail.value.name;
   var this1 = this;
   wx.request({
     url: 'http://127.0.0.1/tp5.1/public/index.php/index/indexphone/index',
     method:'get',
     dataType:'json',
     data:{name:name},
     success:function(res){
       var getcode = res.data[1];
       wx.setStorageSync('getcode',getcode)
       
     }
   })
  },
  
  setForm: function(e){
    var code = e.detail.value.code;
    var getcodes = wx.getStorageSync('getcode');
    if(code == getcodes){
      console.log(123);
      wx.navigateTo({
        url: '../usergai/usergai'
      })
    }
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