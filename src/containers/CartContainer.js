import React from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import * as message from './../constants/Message';
import CartResult from '../components/CartResult';
import {actRemoveProductInCart, actChangeMessage, actUpdateProductInCart} from './../actions/index';


class CartContainer extends React.Component {

    render() {
        const {cart} = this.props;
        // console.log(cart);
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart) }
            </Cart>
        );
    }

    showCartItem = cart => {
        var result = message.MSG_CART_EMPTY;
        var {onDeleProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
            if(cart.length > 0){
                result = cart.map((item,index) =>{
                    return (
                        <CartItem
                            key={index}
                            item={item}
                            onDeleProductInCart ={onDeleProductInCart}
                            onChangeMessage = {onChangeMessage}
                            onUpdateProductInCart = {onUpdateProductInCart}
                        />
                    )
                }); 
            }
        return result;
    }
    showTotalAmount = cart =>{
        var result = null;
            if(cart.length >0){
              result = <CartResult cart={cart} />
            }
        return result;
    }
}

const mapStateToProps = state =>{
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onDeleProductInCart: (product)=>{
                dispatch(actRemoveProductInCart(product));
        },
        onChangeMessage: message =>{
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product,quantity) =>{
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
