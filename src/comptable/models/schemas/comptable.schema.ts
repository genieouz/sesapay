import { UserRoles } from '~/user/enums/user-roles.enum';
import { Schema } from 'mongoose';
import { commonSchemaOptions } from '~/commons/database/common-schema-options';

export const comptableSchema = new Schema({
  phoneNumber: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  domicile: { type: String },
}, commonSchemaOptions);
