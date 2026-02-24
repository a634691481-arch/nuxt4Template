let myfn = {}

// 单张图片预览
myfn.previewImage = url => {
  uni.previewImage({
    urls: [url],
    current: url
  })
}
// 多张图片预览
myfn.previewImages = urls => {
  uni.previewImage({
    urls,
    current: urls[0]
  })
}

export default myfn
