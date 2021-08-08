import { Module, forwardRef } from '@nestjs/common';
import { ImagesController } from '~/multimedia/images/controllers/images.controller';
import { imageProviders } from '~/multimedia/images/images.providers';
import { ThumbnailImageService } from '~/multimedia/images/services/thumbnail-image.service';
import { UserModule } from '~/user/user.module';
import { DatabaseModule } from '~/commons/database/database.module';
@Module({
  imports: [
    forwardRef(() => UserModule),
    DatabaseModule,
  ],
  controllers: [ImagesController],
  providers: [
    ThumbnailImageService,
    ...imageProviders,
  ],
  exports: [
  ]
})
export class ImagesModule { }
