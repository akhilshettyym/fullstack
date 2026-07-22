import { connect } from 'react-redux'
import { buyIce } from '../redux'

function IceContainer(props) {
    return (
        <>
            {props.numOfIce !== 0 && (
                <div className='numOfIce'>
                    <h1>Number of Ice-Creams - {props.numOfIce}</h1>
                    <button className='button' onClick={props.buyIce}>Buy Ice</button>
                </div>
            )}

            {props.numOfIce === 0 && (
                <div className='errorIce'>
                    <h2>Sorry !!! Ice-Creams are out of stock...</h2>
                </div>
            )}
        </>
    )
}

const mapStateToProps = state => ({
        numOfIce: state.ice.numOfIce
    })

const mapDispatchToProps = dispatch => ({
        buyIce: () => dispatch(buyIce())
    })

export default connect(mapStateToProps, mapDispatchToProps)(IceContainer);