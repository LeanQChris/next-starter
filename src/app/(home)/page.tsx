import MyAvatar from "@/components/myAvatar/MyAvatar";

function Home() {
  const modelSrc = 'https://readyplayerme.github.io/visage/male.glb'
  return <div className='relative h-screen'>
    <MyAvatar modelSrc={"https://models.readyplayer.me/65e5b296f11e9fa6e546de1d.glb"} />
  </div>;
}

export default Home;
