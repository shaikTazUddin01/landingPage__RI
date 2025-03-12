import HeroSection from "@/components/Hero/Hero";
import ProductSection from "@/components/Products/Products";
import ReviewSection from "@/components/Review/Reviews";
import OrderSection from "@/components/OrderForm/OrderForm";

export default function Page() {
  return (
    <div>
     <HeroSection/>
     <ProductSection/>
     <ReviewSection/>
     <OrderSection/>
    </div>
  );
}
