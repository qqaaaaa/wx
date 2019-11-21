
// pages/login/login.js

Page({



  /**

   * 页面的初始数据

   */

  data: {
    date: '2016-09-01',


  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  formSubmit: function (e) {

    // console.log(e.detail.value);

    wx.request({

      url: 'http://www.shop.com/api/auth/register', //仅为示例，并非真实的接口地址


      data: {
        birthday: e.detail.value.birthday,

        email: e.detail.value.email,

        name: e.detail.value.name,

        pwd: e.detail.value.pwd

      },

      header: {

        'content-type': 'application/json' // 默认值

      },

      success: function (res) {

        console.log(res.data);

        if (res.statusCode == 200) {

          //访问正常

          if (res.data.error == true) {

            wx.showToast({

              title: res.data.msg,

              icon: 'none',

              duration: 2000,

            })

          } else {

            //缓存

            wx.setStorage({

              key: "student",

              data: res.data.student

            });

            wx.showToast({

              title: "注册成功",

              icon: 'success',

              duration: 20000,

              success: function () {

                setTimeout(function () {

                  wx.switchTab({

                    url: '../../pages/login/login',

                  })

                }, 2000)

              }

            })

          }

        }



      }

    })

  }

})
