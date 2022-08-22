import { useState } from 'react'
function CounterFunc({ num }) {
    const [counter, setCounter] = useState(num);
    const handelCounterClick = () =>{
       if(counter%3===2){
        setCounter('Boom')
    }
    else{
        setCounter(counter + 1)
    }
    
}
    return (
        <div>
            <p>{counter}</p>
            <button onClick={ handelCounterClick}>Click</button>
            {/* <button onClick={setCounter(counter - 1)}>Click to count down</button>
            <button onClick={ setCounter(counter = 0)}>Click to zero</button> */}
        </div>

    )
}

export default CounterFunc