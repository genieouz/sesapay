import {
  Controller,
  Get,
  Param,
  Put,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  HttpStatus,
  UnprocessableEntityException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFilter } from '~/multimedia/images/image-filter';
import {
  allowedImageFormats,
  maxFileSizeForAvatars,
} from '~/multimedia/images/images-restrictions';
import { IncomingFile } from '~/multimedia/incoming-file';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { IUser } from '~/user/interfaces/user.interface';

@Controller('multimedia/images')
export class ImagesController {
  constructor(
  ) { }


}
