import {v1, v4, v7} from "uuid";
import { SUPPORTED_VERSIONS } from "../constants";


const VERSION_MAP: Record<SUPPORTED_VERSIONS, () => string> = {v1,v4, v7}

export function generateUUID(version: SUPPORTED_VERSIONS): string {
    if (version.toLowerCase() in VERSION_MAP) {
        return VERSION_MAP[version]();
    }
    throw new Error(`Unsupported version ${version}`);
}


