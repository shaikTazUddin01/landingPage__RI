import React from 'react';

const Delivery = () => {
    return (
        <div className='bg-white py-10'>
        <div className='max-w-6xl  mx-auto p-4 mt-10 border-4 border-green-500 shadow shadow-green-500 bg-white rounded-2xl text-center space-y-10' >
            <h1 className='text-3xl font-semibold'>
            সারা বাংলাদেশে <span className='text-red-600'>ক্যাশ অন হোম ডেলিভারিতে</span> পাবেন
            </h1>
            <div className='border rounded-2xl py-3 border-slate-300 text-2xl font-medium'>
            বিস্তারিত জানতে ফোন করুন : <span className='text-red-500'>01700528504</span>
            </div>
        </div>
        </div>
    );
};

export default Delivery;