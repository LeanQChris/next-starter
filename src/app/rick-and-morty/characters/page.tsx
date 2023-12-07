import React from 'react'
import { Response, fetchCharacters } from './data/dto';
import Image from 'next/image';

export default async function Characters() {

    const resp: Response = await fetchCharacters();

    if (resp.error) {
        console.log()
        return <p>{resp.error}</p>
    }

    return <div className="max-w-7xl m-auto space-y-5 pt-5">
        <div className="grid grid-cols-4 w-full gap-5">
            {resp?.data?.results?.map((item: any, index: number) => {
                return <div className="space-y-2" key={index}>
                    <Image src={item.image} width={200} height={200} alt={item.name} />
                    <p className="text-md font-bold text-ellipsis">{item.name}</p>
                </div>
            })}
        </div>
    </div>;
}
