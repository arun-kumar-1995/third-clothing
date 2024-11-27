import { Header } from "../../components/Header";
import { ProductSection } from "../../components/ProductSection";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <ProductSection />
      </main>
    </div>
  );
};

export default Home;
