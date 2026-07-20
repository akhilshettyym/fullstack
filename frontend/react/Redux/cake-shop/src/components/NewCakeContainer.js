import { connect } from 'react-redux'
import { buyCake } from '../redux'
import { useState } from 'react'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <>
            {props.numOfCakes !== 0 && (
                <div className='numOfCakesNew'>
                    <h1>Number of cakes - {props.numOfCakes}</h1>
                    <input className='input' type='text' value={number} onChange={e => setNumber(e.target.value)}/>
                    <button className='button' onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
                </div>
            )}

            {props.numOfCakes === 0 && (
                <div className='errorIce'>
                    <h2>Sorry !!! Cakes are out of stock...</h2>
                </div>
            )}
        </>
    )
}

const mapStateToProps = state => ({
        numOfCakes: state.cake.numOfCakes
    })

const mapDispatchToProps = dispatch => ({
        buyCake: number => dispatch(buyCake(number))
    })

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);