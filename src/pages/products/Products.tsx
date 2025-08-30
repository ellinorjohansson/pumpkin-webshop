import './products.scss';
import { productsDetail } from '../../data/productsDetails';
import { About } from '../../components/about/About';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartActionTypes } from '../../reducers/CartReducer';

export const Products = () => {
  const { cart, dispatch } = useContext(CartContext);

  const getProductAmount = (productId: number) => {
    const cartItem = cart.find(ci => ci.product.id === productId);
    return cartItem ? cartItem.amount : 1;
  };

  return (
    <>
      <About />
      <h2 id='productsSectionScroll' className='p-header'>Products</h2>
      <div className="wrapper">
        {productsDetail.map((p) => {
          const amount = getProductAmount(p.id);

          return (
            <div key={p.id} className="products-wrapper">
              <img src={p.img} alt={p.name} />
              <h2 className='p-name'>{p.name}</h2>
              <p className="p-description">{p.description}</p>
              <span className="p-price">{p.price} SEK</span>
              <div className='inc-dec-wrapper'>
                <button
                  className='incr-decr-btn'
                  onClick={() => dispatch({ type: CartActionTypes.DECREASED, payload: p.id.toString() })}
                  disabled={amount <= 1}
                >-</button>
                <span className='count'>{amount}</span>

                <button
                  className='incr-decr-btn'
                  onClick={() =>
                    dispatch({ type: CartActionTypes.INCREASED, payload: JSON.stringify(p) })
                  }
                >+</button>
              </div>
              <button
                className='add-product-btn'
                onClick={() => dispatch({ type: CartActionTypes.ADDED, payload: JSON.stringify(p) })}
              >
                Add product
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
