import './products.scss';
import { productsDetail } from '../../data/productsDetails';

export const Products = () => {
  return (
    <>
      <section className='wrapper'> 
          {productsDetail.map((p) => (
            <div key={p.id} className='products-wrapper'>
              <img src={p.img} alt={p.name} />
              <h2>{p.name}</h2>
              <p className='p-description'>{p.description}</p>
              <span className='p-price'>{p.price} SEK</span>
            </div>
          ))}
      </section>
    </>
  );
};
