import React, {
    Component
} from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import { actAddToCart, actChangeMessage } from './../actions/index';

class ProductsContainer extends Component {
    
    render() {
        const { products } = this.props;
        return ( 
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    

    showProducts = (products) => {
        var {onAddToCart, onChangeMessage} = this.props;
        if(products.length > 0){
            return(
                products.map((product, index)=>{
                    return <Product 
                        key={index} 
                        product={product}
                        onAddToCart={onAddToCart}
                        onChangeMessage = {onChangeMessage}
                    />
                })
            )
        }
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        products : state.products			//lấy từ thư mực ./../reducers/index
    }
}
    
const mapDispatchToProps = (dispatch, props)=>{
    return{
        onAddToCart: product =>{ 
                    dispatch(actAddToCart(product, 1));
        },
        onChangeMessage : message =>{
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);