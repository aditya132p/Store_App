// import React from 'react'
import { cartCountInc, cartCountDec } from './store/Cart/cart.action'
import { connect } from 'react-redux'

const Counter = (props) => {
    return (
        <div className=''>
            <h1>count {props.cardCount}</h1>
            <div className='flex gap-3'>
                <button className='bg-slate-500 px-5 py-1' onClick={props.cartCountInc}>inc</button>
                <button className='bg-slate-500 px-5 py-1' onClick={props.cartCountDec}>dec</button>
            </div>

        </div>
    )
}
const mapStateToProps = state => {
    return {
        cardCount: state.cart.cardCount,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cartCountInc: () => dispatch(cartCountInc()),
        cartCountDec: () => dispatch(cartCountDec())
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
