import './products.scss';
import { productsDetail } from '../../data/productsDetails';
import { About } from '../../components/about/About';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartActionTypes } from '../../reducers/CartReducer';
import { Product } from '../../models/Product'; 

export const Products = () => {
  const { dispatch } = useContext(CartContext);

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const increase = (productId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const decrease = (productId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: prev[productId] > 1 ? prev[productId] - 1 : 1,
    }));
  };

  const addToCart = (p: Product) => {
    const amount = quantities[p.id] || 1;
    dispatch({
      type: CartActionTypes.ADDED,
      payload: JSON.stringify({ ...p, amount }),
    });
    setQuantities((prev) => ({ ...prev, [p.id]: 1 }));
  };

  return (
    <>
      <About />
      <h2 id='productsSectionScroll' className='p-header'>Products</h2>
      <div className="wrapper">
        {productsDetail.map((p: Product) => {  
          const amount = quantities[p.id] || 1;

          return (
            <div key={p.id} className="products-wrapper">
              <img src={p.img} alt={p.name} />
              <h2 className='p-name'>{p.name}</h2>
              <p className="p-description">{p.description}</p>
              <span className="p-price">{p.price} SEK</span>

              <div className='inc-dec-wrapper'>
                <button
                  className='incr-decr-btn'
                  onClick={() => decrease(p.id)}
                  disabled={amount <= 1}
                >-</button>
                <span className='count'>{amount}</span>
                <button
                  className='incr-decr-btn'
                  onClick={() => increase(p.id)}
                >+</button>
              </div>

              <button
                className='add-product-btn'
                onClick={() => addToCart(p)}
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
