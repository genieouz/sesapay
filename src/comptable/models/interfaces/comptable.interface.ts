import { Document } from 'mongoose';
import { IUser } from '~/user/interfaces/user.interface';

export interface IComptable extends Document, IUser {
    
}
