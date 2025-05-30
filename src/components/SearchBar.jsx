import { useState } from "react";
import ProductList from "../components/ProductList"
import products from "../Data/data.json";
const SearchBar = () => {


 const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =  product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
    <div style={{ margin: "2px 0" }}>
      <input className="p-1 bg-white"
        type="text"
        placeholder="Search food..."
        
        />
      
    </div>
 <ProductList products={filteredProducts} />
 </>
  );
};

export default SearchBar;



