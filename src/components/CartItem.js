import React, {
	Component,
	Fragment
} from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {
	render() {
		var {item} = this.props;
		var { quantity } = item; 
		return ( 
			<Fragment >
				<tr>
					<th scope="row">
					<img src={item.product.image}/>
					</th>
					<td>
					<h5>
						<strong>{item.product.name}</strong>
					</h5>
					</td>
					<td>{item.product.price} $</td>
					<td className="center-on-small-only">
					<span className="qty">{quantity} </span>			{/* chỗ này sẽ đổ ra state.quantity chứ ko phải item.quantity nữa */}
					<div className="btn-group radio-group" data-toggle="buttons">
						<label 
							className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
							onClick ={ ()=>this.onUpdateQuantity(item.product, item.quantity -1)}
						>
						<a>—</a>
						</label>	
						<label 
							className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
							onClick ={ ()=>this.onUpdateQuantity(item.product, item.quantity +1)}
						>
						<a>+</a>
						</label>
					</div>
					</td>
					<td>{this.showTotal(item.product.price, item.quantity)} $</td>
					<td>
					<button 
						type="button" 
						className="btn btn-sm btn-primary waves-effect waves-light" 
						data-toggle="tooltip" 
						data-placement="top" 
						data-original-title="Remove item"
						onClick={ ()=>{this.onDelete(item.product)}}
					>
						X
					</button>
					</td>
				</tr>

			</Fragment>
		);
	}

	onUpdateQuantity = (product, value) =>{
		if(value >0){
				var { onUpdateProductInCart, onChangeMessage} = this.props; 
				onUpdateProductInCart(product, value);
				onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
		}
	}

	onDelete = (product) =>{
		var { onDeleProductInCart, onChangeMessage } = this.props;
		onDeleProductInCart(product);
		onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)

	}
	showTotal = (price,quantity) => {
		return price * quantity;
	}
}

export default CartItem;