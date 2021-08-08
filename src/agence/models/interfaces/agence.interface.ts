import { Document } from 'mongoose';

export interface IAgence extends Document {
    name: string;
    address: string;
}
