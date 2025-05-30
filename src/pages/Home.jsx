import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
// import './index.css'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="  h-screen   bg-[url(/public/images/Edited.jpg)]  bg-center bg-cover"></div>

      <ProductList />
    </>
  );
};
export default Home;
