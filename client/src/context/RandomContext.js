import { useState, createContext } from "react";

const RandomContext = createContext();

export const RandomProvider = ({children}) => {
    const [count, setCount] = useState('')

return (
<RandomContext.Provider
value={{setCount, count, randomFunc}}>
    {children}
</RandomContext.Provider>
)
};



export default RandomContext;