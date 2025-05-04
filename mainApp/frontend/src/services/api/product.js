// Mock product API service

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Sample product data
const products = {
  featured: [
    { id: 1, name: "Pro Runner Shoes", price: 129.99, category: "Running", image: "/api/placeholder/300/300" },
    { id: 2, name: "Basketball Pro Jersey", price: 89.99, category: "Basketball", image: "/api/placeholder/300/300" },
    { id: 3, name: "Tennis Racket Elite", price: 199.99, category: "Tennis", image: "/api/placeholder/300/300" },
    { id: 4, name: "Football Training Kit", price: 149.99, category: "Football", image: "/api/placeholder/300/300" },
  ],
  running: [
    { id: 101, name: "Pro Runner Shoes", price: 129.99, image: "/api/placeholder/300/300" },
    { id: 102, name: "Performance Socks", price: 14.99, image: "/api/placeholder/300/300" },
    { id: 103, name: "Running Shorts", price: 39.99, image: "/api/placeholder/300/300" },
    { id: 104, name: "Hydration Belt", price: 24.99, image: "/api/placeholder/300/300" },
    { id: 105, name: "Fitness Tracker", price: 99.99, image: "/api/placeholder/300/300" },
    { id: 106, name: "Compression Sleeve", price: 19.99, image: "/api/placeholder/300/300" },
  ],
  basketball: [
    { id: 201, name: "Basketball Pro Jersey", price: 89.99, image: "/api/placeholder/300/300" },
    { id: 202, name: "Indoor Basketball", price: 59.99, image: "/api/placeholder/300/300" },
    { id: 203, name: "Basketball Shoes", price: 149.99, image: "/api/placeholder/300/300" },
    { id: 204, name: "Arm Sleeve", price: 19.99, image: "/api/placeholder/300/300" },
    { id: 205, name: "Basketball Shorts", price: 34.99, image: "/api/placeholder/300/300" },
    { id: 206, name: "Training Vest", price: 29.99, image: "/api/placeholder/300/300" },
  ],
  // Add other categories as needed
}

export const getFeaturedProducts = async () => {
  await delay(500)
  return products.featured
}

export const getProductsByCategory = async (category) => {
  await delay(500)
  return products[category.toLowerCase()] || []
}

export const getNewArrivals = async () => {
  await delay(500)
  // Mock new arrivals data
  return [
    {
      id: 1001,
      name: "Ultralight Running Jacket",
      price: 89.99,
      category: "Running",
      date: "New this week",
      image: "/api/placeholder/300/300",
    },
    {
      id: 1002,
      name: "Pro Series Basketball",
      price: 49.99,
      category: "Basketball",
      date: "New this week",
      image: "/api/placeholder/300/300",
    },
    // Add more products as needed
  ]
}

export const getSaleProducts = async () => {
  await delay(500)
  // Mock sale products data
  return [
    {
      id: 601,
      name: "Lightweight Running Shoes",
      originalPrice: 129.99,
      salePrice: 89.99,
      discount: "30%",
      category: "Running",
      image: "/api/placeholder/300/300",
    },
    {
      id: 602,
      name: "Team Basketball Jersey",
      originalPrice: 79.99,
      salePrice: 59.99,
      discount: "25%",
      category: "Basketball",
      image: "/api/placeholder/300/300",
    },
    // Add more products as needed
  ]
}
