import { useState } from "react";
const Conert = () => {
    const [title, setTitle] = useState();
    const [far, setFar] = useState();

    const degre = (e) => {
        setTitle(e)
        setFar(e * 2, 20462)
    }

    const Ffar = (e) => {
        setFar(e)
        setTitle(e / 2, 20462)
    }

    return (<div className="create">
        <label>Kilo :</label>
        <input type="number" value={title} onChange={(e) => degre(e.target.value)} />
        <label>lbs :</label>
        <input type="number" value={far} onChange={(e) => Ffar(e.target.value)} />
    </div>);
}

export default Conert;