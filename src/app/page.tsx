
import Hero from '@/components/Hero/Hero';
import React from 'react';
import Products from '@/components/Products/Products';
import Reviews from '@/components/Review/Reviews';
import OrderForm from '@/components/OrderForm/OrderForm';
export default function Page() {
  return (
    <main>
      <Hero />
      <Products />
      <Reviews />
      <OrderForm/>
    </main>
  );
}