import RandomContext from "../context/RandomContext";
import { useContext } from "react";

const Welcome = () => {
    const {count} =useContext(RandomContext)
    
    return (
        <div className="main">
            <div className="welcome">
                <h1>Welcome to my ReactApp</h1>
                <h2>Total views: {count}</h2>  
            </div>
        </div>
    )
};

export default Welcome;