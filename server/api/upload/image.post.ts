import { readMultipartFormData } from 'h3'
import { writeFile } from 'fs/promises'
import { mkdir, access } from 'fs/promises'
import { constants } from 'fs'
import { AppDataSource } from '../../db/data-source'
import { Image } from '../../entities/Image'

export default defineEventHandler(async event => {
  try {
    // 读取 multipart form data
    const formData = await readMultipartFormData(event)

    if (!formData || formData.length === 0) {
      throw new Error('No file uploaded')
    }

    // 确保 images 目录存在
    const imagesDir = './public/images'
    try {
      await access(imagesDir, constants.F_OK)
    } catch {
      await mkdir(imagesDir, { recursive: true })
    }

    // 处理上传的文件
    const uploadedFiles = []

    for (const part of formData) {
      if (!part || !part.data) continue

      // 验证文件类型
      if (part.type && !part.type.startsWith('image/')) {
        throw new Error(`File ${part.filename} is not an image`)
      }

      // 生成唯一的文件名
      const fileExtension = part.filename?.split('.').pop()?.toLowerCase() || 'jpg'
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExtension}`

      // 定义保存路径（这里我们使用 public/images 目录）
      const savePath = `${imagesDir}/${fileName}`

      // 将文件写入磁盘
      await writeFile(savePath, part.data)

      // 获取数据库连接并保存图片信息到数据库
      const imageRepository = AppDataSource.getRepository(Image)

      const newImage = imageRepository.create({
        filename: fileName,
        originalName: part.filename,
        size: part.data.length,
        mimeType: part.type
      })

      const savedImage = await imageRepository.save(newImage)

      // 添加到上传文件列表
      uploadedFiles.push({
        id: savedImage.id,
        filename: part.filename,
        savedFileName: fileName,
        url: `/images/${fileName}`, // 返回可访问的 URL
        size: part.data.length,
        type: part.type,
        createdAt: savedImage.createdAt
      })
    }

    return {
      success: true,
      message: 'File(s) uploaded successfully',
      data: uploadedFiles.length === 1 ? uploadedFiles[0] : uploadedFiles
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message || 'Upload failed',
      error: error.message
    }
  }
})
