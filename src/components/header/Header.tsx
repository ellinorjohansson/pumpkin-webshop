import './Header.scss';

export const Header = () => {
    return (
        <>
            <header>
                <h1>Pumpkin Brew</h1>
                <button className='cart-btn'><span className="material-symbols-outlined cart-icon">
                    shopping_cart
                </span></button>
            </header>
        </>
    )
}