import React from 'react';

const Delivery = () => {
  return (
    <div className='bg-white p-5 py-10 text-black'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-6 sm:mt-10 border-4 border-green-500 shadow shadow-green-500 bg-white rounded-2xl text-center space-y-6 sm:space-y-10'>
        <h1 className='text-2xl sm:text-3xl font-semibold leading-snug'>
          সারা বাংলাদেশে <span className='text-red-600'>ক্যাশ অন হোম ডেলিভারিতে</span> পাবেন
        </h1>
        <div className='border rounded-2xl py-3 px-4 border-slate-300 text-xl sm:text-2xl font-medium'>
          বিস্তারিত জানতে ফোন করুন : <span className='text-red-500'>01700528504</span>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
