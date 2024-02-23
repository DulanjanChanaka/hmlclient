import React, { useState } from 'react';
import axios from 'axios';

const Shop = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    tele: '',
    email: '',
    shopcode: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to the server
      const response = await axios.post('https://caltexserver.netlify.app/api/shop', formData);
      console.log('Response:', response.data);
      // Reset form data after successful submission
      setFormData({
        name: '',
        address: '',
        tele: '',
        email: '',
        shopcode: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="  my-20 ml-5 ">
      <h2 className="text-2xl font-bold mb-4">Shop Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block">Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block">Telephone:</label>
          <input type="text" name="tele" value={formData.tele} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block">Shop Code:</label>
          <input type="text" name="shopcode" value={formData.shopcode} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default Shop;
