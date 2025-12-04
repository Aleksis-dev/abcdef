import { router } from "@inertiajs/react";
import { useState } from "react";

import Dashboard from "../Dashboard";
import Leaderboard from "../Leaderboard";
import MainGame from "../MainGame";

function App( { user, window, extra } ) {

    const windows = {
        "dashboard" : <Dashboard />,
        "leaderboard" : <Leaderboard data={extra} />,
        "maingame" : <MainGame User={user} />
    }

    const [activeTab, setActiveTab] = useState(windows[window]);

    const onClick = () => {
        router.post("/logout")
    }

    return <>
        <div className="flex flex-row bg-neutral-700 h-[7vh] items-center">
            <h1 className="ml-5">GeoGuessr But it's latvia only</h1>
            <button onClick={() => {router.get("/play")}} className="ml-auto bg-blue-500 h-full w-[15vw] skew-x-5 transition-all duration-150 border-white hover:border-5 active:border-10" >Play</button>
            <button onClick={() => {router.get("/user")}} className="text-black bg-white h-full w-[15vw] skew-x-5 transition-all duration-150 border-blue-500 hover:border-5 active:border-10">Dashboard</button>
            <button onClick={() => {router.get("/leaderboard")}}className="bg-blue-500 h-full w-[15vw] skew-x-5 transition-all duration-150 border-white hover:border-5 active:border-10">Leaderboard</button>
            <p className="ml-auto mr-5">{user.name}</p>
            <p className="mr-10">Points: {user.points}</p>
            <button onClick={onClick} className="mr-5 border-white border-1 px-3 py-1 rounded-sm transition-all duration-150 hover:opacity-75 active:opacity-50">Logout</button>
        </div>
        <div className="h-[93vh] transition-all duration-150 flex flex-col justify-center items-center">
            {activeTab}
        </div>
    </>
}

export default App;