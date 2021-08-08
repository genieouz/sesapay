import { Document } from 'mongoose';
import { IUser } from '~/user/interfaces/user.interface';

export interface IAgent extends Document, IUser {
    agence: string;
}
