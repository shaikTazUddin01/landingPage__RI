"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";

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

const OrderSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    color: "black",
    quantity: 1,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleQuantityChange = (type: "increase" | "decrease") => {
    setFormData((prev) => ({
      ...prev,
      quantity:
        type === "increase"
          ? Math.min(10, prev.quantity + 1)
          : Math.max(1, prev.quantity - 1),
    }));
  };

  const handleQuantityInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setFormData((prev) => ({
        ...prev,
        quantity: Math.min(10, Math.max(1, value)),
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your full name";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.address.trim())
      newErrors.address = "Please enter your delivery address";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const orderDetails = {
          customerInfo: {
            name: formData.name,
            phone: formData.phone,
            deliveryAddress: formData.address,
          },
          productDetails: {
            name: "Royal Enfield Helmet",
            color: formData.color,
            quantity: formData.quantity,
            pricePerUnit: PRICE,
            totalAmount: PRICE * formData.quantity,
          },
          paymentMethod: "Cash on Delivery",
          orderDate: new Date().toISOString(),
        };

        console.log("Order processed successfully:", orderDetails);
        alert(
          "Thank you for your order! We will contact you shortly for confirmation."
        );

        // Reset form
        setFormData({
          name: "",
          phone: "",
          address: "",
          color: "black",
          quantity: 1,
        });
      } catch (error) {
        console.error("Order processing failed:", error);
        alert(
          "Sorry, there was an error processing your order. Please try again."
        );
      }
    }
  };

  const PRICE = 29.99;
  const total = PRICE * formData.quantity;

  const colors = [
    { value: "black", label: "Black", bg: "bg-black" },
    { value: "white", label: "White", bg: "bg-white border-2" },
    { value: "red", label: "Red", bg: "bg-red-600" },
    { value: "blue", label: "Blue", bg: "bg-blue-600" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Place Your Order
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Complete your purchase with our secure checkout process
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <article className="bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <fieldset>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-2 block w-full border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base transition duration-150 ease-in-out`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </fieldset>

              <fieldset>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-2 block w-full border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base transition duration-150 ease-in-out`}
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </fieldset>

              <fieldset>
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`mt-2 block w-full border ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base transition duration-150 ease-in-out`}
                />
                {errors.address && (
                  <p className="mt-2 text-sm text-red-600">{errors.address}</p>
                )}
              </fieldset>

              <fieldset>
                <legend className="block text-sm font-semibold text-gray-700 mb-3">
                  Select Color
                </legend>
                <div className="flex space-x-6">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, color: color.value }))
                      }
                      className={`w-7 h-7 rounded-full ${color.bg} ${
                        formData.color === color.value
                          ? "ring-4 ring-offset-2 ring-indigo-500"
                          : ""
                      } transform transition-all duration-200 hover:scale-110`}
                      title={color.label}
                      aria-label={`Select ${color.label} color`}
                    />
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="block text-sm font-semibold text-gray-700 mb-3">
                  Quantity
                </legend>
                <div className="flex items-center space-x-6">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange("decrease")}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 text-lg font-medium"
                    aria-label="Decrease quantity"
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
                    className="w-16 h-12 text-center flex font-semibold border-2 border-gray-300 rounded-lg"
                    aria-label="Quantity"
                  />
                  <button
                    type="button"
                    onClick={() => handleQuantityChange("increase")}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 text-lg font-medium"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white rounded-xl py-3 px-6 text-[16px] font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transform transition-all duration-200 hover:-translate-y-1"
              >
                Place Order
              </button>
            </form>
          </article>

          <aside className="bg-white p-8 rounded-2xl shadow-xl h-fit lg:sticky lg:top-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>
            <div className="space-y-6">
              <article className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">
                    Royal Enfield Helmet
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Color: <span className="capitalize">{formData.color}</span>
                  </p>
                  <p className="text-gray-600">Quantity: {formData.quantity}</p>
                </div>
                <p className="text-xl font-bold">${PRICE}</p>
              </article>

              <footer className="border-t-2 pt-6">
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <p>Total Amount</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <p className="mt-4 text-lg font-medium text-green-600 flex items-center">
                  <span className="mr-2">✓</span>
                  Cash on Delivery Available
                </p>
              </footer>
            </div>
          </aside>
        </main>
      </div>
    </section>
  );
};

export default OrderSection;
