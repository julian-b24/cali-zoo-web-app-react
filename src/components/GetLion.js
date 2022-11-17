import LionCard from "./LionCard";

import '../css/GetLion.css';
import { useState } from "react";

function GetLion() {

    const [lionName, setLionName] = useState('')

    const [requestedLion, setRequestedLion] = useState(null)
    const [lionsFather, setLionsFather] = useState(null)
    const [lionsMother, setLionsMother] = useState(null)

    const getLion = () => {
        fetch('http://localhost:8080/african-lion/' + lionName, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        }).then(async res => {
            const data = await res.json();
            return data
        }).then(data => {
            const lion = data
            setRequestedLion(lion.requestedLion)
            setLionsFather(lion.lionFather)
            setLionsMother(lion.lionMother)
        })
    }

    return (
        <div className="GetLion">
            <div className="GetLionHeader">
                <h3>Get Lion</h3>
                <p>Search a saved lion in the database, searching it by it's name.</p>
                <form className="GetLionIdForm">
                    <div className="form-group">
                        <label>Lion's name</label>
                        <input
                            type="text"
                            name="lionName"
                            className="form-control"
                            placeholder="Lion's Name"
                            onChange={(e) => {setLionName(e.target.value)}}
                        />
                    </div>
                </form>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={getLion}
                >Buscar</button>
            </div>

            <div className="GetLionBody">
                
                {requestedLion && <div className="RequestedLionRow">
                    <div className="RequestedLion">
                        <b>Requested Lion</b>
                        <LionCard lion={requestedLion}/>
                    </div>
                </div>}
                
                <div className="LionParents row">
                    {lionsFather && <div className="LionItem">
                        <b>Lion's Father</b>
                        <LionCard lion={lionsFather}/>
                    </div>}
                    
                    {lionsMother && <div className="LionItem">
                        <b>Lion's Mother</b>
                        <LionCard lion={lionsMother}/>
                    </div>}
                </div>
            </div>

        </div>
    );
}

export default GetLion;