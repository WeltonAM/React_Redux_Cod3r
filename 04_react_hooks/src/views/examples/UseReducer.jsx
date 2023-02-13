import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseReducer = () => {

    const initialState = {
        cart: [],
        products: [],
        user: null,
        number: 0,
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'addNumber2':
                return { ...state, number: state.number + 2 }
            case 'numberMult7':
                return { ...state, number: state.number * 7 }
            case 'numberDiv25':
                return { ...state, number: state.number / 25 }
            case 'numberInt':
                return { ...state, number: parseInt(state.number)  }
            case 'numberAddN':
                return { ...state, number: state.number +  action.payload  }
            case 'login':
                return { ...state, user: { name: action.payload } }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? (
                    <span className="text">{state.user.name}</span>
                ) : (
                    <span className="text">Login</span>
                )}

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'login', payload: 'Karla' })}>Login</button>

                    <button className="btn" onClick={() => dispatch({ type: 'addNumber2' })}>+2</button>

                    <button className="btn" onClick={() => dispatch({ type: 'numberMult7' })}>*7</button>

                    <button className="btn" onClick={() => dispatch({ type: 'numberDiv25' })}>/25</button>

                    <button className="btn" onClick={() => dispatch({ type: 'numberInt' })}>Int</button>

                    <button className="btn" onClick={() => dispatch({ type: 'numberAddN', payload: 10 })}>+10</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
