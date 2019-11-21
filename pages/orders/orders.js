// pages/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shouinfo:{
      id:1,
      name:'张三',
      addr:'北京市海淀区上地街道上地七街八维研修学院',
      phone :'17600173044'
    },
      goods:[],
      add:[],
      order:{
        order_num : '123142142',
        create_time : '2019-11-19'
      },
      money:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goods = wx.getStorageSync('jscart');
    this.setData({
      goods: goods,
      money: options.amount
    })
    var this1 = this; 
    var id = 1;
    wx:wx.request({
      url: 'http://www.shop.com/api/getAddress',
      data: {id:id},
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        this1.setData({
          add: res.data.data
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
    this.onLoad();
  },
  formSubmit:function(e){
    console.log(e.detail.value);
    var goods = wx.getStorageSync('jscart');
    console.log(goods);
    
  }
})