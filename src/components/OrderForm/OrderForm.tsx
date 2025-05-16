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

    if (!formData.name.trim()) newErrors.name = "আপনার নাম লিখুন";
    if (!formData.phone.trim()) {
      newErrors.phone = "মোবাইল নাম্বার দিন";
    } else if (!/^[\d\s-]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "বৈধ নাম্বার দিন";
    }
    if (!formData.address.trim()) newErrors.address = "ঠিকানা লিখুন";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (validateForm()) {
    const PRICE = 5490;

    const orderDetails = {
      customerInfo: {
        name: formData.name,
        phone: formData.phone,
        deliveryAddress: formData.address,
      },
      productDetails: {
        name: "DXCE BLACK HAIR SHAMPOO",
        color: formData.color,
        quantity: formData.quantity,
        pricePerUnit: PRICE,
        totalAmount: PRICE * formData.quantity,
      },
      paymentMethod: "Cash on Delivery",
      orderDate: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:5000/api/royleEnfield", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      console.log("Order success:", data);

      alert("অর্ডার সম্পন্ন হয়েছে! খুব শীঘ্রই আপনাকে কল করা হবে।");

      setFormData({
        name: "",
        phone: "",
        address: "",
        color: "black",
        quantity: 1,
      });
    } catch (error) {
      console.error("Order processing failed:", error);
      alert("দুঃখিত! কিছু সমস্যা হয়েছে, আবার চেষ্টা করুন।");
    }
  }
};

  const PRICE = 5490;
  const total = PRICE * formData.quantity;

  const colors = [
    { value: "black", label: "Black", bg: "bg-black" },
    // { value: "white", label: "White", bg: "bg-white border-2" },
    // { value: "red", label: "Red", bg: "bg-red-600" },
    // { value: "blue", label: "Blue", bg: "bg-blue-600" },
  ];

  return (
    <section
      className="min-h-screen bg-gray-100 py-10 px-2 text-black"
      id="order_section"
    >
      <div className="max-w-5xl mx-auto border-2 border-green-600 rounded-xl bg-white shadow-xl p-6">
        <h1 className="text-center text-2xl font-bold text-green-700 mb-6">
          অর্ডার করতে নিচের ফর্মটি পূরণ করুন
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="font-semibold">
                আপনার নাম লিখুন
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 w-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="font-semibold">
                মোবাইল নাম্বার
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 w-full border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="address" className="font-semibold">
                সম্পূর্ণ ঠিকানা
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                className={`mt-1 w-full border ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.address && (
                <p className="text-sm text-red-500 mt-1">{errors.address}</p>
              )}
            </div>

            <div>
              <label className="font-semibold">রং বেছে নিন</label>
              <div className="flex space-x-4 mt-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, color: color.value }))
                    }
                    className={`w-8 h-8 rounded-full ${color.bg} ${
                      formData.color === color.value
                        ? "ring-4 ring-green-500"
                        : ""
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-semibold">সংখ্যা</label>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  type="button"
                  onClick={() => handleQuantityChange("decrease")}
                  className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={formData.quantity}
                  onChange={handleQuantityInput}
                  className="w-14 text-center border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => handleQuantityChange("increase")}
                  className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            <div className="hidden lg:flex">
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition "
              >
                অর্ডার করুন ৳{total}
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-2 md:p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold mb-4">আপনার অর্ডার</h2>
            <p className="mb-2 font-medium">প্রোডাক্ট: SKT DW-809 BlackStorm</p>
            <p className="mb-2">রং: {formData.color}</p>
            <p className="mb-2">সংখ্যা: {formData.quantity}</p>
            <p className="mb-2">মূল্য প্রতি পিস: ৳{PRICE}</p>
            <p className="font-bold text-lg">মোট: ৳{total}</p>
            <p className="mt-4 text-green-700 font-medium">ক্যাশ অন ডেলিভারি</p>
            <div className="flex lg:hidden mt-2">
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-extrabold py-3 rounded hover:bg-green-700 transition text-xl"
              >
                অর্ডার করুন
              </button>
            </div>
          </div>
        </form>
        <div className="mt-2 md:mt-8 text-center border-2 border-green-600 py-2 lg:py-4 rounded-lg">
          <p className="lg:text-lg text-xl font-extrabold">
            বিস্তারিত জানতে কল করুন :{" "}
            <span className="text-red-600">01782818810</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
