import { useNavigate } from 'react-router';
import './Header.scss';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <h1>Pumpkin Brew</h1>
                <button onClick={() => navigate("/cart")} className='cart-btn'><span className="material-symbols-outlined cart-icon">
                    shopping_cart
                </span></button>
            </header>
        </>
    )
}