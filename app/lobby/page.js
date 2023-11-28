
const LobbyPage = () => {
  // return <div className="bg-red-300 border-red-700">team</div>
  return (
    <div className="w-full flex justify-center">
      <div className="page choose-team bg-red-200 flex">
        <div className="flex-1 bg-yellow-300 flex flex-col">
          <div className="h-20 bg-yellow-100 flex">
            <div className="bg-indigo-100 h-14 text-xl font-bold p-3">Pick an animal team</div>
            <div className="bg-purple-200 flex justify-center items-center w-20 h-20 text-3xl font-bold p-3">() 4</div>
          </div>
          <div className="flex-1 bg-yellow-0 flex justify-center items-center">
            <div className="flex w-80 justify-content items-center flex-wrap gap-8">
              <div className="bg-blue-300 w-36 h-36"></div>
              <div className="bg-blue-300 w-36 h-36"></div>
              <div className="bg-blue-300 w-36 h-36"></div>
              <div className="bg-blue-300 w-36 h-36"></div>
            </div>
          </div>
          <div className="h-32 bg-yellow-400"></div>
        </div>
        <div className="flex-1 bg-orange-400"></div>
      </div>
    </div>
  )
}
export default LobbyPage