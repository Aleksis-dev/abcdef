import { router } from "@inertiajs/react";
import { useState } from "react";

function MainGame( {User} ) {

    const [isGuessing, setIsGuessing] = useState(false);
    const [guessPos, setGuessPos] = useState({x: 0, y: 0});
    const [calcGuess, setCalcGuess] = useState({x: 0, y: 0});
    
    const handleGuess = (e) => {
        let target = e.target.getBoundingClientRect();
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        
        let X = (mouseX - target.left)
        let Y = (mouseY - target.top)

        setIsGuessing(true);
        setGuessPos({x: mouseX, y: mouseY});
        setCalcGuess({x: X, y: Y});

        console.log(guessPos);
    }

    const onSubmit = () => {
        router.post("/submit", calcGuess)
    }

    return <>
        <div className="grid grid-flow-col grid-col-2 gap-5 justify-center items-center w-full h-full">
            <img className="h-[25vw]" src={User.img_url} alt="" />
            <img onClick={handleGuess} className="h-[25vw]" src="http://127.0.0.1:8000/map.svg" alt="" />
        </div>

        {isGuessing && <div className="absolute bg-blue-500 p-1.5 rounded-full transition-all " style={{left: guessPos.x + 'px', top: guessPos.y + "px"}}/>}
        <button onClick={onSubmit} className="px-5 py-2 border-white border-2 absolute mt-[70vh] transition-all duration-150 hover:opacity-75 active:opacity-50">Submit</button>
    </>
}

export default MainGame;