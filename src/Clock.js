import { useState } from "react";
const Clock = () => {
    let [time, SetTime] = useState();
    time = new Date();

    setTimeout(() => {
        SetTime(new Date())
    }, 100)

    return (
        <div>
            <h2>Wolrd Clock</h2>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
};

export default Clock;
