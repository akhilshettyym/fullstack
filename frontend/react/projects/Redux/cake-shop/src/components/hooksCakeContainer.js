import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch()
    return (
        <div>
            {numOfCakes !== 0 && (
                <div className='numOfCakesHooks'>
                    <h1>Number of cakes by hooks- {numOfCakes}</h1>
                    <button className='button' onClick={() => dispatch(buyCake())}>Buy Cake</button>
                </div>
            )}

            {numOfCakes === 0 && (
                <div className='errorHooks'>
                    <h2>Sorry !!! Cakes are out of stock...</h2>
                </div>
            )}
        </div>
    )
}

export default HooksCakeContainer;