import Header from "../components/Header";
import ProductAvailability from "../components/conditionalRendering/productAvailability";

export default function Product() {
    return (
      <>
      <Header />
        <h2>Product Page</h2>
        <ProductAvailability />
        
      </>
    );
  }