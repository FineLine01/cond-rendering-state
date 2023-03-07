import { useState } from "react";

function LoginLogout() {
    const loggedIn = 'You are Logged In';
    const loggedOut = 'You are Logged Out';

    const [status, setStatus] = useState(loggedIn);

    function changeStatus() {
        if (status === loggedIn) {
            setStatus(loggedOut)
        } else {
            setStatus(loggedIn)
        }
    }

    return (
        <div>
            {
                status === loggedIn ?
                <button onClick={changeStatus}>LogOut</button>
                :
                <button onClick={changeStatus}>LogIn</button>
            }
            {status}
        </div>
    )
 }
 export default LoginLogout
