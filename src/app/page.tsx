import HeroSection from "@/components/Hero/Hero";
// import ProductSection from "@/components/Products/Products";
import ReviewSection from "@/components/Review/Reviews";
import OrderSection from "@/components/OrderForm/OrderForm";
import About from "@/components/About/about";
import Delivery from "@/components/Delivery/Delivery";
import QuestionsAnswer from "@/components/Question&Answer/Q&A";
import ProductSection from "@/components/Product/product";

export default function Page() {
  return (
    <div>
     <HeroSection/>
     <About/>
     <ProductSection/>
     <Delivery/>
     <QuestionsAnswer/>
     <ReviewSection/>
     <OrderSection/>
    </div>
  );
}
