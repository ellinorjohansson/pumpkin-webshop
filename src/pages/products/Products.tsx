import './products.scss';
import { productsDetail } from '../../data/productsDetails';
import { About } from '../../components/about/About';

export const Products = () => {
  return (
    <>
      <About/>
      <h2 className='p-header'>Products</h2>
      <div className="wrapper">
        {productsDetail.map((p) => (
          <div key={p.id} className="products-wrapper">
            <img src={p.img} alt={p.name} />
            <h2 className='p-name'>{p.name}</h2>
            <p className="p-description">{p.description}</p>
            <span className="p-price">{p.price} SEK</span>
          </div>
        ))}
      </div>
    </>
  );
};
