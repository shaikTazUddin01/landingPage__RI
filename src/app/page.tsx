
import Hero from '@/components/Hero/Hero';
import React from 'react';
import Products from '@/components/Products/Products';
import Reviews from '@/components/Review/Reviews';
export default function Page() {
  return (
    <main>
      <Hero />
      <Products />
      <Reviews />
    </main>
  );
}