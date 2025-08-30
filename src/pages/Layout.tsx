import { Outlet } from 'react-router';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { useReducer } from 'react';
import { CartReducer } from '../reducers/CartReducer';
import { CartContext } from '../contexts/CartContext';

// Hur sidan ska formas, i detta fallet - header och footer på alla sidor och outlet (innehållet) mellan.

export const Layout = () => {
  const [cart, dispatch] = useReducer(
    CartReducer,
    JSON.parse(localStorage.getItem("cart") || "[]"),
  );

  return (
    <CartContext.Provider value={{cart, dispatch}}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </CartContext.Provider>
  );
};
