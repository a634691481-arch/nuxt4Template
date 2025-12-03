'use strict'
let vk
const dbName = {
  //test: "vk-test",
}

const exif = require('exif-js')
let db = uniCloud.database()
let _ = db.command
let $ = _.aggregate

let cloudObject = {
  isCloudObject: true,

  _before: async function () {
    vk = this.vk
    // let { customUtil, uniID, config, pubFun } = this.getUtil(); // 获取工具包
  },

  _after: async function (options) {
    let { err, res } = options
    if (err) {
      return
    }
    return res
  },
  //
  //
  //
  //
  // 获取图片列表
  getImageList: async function (data) {
    let res = {
      code: 0,
      msg: ''
    }
    // res.data = await db.collection('image').get()
    res.data = 1
    return res
  },
  // 单个删除图片
  deleteImage: async function (data) {
    let res = {
      code: 0,
      msg: ''
    }
    res.data = 1
    // res.data = await db.collection('image').doc(data.id).remove()
    return res
  },
  //上传图片
  uploadImage: async function (data) {
    let res = {
      code: 0,
      msg: ''
    }
    // 获取当前月份
    let month = new Date().getMonth() + 1
    // 获取当前年份
    let year = new Date().getFullYear()
    let timestamp = Date.now()
    const buffer = Buffer.alloc(1024) // 创建一个1KB的Buffer
    let uploadFileRes = await vk.uploadFile({
      cloudPath: year + '/' + month + '/' + timestamp + '.jpg',
      fileContent: buffer
    })
    console.log('uploadFileRes: ', uploadFileRes.url)

    let exifInfo = await exif.readFromURL(uploadFileRes.url)
    console.log('🚀 ~ :70 ~ exifInfo:', exifInfo)

    let info = await vk.baseDao.add({
      dbName: 'y66_images', // 目标集合名
      dataJson: {
        fileURL: uploadFileRes.url,
        exifInfo: exifInfo
      }
    })
    console.log('info==> ', info)
    return res
  }
}

module.exports = cloudObject
