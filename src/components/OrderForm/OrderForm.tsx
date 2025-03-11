"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
    name: string;
    phone: string;
    address: string;
    color: string;
    quantity: number;
}

interface FormErrors {
    name?: string;
    phone?: string;
    address?: string;
}

const OrderForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        address: '',
        color: 'black',
        quantity: 1
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleQuantityChange = (type: 'increase' | 'decrease') => {
        setFormData(prev => ({
            ...prev,
            quantity: type === 'increase' ? Math.min(10, prev.quantity + 1) : Math.max(1, prev.quantity - 1)
        }));
    };

    const handleQuantityInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setFormData({
                ...formData,
                quantity: Math.min(10, Math.max(1, value))
            });
        }
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.address) newErrors.address = 'Address is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            console.log('Order Details:', {
                customerName: formData.name,
                phoneNumber: formData.phone,
                deliveryAddress: formData.address,
                productDetails: {
                    name: 'Royal Enfield Helmet',
                    color: formData.color,
                    quantity: formData.quantity,
                    pricePerUnit: PRICE,
                    totalAmount: PRICE * formData.quantity
                },
                paymentMethod: 'Cash on Delivery'
            });
            alert('Order submitted successfully!');
        }
    };

    const PRICE = 29.99;
    const total = PRICE * formData.quantity;

    const colors = [
        { value: 'black', label: 'Black', bg: 'bg-black' },
        { value: 'white', label: 'White', bg: 'bg-white border-2' },
        { value: 'red', label: 'Red', bg: 'bg-red-600' },
        { value: 'blue', label: 'Blue', bg: 'bg-blue-600' }
    ];

    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Place Your Order
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                    Delivery Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                />
                                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Color
                                </label>
                                <div className="flex space-x-4">
                                    {colors.map(color => (
                                        <button
                                            key={color.value}
                                            type="button"
                                            onClick={() => setFormData({...formData, color: color.value})}
                                            className={`w-8 h-8 rounded-full ${color.bg} ${formData.color === color.value ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`}
                                            title={color.label}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Quantity
                                </label>
                                <div className="flex items-center space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange('decrease')}
                                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <input 
                                        type="number" 
                                        name="quantity"
                                        min="1"
                                        max="10"
                                        value={formData.quantity}
                                        onChange={handleQuantityInput}
                                        className="w-10 h-10 text-center"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange('increase')}
                                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-medium">Royal Enfield Helmet</h4>
                                    <p className="text-sm text-gray-500">Color: {formData.color}</p>
                                    <p className="text-sm text-gray-500">Quantity: {formData.quantity}</p>
                                </div>
                                <p className="font-medium">${PRICE}</p>
                            </div>
                            
                            <div className="border-t pt-4">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Total Amount</p>
                                    <p>${total.toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-lg text-green-600">Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;