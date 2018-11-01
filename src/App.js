import React, {
	Component,
	Fragment
} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';

class App extends Component {
	render() {
		return ( 
			<Fragment >
				<Header/>
				<main id="mainContainer">
					<div className="container">
						<ProductsContainer />
						<MessageContainer/>
						<CartContainer/>
					</div>
				</main>
				<Footer/>
			</Fragment>
		);
	}
}

export default App;