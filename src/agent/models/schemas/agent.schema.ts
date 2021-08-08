import { UserRoles } from '~/user/enums/user-roles.enum';
import { Schema } from 'mongoose';
import { commonSchemaOptions } from '~/commons/database/common-schema-options';

export const agentSchema = new Schema({
  phoneNumber: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  domicile: { type: String },
  agence: { type: String },
}, commonSchemaOptions);
