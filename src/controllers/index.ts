import { encodeUserData } from "../helpers/index";
import { IRequestData, IResponseData } from "../interfaces";

export async function hashUserData(userdata: IRequestData): Promise<string> {
    try {
        const hashed = await encodeUserData(userdata);

        // 他の処理があれば

        return hashed;
    } catch (error) {
        throw error;
    }
}

process.on('unhandledRejection', console.dir);
