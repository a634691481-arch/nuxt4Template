import { DataSource } from 'typeorm'
import { readdirSync } from 'fs'
import { join, extname, basename } from 'path'

// 动态导入entities目录下的所有实体
const entities: any[] = []
const entitiesDir = join(__dirname, '../entities')

readdirSync(entitiesDir).forEach(file => {
  if (extname(file) === '.ts' || extname(file) === '.js') {
    const entityName = basename(file, extname(file))
    if (entityName !== 'index') {
      // 排除index文件
      const entityModule = require(join(entitiesDir, file))
      const entity = entityModule[entityName]
      if (entity && typeof entity !== 'function') {
        entities.push(entity)
      }
    }
  }
})

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'nuxt_app',
  synchronize: true, // 开发环境可以用，生产环境建议使用migrations
  logging: false,
  entities: entities,
  subscribers: [],
  migrations: []
})
