import ProductCard from "./ProductCard";

import products from "../Data/data.json";

const ProductList = () => {
  // console.log(products);
  return (
    <section className="grid grid-cols-12 gap-4">
      <div className="col-span-12  p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">MENU</h1>

        <div className="grid col-span-12   grid-cols-1 md:grid-cols-2 lg:grid-cols-3    bg-white shadow-2xs">
          {products.map((product, index) => {
            //destructure the given object
            const { id, image, title, category, price } = product;
            return (
                 <ProductCard key={index}  product={product}/>
           
            );
          })}
        </div>
      </div>

     
    </section>
  );
};

export default ProductList;
