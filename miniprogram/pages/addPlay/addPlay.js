// miniprogram/pages/addPlay/addPlay.js
const chooseLocation = requirePlugin('chooseLocation')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
    },
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  initData: function () {
    const types = app.globalData.form.types;
    const items = app.globalData.items;
    types.forEach(t => {
      items.forEach(item => {
        if (Number(t) == item.value) {
          item.checked = true
        }
      })
    })
    this.setData({ items: items });
    this.setData({ form: app.globalData.form })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.initData();
    const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    if (location != null) {
      const data = this.data.form;
      data.address = location.address;
      data.longitude = location.longitude;
      data.latitude = location.latitude;
      this.setData({ form: data})
    }
  },
  toInfo: function () {
    wx.navigateTo({
      url: '../infos/infos?url=https://mp.weixin.qq.com/s/-3ja2uvxVDw8TfwdsT7dVA'
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(this.data)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  formName: function (e) {
    app.globalData.form.name = e.detail.value    
  },
  changeHot: function (e) {
    app.globalData.form.isHot = e.detail.value
  },
  changeFree: function (e) {
    app.globalData.form.isFree = e.detail.value
  },

  changeTypes: function(e){
    console.log(e.detail.value)
    app.globalData.form.types = e.detail.value
  },

  urls: function (e) {
    app.globalData.form.url = e.detail.value
  },

  toAdd: function (e) {
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: function (res) {
    //     console.log(res);
    //     console.log("toAdd");
    //     const key = 'EPCBZ-SW5EP-RV2D2-LY7H5-OMXV7-MRFHS'; //使用在腾讯位置服务申请的key
    //     const referer = '球场检索'; //调用插件的app的名称
    //     const location = JSON.stringify({
    //       latitude: res.latitude,
    //       longitude: res.longitude
    //     });
    //     const category = '';
    //     wx.navigateTo({
    //       url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
    //     });
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   }
    // })

    const key = 'EPCBZ-SW5EP-RV2D2-LY7H5-OMXV7-MRFHS'; //使用在腾讯位置服务申请的key
    const referer = '球场检索'; //调用插件的app的名称
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer
    });
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