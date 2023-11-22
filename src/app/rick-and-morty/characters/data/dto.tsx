import 'server-only';
import { cache } from 'react';
import { endpoints } from '@/core/constant/endpoints';

export interface Response {
    data?: any;
    error?: any;
}

export const fetchCharacters: () => Promise<Response> = cache(async () => {
    try {
        const resp = await fetch(endpoints.rickAndMorty.characters);
        return { data: await resp.json() }
    } catch (error: any) {
        return { error: error.message };
    }
}
)