import React, { useState, useEffect } from 'react';
import { FaHeart, FaHome, FaMapMarkerAlt, FaBed, FaBath, FaRuler } from 'react-icons/fa';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Here you would typically fetch favorites from an API
    // For this example, we'll use mock data
    const mockFavorites = [
      { id: 1, title: 'Sunset Villa', address: '123 Ocean Dr, Beach City', price: 500000, bedrooms: 3, bathrooms: 2, area: 2000 },
      { id: 2, title: 'Mountain Retreat', address: '456 Pine Rd, Mountain Town', price: 350000, bedrooms: 2, bathrooms: 1, area: 1500 },
      { id: 3, title: 'City Loft', address: '789 Main St, Metropolis', price: 450000, bedrooms: 1, bathrooms: 1, area: 1000 },
    ];
    setFavorites(mockFavorites);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Favorite Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
                <FaHeart className="text-red-500" />
              </div>
              <p className="text-gray-600 mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {property.address}
              </p>
              <p className="text-2xl font-bold text-green-600 mb-4">${property.price.toLocaleString()}</p>
              <div className="flex justify-between text-gray-600">
                <span className="flex items-center">
                  <FaBed className="mr-2" />
                  {property.bedrooms} Beds
                </span>
                <span className="flex items-center">
                  <FaBath className="mr-2" />
                  {property.bathrooms} Baths
                </span>
                <span className="flex items-center">
                  <FaRuler className="mr-2" />
                  {property.area} sqft
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

