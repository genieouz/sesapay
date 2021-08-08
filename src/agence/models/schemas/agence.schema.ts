import { UserRoles } from '~/user/enums/user-roles.enum';
import { Schema } from 'mongoose';
import { commonSchemaOptions } from '~/commons/database/common-schema-options';

export const agenceSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
}, commonSchemaOptions);
