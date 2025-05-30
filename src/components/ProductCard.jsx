import product from "../Data/data.json";

const ProductCard = ({ product}) => {
  const { id, image, name, category, price } = product;
  return (
    <>
   
   
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '10px',
      width: '200px',
      textAlign: 'center',
    }}>
      <img src={image} alt={name} style={{ width: '100%' }} />
      <h3>{name}</h3>
      <p>💲{price}</p>
      <p>{category}</p>

    </div>
    </>
  );
};

export default ProductCard;