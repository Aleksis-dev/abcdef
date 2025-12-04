import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

function Leaderboard({data}) {
    const dataVar = Object.entries(data);
    return <>
        <h1>Hello, Leaderboard</h1>
        {dataVar.map((x, val) => {
            return <div key={val}>{x[1].name} Points: {x[1].points}</div>
        })}
    </>
}

export default Leaderboard;