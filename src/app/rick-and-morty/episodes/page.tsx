import React from 'react'
import Image from 'next/image';
import { fetchEpisodes } from './data/dto';
import { Response } from '../characters/data/dto';

export default async function Episodes() {

    const cachedEpisodes: Response = await fetchEpisodes();

    if (cachedEpisodes.error) {
        return <p>{cachedEpisodes.error}</p>
    }

    return <div className="max-w-7xl m-auto space-y-5 pt-5">
        <div className="grid grid-cols-4 w-full gap-5">
            {cachedEpisodes?.data?.results?.map((item: any, index: number) => {
                return <div className="space-y-2" key={index}>
                    <p className="text-md font-bold text-ellipsis">{item.name}</p>
                    <p className='truncate'>{item.episode}</p>
                    <p className=''>Aired On : {item.air_date}</p>
                </div>
            })}
        </div>
    </div>;
}
