// pages/cars/cars.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: true, //购物车是否有数据

    totalMoney: 0, //总金额

    selectAllStatus: false, //是否全选

    uid: 0, //用户ID

    totalCount: 0, //数量

    carts: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var id = 1;
    var this1 = this;
    wx.request({
      url: 'http://www.shop.com/api/getCar',
      method: 'GET',
      dataType: 'json',
      data: {
        id: id
      },
      success: function(res) {
        if (res.data.code == 0) {
          this1.setData({
            hasList: false
          })
        }
        this1.setData({
          carts: res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  bindIptCartNum: function(e) {
    const index = e.currentTarget.dataset.index;
    var num = e.detail.value;
    let carts = this.data.carts;
    carts[index].goods_num = num;
    this.setData({
      carts: carts
    });
  },
  /* 点击减号 */
  bindMinus: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].goods_num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].goods_num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  /* 点击加号 */
  bindPlus: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].goods_num;
    num = num + 1;
    carts[index].goods_num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  //删除商品  
  bindCartsDel(e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '提示',
      content: '您确定要删除吗？',
      success: function(res) {
        if (res.confirm) {
          wx.request({
            url: 'http://www.shop.com/api/delCar',
            method: 'GET',
            dataType: 'json',
            data: {
              id: id
            },
            success: function (res) {
              if (res.data.code == 0) {
                wx.showToast({
                  title: res.data.message,
                  icon: 'none',
                  duration: 1000
                })
              }else{
                wx.showToast({
                  title: res.data.message,
                  icon: 'success',
                  duration: 1000
                })
                
              }
             
            }
          })
        }
      }
    })
  },
  //计算总价  
  getTotalPrice() {
    let carts = this.data.carts;
    // 获取购物车列表    
    let total = 0;
    let num = 0;
    for (let i = 0; i < carts.length; i++) {
      // 循环列表得到每个数据      
      if (carts[i].isSelect) {
        // 判断选中才会计算价格        
        total += carts[i].goods_num * carts[i].goods_price;
        // 所有价格加起来        
        num += carts[i].goods_num;
      }
    }
    this.setData({
      // 最后赋值到data中渲染到页面     
      carts: carts,
      totalCount: num,
      totalMoney: total.toFixed(2)
    });
  },
  //绑定单选  
  bindCheckbox: function(e) {
    var that = this;
    const idx = e.currentTarget.dataset.index;
    let carts = that.data.carts;
    const isSelect1 = carts[idx].isSelect;
    carts[idx].isSelect = !isSelect1;
    that.setData({
      carts: carts,
      selectAllStatus: false
    });
    that.getTotalPrice();
  },
  //绑定多选  
  bindSelectAll: function(e) {
    var that = this;
    let selectedAllStatus = that.data.selectAllStatus;
    let carts = that.data.carts;
    selectedAllStatus = !selectedAllStatus;
    for (var i = 0; i < carts.length; i++) {
      carts[i].isSelect = selectedAllStatus;
    }
    that.setData({
      carts: carts,
      selectAllStatus: selectedAllStatus
    });
    that.getTotalPrice();
  },
  //购物车结算  
  bindjiesuan: function() {
    var that = this;
    let carts = that.data.carts;
    let jscart = [];
    var j = 0
    for (var i = 0; i < carts.length; i++) {
      if (carts[i].isSelect) {
        jscart[j] = carts[i];
        j++;
      }
    }
    if (jscart.length <= 0) {
      wx.showToast({
        title: '未选择商品',
        icon: 'success',
        duration: 1000
      })
      return;
    }
    wx.setStorageSync('jscart', jscart); //存入缓存    
    //转到结算页面    
    wx.navigateTo({
      url: '../orders/orders?amount=' + that.data.totalMoney
    });
  },

})