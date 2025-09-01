import { getLatestProducts } from "@/lib/product.action";
import ProductList from "@/components/shared/product/product-list";
const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;
