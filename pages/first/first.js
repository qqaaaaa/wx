// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574067628116&di=5332af022fb90c2e59de4cc3d9337999&imgtype=0&src=http%3A%2F%2Fimg.yzt-tools.com%2F20190418%2F05eff1bfc0559be2046bc76b4d5af55a.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cw_600%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574067628116&di=5332af022fb90c2e59de4cc3d9337999&imgtype=0&src=http%3A%2F%2Fimg.yzt-tools.com%2F20190418%2F05eff1bfc0559be2046bc76b4d5af55a.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cw_600%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574067628116&di=5332af022fb90c2e59de4cc3d9337999&imgtype=0&src=http%3A%2F%2Fimg.yzt-tools.com%2F20190418%2F05eff1bfc0559be2046bc76b4d5af55a.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cw_600%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    iconArray:[],
    product:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
     wx.request({
       url: 'http://www.shop.com/api/auth/classify',
       dataType:'json',
        method:'POST',
        success:function(res){
          console.log(res)
          that.setData({
            iconArray:res.data.data
          });
        },
     });

    wx.request({
      url: 'http://www.shop.com/api/auth/product',
      dataType: 'json',
      method: 'POST',
      success: function (res) {
        console.log(res)
        that.setData({
          product: res.data.data
        });
      },
    });

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