import './about.scss';

export const About = () => {
    return (
        <>
            <section>
                <div className='text-wrap'>
                    <h2>Welcome to <span>Pumkin Brew!</span></h2>
                    <p>At Pumpkin Brew we create handcrafted syrups designed to turn your coffee into the perfect seasonal drink. From creamy pumpkin to warm cinnamon and rich caramel, our flavors are made to bring the cozy feeling of fall to every sip. Whether you want to elevate your morning latte or create a café experience at home, we have the syrup that makes your cup unforgettable.</p>
                </div>
                <img src="/coffemug.png" alt="coffe mug with a splash" />
            </section>
        </>
    )
}