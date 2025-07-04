import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { join } from 'node:path'
import { MediaService } from './media.service'

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: join(process.cwd(), 'uploads'),
        filename: (req, file, cb) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
          cb(null, `${uniqueSuffix}-${file.originalname}`)
        },
      }),
    }),
  ],
  providers: [MediaService],
  exports: [MediaService],
})
export class MediaModule {}
