import { Controller, UseGuards, Post, UseInterceptors, UploadedFile, UnprocessableEntityException, Body } from '@nestjs/common';
import { AuthGuard } from '~/auth/guards/auth-guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFilter } from '~/multimedia/images/image-filter';
import { IncomingFile } from '~/multimedia/incoming-file';
import { IUser } from './interfaces/user.interface';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { allowedImageFormats, maxFileSizeForAvatars } from '~/multimedia/images/images-restrictions';
import { UserInput } from '~/user/dto/user.input';
import { UserService } from '~/user/services/user.service';
import { ForRoles } from '~/auth/decorators/for-roles.decorator';
import { UserRoles } from '~/user/enums/user-roles.enum';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }
}
