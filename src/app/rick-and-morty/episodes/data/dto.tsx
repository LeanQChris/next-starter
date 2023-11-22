import { endpoints } from "@/core/constant/endpoints";
import { cache } from "react";
import { Response } from "../../characters/data/dto";

export const fetchEpisodes: () => Promise<Response> = cache(async () => {
    try {
        const resp = await fetch(endpoints.rickAndMorty.episodes);
        return { data: await resp.json() }
    } catch (error: any) {
        return { error: error.message };
    }
}
)