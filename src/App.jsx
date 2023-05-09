import React,{ useState } from 'react';

const App = () => {
   const state = useState();
   let [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count+1);
    };

    const DecNum = () => {
        setCount(count-1);
    };
        
    return (
            <>
                <h1 style={{marginLeft:"-5%"}}> {count} </h1>
                <button onClick={IncNum} >Increase</button>
                <button style={{marginLeft:"-10%"}} onClick={DecNum} >Decrease</button>
            </>
        );
};


export default App;