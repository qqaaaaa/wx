
// pages/login/login.js

Page({



  /**

   * 页面的初始数据

   */

  data: {



  },

  formSubmit: function (e) {

    // console.log(e.detail.value);

    wx.request({

      url: 'http://www.shop.com/api/auth/loGin', //仅为示例，并非真实的接口地址


      data: {

        username: e.detail.value.name,

        password: e.detail.value.pwd

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

              key: "id",

              data: res.data.id

            });
            wx.setStorage({

              key: "names",

              data: res.data.names

            });
            wx.setStorage({

              key: "token",

              data: res.data.token

            });

            wx.showToast({

              title: "登陆成功",

              icon: 'success',

              duration: 20000,

              success: function () {

                setTimeout(function () {

                  wx.switchTab({

                    url: '../../pages/people/people',

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
