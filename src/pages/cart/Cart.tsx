import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartActionTypes } from "../../reducers/CartReducer";
import './cart.scss';
import { useNavigate } from "react-router";

export const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <section className="cart-wrapper">
        <div className="back-btn-wrapper">
          <button className="back-btn" onClick={() => navigate('/')}><span className="material-symbols-outlined back-icon">
            chevron_backward
          </span>Back</button>
        </div>
        {cart.length === 0 ? (
          <p className="empty-cart">Cart empty</p>
        ) : (
          <ul>
            {cart.map((ci) => (
              <li key={ci.product.name}>
                <button
                  onClick={() =>
                    dispatch({
                      type: CartActionTypes.DECREASED,
                      payload: ci.product.id.toString(),
                    })
                  }
                  disabled={ci.amount === 1}
                >
                  -
                </button>
                <span className="product-name">
                  {ci.product.name} - {ci.amount}
                </span>
                <button
                  onClick={() =>
                    dispatch({
                      type: CartActionTypes.INCREASED,
                      payload: ci.product.id.toString(),
                    })
                  }
                >
                  +
                </button>
                <button
                  className="remove"
                  onClick={() =>
                    dispatch({
                      type: CartActionTypes.REMOVED,
                      payload: ci.product.id.toString(),
                    })
                  }
                >
                  Ta bort
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="form-wrapper">
        <form>
          <label>
            <h2>Firstname</h2>
            <input type="text" />
          </label>
          <label>
            <h2>Lastname</h2>
            <input type="text" />
          </label>
          <label>
            <h2>Address</h2>
            <input type="text" />
          </label>
          <label>
            <h2>Email</h2>
            <input type="text" />
          </label>
          <label>
            <h2>Address</h2>
            <input type="text" />
          </label>
          <label className="checkbox-label">
            <h2>Terms and condition</h2>
            <input type="checkbox" />
          </label>
          <label className="checkbox-label">
            <h2>Newsletter</h2>
            <input type="checkbox" />
          </label>
          <input type="submit" value="Send" />
        </form>
      </section>
    </>
  );
};