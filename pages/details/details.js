// index/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gg_id: 0,//规格ID
    gg_txt: '',//规格文本
    gg_price: 0,
    red:[],
    images:[],
    shu:[],
    is_shoucang: 0,

    num: 1,
    
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

  },


  previewImage: function (e) {
    var current = e.target.dataset.src;
    var href = this.data.imghref;
    var goodsimg = this.data.goods_img;
    var imglist = [];
    for (var i = 0; i < goodsimg.length; i++) {
      imglist[i] = href + goodsimg[i].img
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imglist// 需要预览的图片http链接列表  
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var id = options.id;
    var c_id = options.c_id;
    // console.log(c_id)
    wx.request({
      url: 'http://www.shop.com/api/details',
      method: 'get',
      data:{
        id:id
      },
      dataType: 'json',
      success: function (e) {
        // console.log(e.data.data)
        that.setData({
          // barne:tj,
          red: e.data.data
        })
      }
    })
    wx.request({
      url: 'http://www.shop.com/api/images',
      method: 'get',
      data: {
        id: id
      },
      dataType: 'json',
      success: function (e) {
        // console.log(e.data.data)
        that.setData({
          // barne:tj,
          images: e.data.data
        })
      }
    })
    wx.request({
      url: 'http://www.shop.com/api/ability',
      method: 'get',
      data: {
        c_id: c_id
      },
      dataType: 'json',
      success: function (e) {
        console.log(e.data.data)
        that.setData({
          // barne:tj,
          shu: e.data.data
        })
      }
    })
  },
  addLike:function(e) {
    console.log(e)
    this.setData({
      isLike: !this.data.isLike
    });


  },
  filter: function (e) {
    //console.log(e);
    var self = this, id = e.currentTarget.dataset.id, txt = e.currentTarget.dataset.txt, price = e.currentTarget.dataset.price
    self.setData({
      gg_id: id,
      gg_txt: txt,
      gg_price: price
    });
  },
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  toggleDialog: function () {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  /**
   * sku 关闭
   */
  closeDialog: function () {
    console.info("关闭");
    this.setData({
      showDialog: false
    });
  },
  /* 减数 */
 
  //价格计算
  priceCount: function (e) {
    this.data.goods.totalMoney = this.data.goods.price * this.data.goods.count;
    this.setData({
      goods: this.data.goods
    })
  },
  /**
   * 加入购物车
   */
  addCar: function (e) {
    var goods = this.data.goods;
    goods.isSelect = false;
    var count = this.data.goods.count;

    var title = this.data.goods.title;
    if (title.length > 13) {
      goods.title = title.substring(0, 13) + '...';
    }

    // 获取购物车的缓存数组（没有数据，则赋予一个空数组）  
    var arr = wx.getStorageSync('cart') || [];
    console.log("arr,{}", arr);
    if (arr.length > 0) {
      // 遍历购物车数组  
      for (var j in arr) {
        // 判断购物车内的item的id，和事件传递过来的id，是否相等  
        if (arr[j].goodsId == goodsId) {
          // 相等的话，给count+1（即再次添加入购物车，数量+1）  
          arr[j].count = arr[j].count + 1;
          // 最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可）  
          try {
            wx.setStorageSync('cart', arr)
          } catch (e) {
            console.log(e)
          }
          //关闭窗口
          wx.showToast({
            title: '加入购物车成功！',
            icon: 'success',
            duration: 2000
          });
          this.closeDialog();
          // 返回（在if内使用return，跳出循环节约运算，节约性能） 
          return;
        }
      }
      // 遍历完购物车后，没有对应的item项，把goodslist的当前项放入购物车数组  
      arr.push(goods);
    } else {
      arr.push(goods);
    }
    // 最后，把购物车数据，存放入缓存  
    try {
      wx.setStorageSync('cart', arr)
      // 返回（在if内使用return，跳出循环节约运算，节约性能） 
      //关闭窗口
      wx.showToast({
        title: '加入购物车成功！',
        icon: 'success',
        duration: 2000
      });
      this.closeDialog();
      return;
    } catch (e) {
      console.log(e)
    }


  }
})