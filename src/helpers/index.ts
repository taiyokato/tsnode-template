import * as crypto from 'crypto';
import { IRequestData } from '../interfaces/index';

export async function encodeUserData(userdata: IRequestData): Promise<string> {
    try {
        const shasum = crypto.createHash('sha1');
        shasum.update(`${userdata.username}${userdata.password}`);
        
        const digest: string = shasum.digest('hex'); 
        return digest;
    } catch (error) {
        throw error;
    }
}