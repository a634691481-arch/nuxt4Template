import 'reflect-metadata'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  filename!: string

  @Column()
  originalName!: string

  @Column({ type: 'int' })
  size!: number

  @Column()
  mimeType!: string

  @Column({ default: '' })
  description?: string

  @Column({ type: 'simple-array', default: [] }) // 存储标签数组
  tags!: string[]

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
