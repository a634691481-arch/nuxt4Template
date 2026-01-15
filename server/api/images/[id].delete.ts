import { getRouterParam } from 'h3';
import { AppDataSource } from '../../db/data-source';
import { Image } from '../../entities/Image';
import { unlink } from 'fs/promises';

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');
    
    if (!id) {
      throw new Error('Image ID is required');
    }

    const imageRepository = AppDataSource.getRepository(Image);
    const image = await imageRepository.findOne({ where: { id: parseInt(id) } });

    if (!image) {
      return {
        success: false,
        message: 'Image not found',
      };
    }

    // 删除物理文件
    const imagePath = `./public/images/${image.filename}`;
    try {
      await unlink(imagePath);
    } catch (err) {
      console.warn(`Failed to delete image file: ${imagePath}`, err);
      // 即使文件删除失败，也要继续删除数据库记录
    }

    // 从数据库中删除记录
    await imageRepository.remove(image);

    return {
      success: true,
      message: 'Image deleted successfully',
      data: { id: parseInt(id) },
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || 'Delete failed',
      error: error.message,
    };
  }
});