import React, {
	Component,
	Fragment
} from 'react';

class Cart extends Component {
	render() {
		var {children} = this.props
		// console.log(children);
		return ( 
			<Fragment >
				<section className="section">
					<div className="table-responsive">
						<table className="table product-table">
							<thead>
							<tr>
								<th />
								<th>Sản Phẩm</th>
								<th>Giá</th>
								<th>Số Lượng</th>
								<th>Tổng Cộng</th>
								<th />
							</tr>
							</thead>
							<tbody>
								{children}
							</tbody>
						</table>
					</div>
				</section>
			</Fragment>
		);
	}
}

export default Cart;