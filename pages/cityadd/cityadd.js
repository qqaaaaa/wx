Page({
  data: {
    name:'',
    phone:'',
    address:''
  },
  setForm: function(e){
    var name = e.detail.value['name'];
    var phone = e.detail.value['phone'];
    var address = e.detail.value['address'];
    wx.request({
      url: 'http://www.shop.com/addAddress',
      method: 'get',
      dataType: 'json',
      data: { name: name, phone: phone,address:address},
      success: function (res) {
        if (res.data == 1) {
          wx.navigateTo({

            url: '../city/city'
          })
        }
      }
    })
  },
  //移动选点
  onChangeAddress: function () {
    var _page = this;
    wx.chooseLocation({
      success: function (res) {
        _page.setData({
          chooseAddress: res.name
        });
      },
      fail: function (err) {
        console.log(err)
      }
    });
  }
});