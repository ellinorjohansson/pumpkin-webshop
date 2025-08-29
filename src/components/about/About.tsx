import './about.scss';
import mug from '../../assets/coffemug.png';

export const About = () => {
  return (
    <>
      <section>
        <div className="text-wrap">
          <h2>
            Welcome to <span>Pumpkin Brew!</span>
          </h2>
          <p>
            At Pumpkin Brew we create handcrafted syrups designed to turn your
            coffee into the perfect seasonal drink. From creamy pumpkin to warm
            cinnamon and rich caramel, our flavors are made to bring the cozy
            feeling of fall to every sip. Whether you want to elevate your
            morning latte or create a café experience at home, we have the syrup
            that makes your cup unforgettable.
          </p>
          <button>
            Scroll to shop{' '}
            <span className="material-symbols-outlined arrow">
              arrow_downward
            </span>
          </button>
        </div>
        <img className="coffe-img" src={mug} alt="coffe mug with a splash" />
      </section>
      <div className="custom-shape-divider-bottom-1756470733">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
};
