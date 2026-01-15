import { getQuery } from 'h3'
import { AppDataSource } from '../../db/data-source'
import { Image } from '../../entities/Image'

export default defineEventHandler(async event => {
  try {
    // 获取查询参数
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const limit = parseInt(query.limit as string) || 10
    const type = (query.type as string) || ''

    // 获取图片仓库
    const imageRepository = AppDataSource.getRepository(Image)

    // 构建查询
    let queryBuilder = imageRepository.createQueryBuilder('image')

    // 根据类型过滤
    if (type) {
      queryBuilder = queryBuilder.andWhere('image.mimeType LIKE :type', { type: `%${type}%` })
    }

    // 获取总数
    const totalImages = await queryBuilder.getCount()

    // 应用分页和排序
    const images = await queryBuilder
      .orderBy('image.createdAt', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getMany()

    // 转换数据格式
    const imageData = images.map(img => ({
      id: img.id,
      url: `/images/${img.filename}`,
      name: img.originalName,
      type: img.mimeType.split('/')[1] || img.mimeType,
      size: img.size,
      createdAt: img.createdAt.toISOString()
    }))

    return {
      success: true,
      data: imageData,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalImages / limit),
        totalImages: totalImages,
        hasNext: page < Math.ceil(totalImages / limit),
        hasPrev: page > 1
      }
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
      data: []
    }
  }
})
