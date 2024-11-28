import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/ProductSection";
import "./Home.css";
import productCsvFile from "../../data/products.csv?raw";
import purchaseHistoryCsvFile from "../../data/purchase_history.csv?raw";
import { useCsvLoader } from "../../hooks/useCsvLoader";
import { useAuth } from "../../contexts/AuthContext";
const Home = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const [purchaseCategory, setPurchaseCategory] = useState([]);

  const [products, productError] = useCsvLoader(productCsvFile);
  const [purchaseHistory, purchaseHistoryError] = useCsvLoader(
    purchaseHistoryCsvFile
  );

  const { user } = useAuth();

  useEffect(() => {
    if (products.length > 0 && purchaseHistory.length > 0) {
      const userPurchaseHistory = purchaseHistory.filter(
        (purchase) => purchase.UserID === user.UserID
      );

      const purchasedCategories = new Set(
        userPurchaseHistory.map(
          (purchase) =>
            products.find((product) => product.ProductID === purchase.ProductID)
              ?.Category
        )
      );

      const newCategoryProducts = products
        .filter((product) => !purchasedCategories.has(product.Category))
        .sort((a, b) => a.ProductName.localeCompare(b.ProductName));

      const purchasedCategoryProducts = products
        .filter((product) => purchasedCategories.has(product.Category))
        .sort((a, b) => a.ProductName.localeCompare(b.ProductName));

      setDisplayProducts([
        ...newCategoryProducts,
        ...purchasedCategoryProducts,
      ]);

      setPurchaseCategory([...purchasedCategories]);
      // console.log(userPurchaseHistory, purchasedCategories);
    }
  }, [products, purchaseHistory, user]);

  return (
    <div>
      <Header />
      <main>
        <ProductSection
          products={displayProducts}
          purchaseCategory={purchaseCategory}
        />
      </main>
    </div>
  );
};

export default Home;
