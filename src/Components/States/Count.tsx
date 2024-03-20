import React from 'react'
import { useReducer } from 'react'
const initialState = { count: 0 }

type CounterState = {
    count: number
}

// type CounterAction={
//     // type:string
//     type:'increment'|'decrement'|'reset'
//     payload:number
// }

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}
type CounterAction = UpdateAction | ResetAction
function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement': return { count: state.count - action.payload }
        case 'reset': return initialState
        default:
            return state
    }
}


const Count = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>Counter
            Count:{state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })} >
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })} >
                Decrement 10
            </button>
        </div>
    )
}

export default Count