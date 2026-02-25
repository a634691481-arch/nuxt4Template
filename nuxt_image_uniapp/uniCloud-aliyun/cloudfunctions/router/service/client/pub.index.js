'use strict'
let vk = uniCloud.vk // 全局vk实例
// 涉及的表名
const dbName = {
  //test: "vk-test", // 测试表
}

const db = uniCloud.database() // 全局数据库引用
const _ = db.command // 数据库操作符
const $ = _.aggregate // 聚合查询操作符

const cloudObject = {
  isCloudObject: true, // 标记为云对象模式

  _before: async function () {
    vk = uniCloud.vk // 将vk定义为全局对象
    // let { customUtil, uniID, config, pubFun } = this.getUtil(); // 获取工具包
  },

  _after: async function (options) {
    let { err, res } = options
    if (err) {
      if (err instanceof Error) {
        return // 如果是Error类型，直接return;不处理
      }
      return err
    }
    return res
  },

  // 添加图片
  addImage: async function (data) {
    let res = {
      code: 0,
      msg: ''
    }
    res.data = await vk.baseDao.add({
      dbName: 'images',
      dataJson: {
        url: data.url
      }
    })
    return res
  },

  //删除图片
  deleteImage: async function (data) {
    let res = {
      code: 0,
      msg: ''
    }
    // 返回被删除的记录条数
    await vk.baseDao.del({
      dbName: 'images',
      whereJson: {
        _id: data.id
      }
    })
    return res
  },

  // 获取图片列表
  getImages: async function (data) {
    let res = {
      code: 0,
      msg: ''
    }
    res.data = await vk.baseDao.select({
      dbName: 'images', // 表名
      getCount: true, // 是否返回满足条件的记录总数，默认 false
      getMain: true, // 是否只返回rows数据，默认false
      pageIndex: data.page || 1, // 当前第几页
      pageSize: data.limit || 30, // 每页条数
      whereJson: {
        // 条件
      },
      // 代表只显示_id和money字段
      // fieldJson: {
      //   _id: true,
      //   money: true,
      // },
      // 按_id降序 asc 升序 desc 降序
      sortArr: [{ name: '_id', type: data.type ? 'asc' : 'desc' }]
    })

    return res
  },

  // 获取总条数
  getCount: async function (data) {
    let res = {
      code: 0,
      msg: ''
    }
    res.data = await vk.baseDao.count({
      dbName: 'images'
    })
    return res
  }
}

module.exports = cloudObject
