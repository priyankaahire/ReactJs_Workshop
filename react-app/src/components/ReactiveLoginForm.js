import { useState } from "react";


export default function LoginForm(props) {

    const [username, setUserName] = useState(props.username ?? '');
    const [password, setPassword] = useState(props.password ?? "");

    const handleSubmit = e => {
        e.preventDefault();
        console.log("data", e)

        
    }
    return (
        <>
         <div className="custom-container">
            <div className="custom-main">
                <div className="custom-content">
                    <form onSubmit={handleSubmit}>
                        <h1>User Login</h1>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="uname" 
                            ref={username} 
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}/>
                        <br />
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="pass"
                            ref={password}
                            value={password}
                            onChange ={(e) => setPassword(e.target.value)} />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
         </div>
        </>
       

     
    )
}