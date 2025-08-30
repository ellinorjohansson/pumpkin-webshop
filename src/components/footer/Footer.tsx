import './footer.scss';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <section className='f-wrapper'>
                <h2 className='logo'>Pumpkin Brew</h2>
                <button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <span className="material-symbols-outlined">arrow_upward</span>
                </button>
            </section>
        </>
    )
}