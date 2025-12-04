import { useState } from "react";
import Register from "./AuthObjs/register";
import Login from "./AuthObjs/login";

function Auth() {

    const [isRegistered, setIsRegistered] = useState(false);

    return <>
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-3xl mb-[1vh]">Geoguessr clone but it's in latvia</h1>
            <h1>{isRegistered ? "Login" : "Signup"}</h1>
            {isRegistered ? <Login /> : <Register />}
            <button onClick={() => {setIsRegistered(prev => !prev)}} className="border-indigo-500 border-b-1 mt-[1vh]">{isRegistered ? "Signup instead" : "Login instead"}</button>
        </div>
    </>
}

export default Auth;