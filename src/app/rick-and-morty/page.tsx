import Image from "next/image";
import { AccessControl } from "accesscontrol";

import { Response, fetchCharacters } from "./characters/data/dto";
import { grantList } from "./access-control/permission";

async function Home() {
  const ac = new AccessControl(grantList);

  const userPermission = ac.can('user').updateAny('posts');

  const resp: Response = await fetchCharacters();

  if (resp.error) {
    return <p>{resp.error}</p>
  }

  return <div className="max-w-7xl m-auto space-y-5 pt-5">
    <button className="bg-red-500 text-white px-2 py-1 rounded-md"> Permission Control Button </button>
    {userPermission.granted &&
      <div className="grid grid-cols-4 w-full gap-5">
        {resp?.data?.results?.map((item: any, index: number) => {
          return <div className="space-y-2" key={index}>
            <Image src={item.image} width={200} height={200} alt={item.name} />
            <p className="text-md font-bold text-ellipsis">{item.name}</p>
          </div>
        })}
      </div>}
  </div>;
}

export default Home;
