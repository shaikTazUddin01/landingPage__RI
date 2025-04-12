import HeroSection from "@/components/Hero/Hero";
import ProductSection from "@/components/Products/Products";
import ReviewSection from "@/components/Review/Reviews";
import OrderSection from "@/components/OrderForm/OrderForm";
import About from "@/components/About/about";

export default function Page() {
  return (
    <div>
     <HeroSection/>
     <About/>
     <ProductSection/>
     <ReviewSection/>
     <OrderSection/>
    </div>
  );
}
