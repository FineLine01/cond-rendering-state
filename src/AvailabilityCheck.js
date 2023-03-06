import { useState } from 'react';

export function AvailabilityCheck(){
    const available = "I am here"
    const away = "I am away"
    const [ status, setStatus ] = useState(available)

    return (
        <h1 className="header" onMouseOver={()=>setStatus(available)} onMouseOut={()=>setStatus(away)}>{status}</h1>
    )
}