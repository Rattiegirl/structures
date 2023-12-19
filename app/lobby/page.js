import "../../scss/lobby.scss"
const Seed = ({size}) => {
  return <img className = {`size-${size}`}src="/img/shop/sunflower_seed.png" alt="" />
}
const LobbyPage = () => {
  // return <div className="bg-red-300 border-red-700">team</div>
  return (
    <div className="w-full flex justify-center">
      <div className="page choose-team bg-sand-100 flex">
        <div className="flex-1 flex flex-col">
          <div className="h-20 flex">
            <div className="h-14 text-xl font-bold p-3">Pick an animal team</div>
            <div className="flex justify-center items-center w-20 h-20 text-3xl font-bold p-3 gap-2"><Seed size="lg"/> 4</div>
          </div>
          <div className="flex-1 bg-yellow-0 flex justify-center items-center">
            <div className="flex w-80 justify-center items-center flex-wrap gap-8">
              <div className="bg-blue-300 w-36 h-36"></div>
              <div className="bg-blue-300 w-36 h-36"></div>
              <div className="bg-blue-300 w-36 h-36"></div>
              <div className="bg-blue-300 w-36 h-36"></div>
            </div>
          </div>
          <div className="h-40 bg-yellow-400 flex flex-col">
            <div className="flex-1 flex p-2 gap-3 bg-yellow-500">
              <div className="p-2 bg-green-200">Queue:</div>
              <div className="p-2 bg-green-200">ХОМЯ</div>
              <div className="p-2 bg-green-200">БРОНЕЖЕЛЕТ</div>
            </div>
            <div className="flex flex-1 bg-yellow-600 justify-center items-center">
              <button className="p-2 bg-blue-200" >Ready!</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="h-14 text-xl font-bold p-3 bg-blue-100">Field you’re playing on: Conifer Forest</div>
          <div className="flex h-16 gap-3">
            <div className="w-16 bg-red-300">Radar</div>
            <div className="w-16 bg-red-300 flex p-2 flex-wrap gap-1 justify-center">Scan: <Seed size="sm"/> 2</div>
            <div className="w-36 bg-red-300">Possible threats:</div>
            <div className="w-16">
              <img src="/img/predators/wolf.png" alt="" />
            </div>


          </div>
          <div className="flex-1 bg-blue-400">
            <img src="/img/map.png" alt="" />
          </div>
          <div className="flex h-40 bg-blue-500">
            <div className="flex flex-1 bg-red-100 items-center justify-center flex-col">
              <div className="h-16 w-16 bg-red-300"></div>
              <div className="w-48 p-2 text-xl text-center">Pick a starting point</div>
            </div>
            <div className="flex flex-1 bg-red-100 items-center justify-center flex-col">
              <div className="h-16 w-16 bg-red-300"></div>
              <div className="w-48 p-2 text-xl text-center">Enemy starting point unknown </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default LobbyPage