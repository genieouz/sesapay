import { UserRoles } from '~/user/enums/user-roles.enum';
import { Schema } from 'mongoose';
import { commonSchemaOptions } from '~/commons/database/common-schema-options';
import { agenceModelName } from '~/agence/models/namings/agence.model-name';

export const agentSchema = new Schema({
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
  agence: { type: Schema.Types.ObjectId, ref: agenceModelName },
}, commonSchemaOptions);
