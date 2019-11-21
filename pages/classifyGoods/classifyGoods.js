// pages/classifyGoods/classifyGoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    goods1: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var id = options.classifyId

    // console.log(id)
    wx.request({
      url: 'http://www.shop.com/api/classifyGoods',
      method: 'get',
      data:{
        id:id
      },
      dataType: 'json',
      success: function(e){
        console.log(e.data.data)
        that.setData({
          // barne:tj,
          goods: e.data.data,
          goods1: e.data.data
        })
      }

    })
    

  },
  onImageLoad1: function (e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;         //图片原始宽度
    let oImgH = e.detail.height;        //图片原始高度
    let imgWidth = this.data.imgWidth;  //图片设置的宽度
    let scale = imgWidth / oImgW;        //比例计算
    let imgHeight = oImgH * scale;      //自适应高度

    let images = this.data.brandGoods;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id + "" === imageId) {
        imageObj = img;
        break;
      }
    }

    imageObj.height = imgHeight;

    let loadingCount = this.data.loadingCount - 1;
    let goods = this.data.goods;
    let goods1 = this.data.goods1;

    //判断当前图片添加到左列还是右列
    if (goods.length <= goods1.length) {
      goods.push(imageObj);
    } else {
      goods1.push(imageObj);
    }

    let data = {
      loadingCount: loadingCount,
      goods: goods,
      goods1: goods1
    };

    //当前这组图片已加载完毕，则清空图片临时加载区域的内容
    if (!loadingCount) {
      data.images = [];
    }

    this.setData(data);
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

  },

})