import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 60,
    title: 'Brake pads',
    description: 'BOSCH',
  },
  {
    id: 'p2',
    price: 50,
    title: 'Oil lube',
    description: 'Pennzoil 5l',
  },
  {
    id: 'p3',
    price: 1000,
    title: 'Sport Suspension',
    description: 'BC Racing',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Promo products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
          ))}
      </ul>
    </section>
  );
};

export default Products;
