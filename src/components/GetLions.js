import LionsList from './LionsList';

import '../css/GetLions.css';
import { useState } from 'react';

function GetLions(){

    const [lions, setLions] = useState(null)
    const [requestState, setRequestState] = useState('')

    const getLionsFromDB = () => {
        fetch('http://localhost:8080/african-lion', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        }).then(async res => {
            const data = await res.json();
            return data
        }).then(data => {
            setLions(data)
            if(data == null){
                setRequestState('No Lions registered in data base')
            }
        })
    }

    return(
        <div className="GetLions">
            <div className="GetLionsHeader">
                <h3>Get Lions</h3>
                <p>Get the whole list of lions registered in the zoo's database</p>
                <button 
                    className="btn btn-primary"
                    onClick={getLionsFromDB}
                >List Lions</button>
            </div>
            <div className="GetLionsBody">
                <div className='row'>
                    {lions && <LionsList lions={lions}/>}
                    {!lions && <p>{requestState}</p>}
                </div>
            </div>
        </div>
    );
}

export default GetLions;